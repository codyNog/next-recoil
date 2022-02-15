import { useCallback, useEffect } from "react";
import { useUser } from "~/store/global/hooks/User";

export const useInit = () => {
  const { getUsers } = useUser();

  const init = useCallback(() => {
    getUsers();
  }, [getUsers]);

  useEffect(() => {
    init();
  }, []);
};
