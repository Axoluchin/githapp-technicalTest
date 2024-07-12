import axios, { AxiosError } from 'axios'

import { SearchUserProps } from './interfaces'
import { API_HEADERS, ApiInstance } from './config'

export const searchRepos = async (name: string) => {
  try {
    const { data, status } = await ApiInstance.get<SearchUserProps>(
      `/search/repositories?q=${name}+in:name`
    )

    return { data, status }
  } catch (error) {
    const axiosError = error as AxiosError
    return { data: undefined, status: axiosError.status }
  }
}

export const getLanguagesByRepo = async (url: string) => {
  try {
    const { data } = await axios.get<Record<string, number>>(url, {
      headers: API_HEADERS,
    })
    return data
  } catch (error) {
    return {}
  }
}
