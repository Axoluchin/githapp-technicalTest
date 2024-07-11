import { UserProps } from "./interfaces";
import { ApiInstance } from "./config";
import { AxiosError } from "axios";

export const searchUser = async (userName: string) => {
  try {
    const { data, status } = await ApiInstance.get<UserProps>(
      `/users/${userName}`
    );
    return { data, status: status };
  } catch (error) {
    const axiosError = error as AxiosError;
    return { data: undefined, status: axiosError.status };
  }
};
