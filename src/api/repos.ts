import { SearchUserProps } from "./interfaces";
import { ApiInstance } from "./config";
import { AxiosError } from "axios";

export const searchRepos = async (name: string) => {
  try {
    const { data, status } = await ApiInstance.get<SearchUserProps>(
      `/search/repositories?q=${name}+in:name`
    );

    return { data, status };
  } catch (error) {
    const axiosError = error as AxiosError;
    return { data: undefined, status: axiosError.status };
  }
};
