import Attendance from './kintai'
import ReportWriting from './weekly'
import type { Work } from '../../src/work/technicalEmployee'

type report = { [key in Work]?: JSX.Element }
const reportComponents: report = {
  attendance: <Attendance />,
  reportWriting: <ReportWriting />,
}

export const SwitchReport = (work: Work) => {
  return reportComponents[work]
}
