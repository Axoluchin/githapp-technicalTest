import axios from 'axios'

export const GITHUB_URL = 'https://api.github.com/'

export const API_KEY = process.env.GITHUB_API || '<API_KEY>'

export const API_HEADERS = {
  'X-GitHub-Api-Version': '2022-11-28',
  Accept: 'application/vnd.github+json',
  Authorization: `Bearer ${API_KEY}`,
}

export const ApiInstance = axios.create({
  baseURL: GITHUB_URL,
  headers: API_HEADERS,
})
