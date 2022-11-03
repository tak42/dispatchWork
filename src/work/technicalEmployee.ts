export const WorkClass = [
  'attendance',
  'reportWriting',
  'caseInformationSharing',
  'in-houseMan-hour',
  'excelOut',
  '',
] as const

export const IconType = [
  'Assignment',
  'BarChart',
  'Dashboard',
  'Layers',
  'People',
  'ShoppingCart',
] as const

export type Work = typeof WorkClass[number]
export type Icon = typeof IconType[number]
type Menu = {
  title: string
  work: Work
  icon: Icon
}

export const EmployeeMenus: Menu[] = [
  {
    title: 'Dashboard',
    work: '',
    icon: 'Dashboard',
  },
  {
    title: '勤怠管理',
    work: 'attendance',
    icon: 'ShoppingCart',
  },
  {
    title: '報告書作成',
    work: 'reportWriting',
    icon: 'Assignment',
  },
  {
    title: '案件共有',
    work: 'caseInformationSharing',
    icon: 'People',
  },
  {
    title: 'Excel出力',
    work: 'excelOut',
    icon: 'Layers',
  },
]
