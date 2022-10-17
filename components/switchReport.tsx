import { useKintai } from './report/kintai'
import { useWeekly } from './report/weekly'

export const switchReport = (mode: string) => {
  if (mode === 'kintai') {
    return useKintai
  }
  if (mode === 'week') {
    return useWeekly
  }
  return useKintai
}
