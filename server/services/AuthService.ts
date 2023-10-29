import { IronSession, getIronSession, unsealData } from "iron-session";
import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies";
import { NextRequest } from "next/server";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: number;
      name?: string;
    };
  }
}

export type DynamicSegments = {
  params: { slug: string } | undefined;
};

export type RouteHandler = (
  request: NextRequest,
  routeSegment: DynamicSegments
) => Promise<Response>;

export type RouteHandlerWithSession = (
  request: NextRequest & { session: IronSession },
  routeSegment: DynamicSegments
) => Promise<Response>;

class AuthService {
  private option = {
    password: process.env.NEXTAUTH_SECRET!,
    cookieName: "auth",
    cookieOptions: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600,
      httpOnly: true,
    },
  };

  async getSession(cookies: ReadonlyRequestCookies) {
    const cookie = cookies.get(this.option.cookieName);
    if (!cookie) return null;

    const session: IronSession = await unsealData(cookie?.value, {
      password: this.option.password,
    });

    return session;
  }

  ironSessionWrapper(handler: RouteHandlerWithSession): RouteHandler {
    return async (request, routeSegment) => {
      const cookieResponse = new Response();
      const session = await getIronSession(request, cookieResponse, this.option);

      const sessionRequest = Object.assign(request, { session });
      const response = await handler(sessionRequest, routeSegment);

      if (response.status >= 300) return response;

      const setCookie = cookieResponse.headers.get("set-cookie");
      if (setCookie) {
        response.headers.set("set-cookie", setCookie);
      }

      return response;
    };
  }
}

export const authService = new AuthService();
