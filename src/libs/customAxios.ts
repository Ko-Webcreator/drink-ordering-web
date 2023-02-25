import axios, { AxiosResponse } from 'axios'

export const customAxios = () => {
  const fetcher = <T>(url: string, term?: any) =>
    axios({ url, params: { term } }).then((res: AxiosResponse<T>) => res.data)

  const instance = axios.create()

  return {
    fetcher,
    instance,
  }
}
