import mutateFetch from "@/utils/mutateFetch";
import { ButtonIcon } from "../../Atom/Icon/ButtonIcon";
import useSWRMutation from "swr/mutation";

export default () => {
  const { trigger } = useSWRMutation("/api/auth/logout", (url) => mutateFetch(url), {
    onSuccess: () => window.location.reload(),
  });

  const logout = () => trigger();

  return <ButtonIcon defaultIcon="bi bi-door-closed" onClick={logout} />;
};
