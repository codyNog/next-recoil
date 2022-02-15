import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { backend } from "~/domain";
import { userState, usersState } from "~/store/global/recoil/User/atom";

export const useUser = () => {
  const [user, setUser] = useRecoilState(userState);
  const [users, setUsers] = useRecoilState(usersState);

  const getUser = useCallback(async () => {
    const user = await backend.user.getUser();
    setUser(user);
  }, [setUser]);

  const getUsers = useCallback(async () => {
    const users = await backend.user.getUsers();
    setUsers(users);
  }, [setUsers]);

  return { user, users, getUser, getUsers };
};
