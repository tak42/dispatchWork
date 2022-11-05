export const WorkClass = [
  'attendance',
  'reportWriting',
  'caseInformationSharing',
  'in-houseMan-hour',
  'excelOut',
  '',
] as const

export type Work = typeof WorkClass[number]
