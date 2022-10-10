import { useKintai } from './report/kintai'
import { useZangyo } from './report/zangyo'

export const switchReport = (mode: string) => {
  if (mode === 'kintai') {
    return useKintai
  }
  if (mode === 'zangyo') {
    return useZangyo
  }
  return useKintai
}
