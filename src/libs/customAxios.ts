import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

export const customAxios = () => {
  const config: AxiosRequestConfig = {
    baseURL: process.env.NEXT_PUBLIC_API_ENDPOINT,
    headers: {
      'Access-Control-Allow-Origin': process.env.NEXT_PUBLIC_API_ENDPOINT,
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  }

  const fetcher = <T>(url: string, term?: any) =>
    axios({ url, params: { term } }).then((res: AxiosResponse<T>) => res.data)

  const instance = axios.create(config)

  return {
    fetcher,
    instance,
  }
}
