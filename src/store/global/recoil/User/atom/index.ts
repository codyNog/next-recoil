import { atom, RecoilState } from "recoil";
import { User } from "~/domain/entities/User";

const defaultValue: User = {
  uid: "",
  name: "",
  age: 0,
};

export const userState: RecoilState<User> = atom({
  key: "user",
  default: defaultValue,
});

export const usersState: RecoilState<User[]> = atom({
  key: "users",
  default: [],
});
