export const WorkClass = [
  'attendance', // 勤怠管理
  'reportWriting', // 報告書作成
  'caseInformationSharing', // 案件共有
  'in-houseMan-hour', // 自社工数報告
  'excelOut', // Excel出力
  '',
] as const

export type Work = typeof WorkClass[number]
