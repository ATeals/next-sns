import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

export const MDXComponent = ({ source }: { source: string }) => {
  return (
    <MDXRemote
      source={source}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      }}
    />
  );
};
