import mutateFetch from "@/utils/mutateFetch";
import { ButtonIcon } from "../../Atom/Icon/ButtonIcon";
import useSWRMutation from "swr/mutation";

export default () => {
  const { trigger } = useSWRMutation("/api/auth", (url) => mutateFetch(url, { method: "DELETE" }), {
    onSuccess: () => window.location.reload(),
  });

  const logout = () => trigger();

  return <ButtonIcon defaultIcon="bi bi-door-closed" onClick={logout} />;
};
