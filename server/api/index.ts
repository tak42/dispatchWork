import axios from 'axios'

export const get = async (url: string) => {
  try {
    const res = await axios.get(url)
    return res
  } catch (err: any) {
    console.log(err)
    throw new Error(err.status)
  }
}
