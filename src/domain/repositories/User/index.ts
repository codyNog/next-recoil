import { User } from "~/domain/entities/User";

const defaultValue: User = {
  uid: "",
  name: "",
  age: 0,
};

const getUser = async (): Promise<User> => {
  return await defaultValue;
};

const getUsers = async (): Promise<User[]> => {
  return await [];
};

export const userImpl = {
  getUser,
  getUsers,
};
