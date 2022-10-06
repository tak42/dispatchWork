import { kintai } from './report/kintai'
import { zangyo } from './report/zangyo'

export const switchReport = (mode: string) => {
  if (mode === 'kintai') {
    return kintai
  }
  if (mode === 'zangyo') {
    return zangyo
  }
  return kintai
}
