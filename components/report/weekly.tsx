const UseWeekly = () => {
  const now = new Date()
  const currentMonth = `${now.getMonth() + 1}月`
  return (
    <div>
      <div> {'コンディション'} </div>
      {'体調'}
      <select>
        <option>{'好調'}</option>
        <option>{'普通'}</option>
        <option>{'不調'}</option>
      </select>
      {'ストレス'}
      <select>
        <option>{'ない'}</option>
        <option>{'ある'}</option>
        <option>{'危険'}</option>
      </select>
      {'人間関係'}
      <select>
        <option>{'好調'}</option>
        <option>{'普通'}</option>
        <option>{'不調'}</option>
      </select>
      {'悩み'}
      <select>
        <option>{'ない'}</option>
        <option>{'ある'}</option>
        <option>{'ひどい'}</option>
      </select>
      {'疲れ'}
      <select>
        <option>{'ない'}</option>
        <option>{'ある'}</option>
        <option>{'ひどい'}</option>
      </select>
      {'睡眠'}
      <select>
        <option>{'好調'}</option>
        <option>{'普通'}</option>
        <option>{'不調'}</option>
      </select>
      {'やる気'}
      <select>
        <option>{'好調'}</option>
        <option>{'普通'}</option>
        <option>{'不調'}</option>
      </select>
      <div>
        {'コメント'}
        <textarea />
      </div>
      <div>
        {'予定記入欄'}
        <textarea />
      </div>
    </div>
  )
}

export default function ReportWriting() {
  return <UseWeekly />
}
