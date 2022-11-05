import axios from 'axios'

export const get = async (url: string) => {
  try {
    return await axios.get(url)
  } catch (err: any) {
    console.log(err)
    throw err
  }
}

export const post = async (url: string, data: Record<never, never>) => {
  try {
    const res = await axios.post(url, data)
    return res
  } catch (err: any) {
    console.log(err)
    throw err
  }
}
