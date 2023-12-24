import mutateFetch from "@/utils/mutateFetch";
import useSWRMutation from "swr/mutation";
import { useRouter } from "next/navigation";
import { ButtonIcon } from "@/client/ui";

export default () => {
  const router = useRouter();
  const { trigger } = useSWRMutation("/api/auth/logout", (url) => mutateFetch(url), {
    onSuccess: () => router.refresh(),
  });

  const logout = () => trigger();

  return <ButtonIcon defaultIcon="bi bi-door-closed" onClick={logout} />;
};
