import { RepoProps, UserProps } from './interfaces'
import { ApiInstance } from './config'
import axios, { AxiosError } from 'axios'

export const searchUser = async (userName: string) => {
  try {
    const { data, status } = await ApiInstance.get<UserProps>(`/users/${userName}`)
    return { data, status }
  } catch (error) {
    const axiosError = error as AxiosError
    return { data: undefined, status: axiosError.status }
  }
}

export const getReposByUser = async (repoUrl: string) => {
  try {
    const { data, status } = await axios.get<RepoProps[]>(repoUrl)
    return { data, status: status }
  } catch (error) {
    const axiosError = error as AxiosError
    return { data: undefined, status: axiosError.status }
  }
}
