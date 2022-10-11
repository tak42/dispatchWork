import { useState } from 'react'

export const useKintai = () => {
  const now = new Date()
  const [requestYear, setRequestYear] = useState(now.getFullYear().toString())
  const [requestMonth, setRequestMonth] = useState(String(now.getMonth() + 1))
  const [displayMonth, setDisplayMonth] = useState(now.getMonth().toString())
  const [startTime, setStartTime] = useState('09:00')
  const [endTime, setEndTime] = useState('18:00')
  const [restStartTime, setRestStartTime] = useState('12:00')
  const [restEndTime, setRestEndTime] = useState('13:00')
  const startLogs = [
    {
      day: '1(土)',
      start: '',
      end: '',
      rest: '',
      notification: '',
    },
    {
      day: '2(日)',
      start: '',
      end: '',
      rest: '',
      notification: '',
    },
    {
      day: '3(月)',
      start: '09:00',
      end: '18:00',
      rest: '12:00~13:00',
      notification: '',
    },
    {
      day: '4(火)',
      start: '',
      end: '',
      rest: '',
      notification: '有給休暇',
    },
    {
      day: '5(水)',
      start: '09:00',
      end: '18:00',
      rest: '12:00~13:00',
      notification: '',
    },
  ]
  const [logs, setLogs] = useState(startLogs)
  const changeDisplayMonthHandler = (event: { target: HTMLInputElement }) => {
    setDisplayMonth(() => event.target.value)
  }
  const changeRequestYearHandler = (event: { target: HTMLInputElement }) => {
    setRequestYear(() => event.target.value)
  }
  const changeRequestMonthHandler = (event: { target: HTMLInputElement }) => {
    setRequestMonth(() => event.target.value)
  }
  const changeStartTimeHandler = (event: { target: HTMLInputElement }) => {
    setStartTime(() => event.target.value)
  }
  const changeEndTimeHandler = (event: { target: HTMLInputElement }) => {
    setEndTime(() => event.target.value)
  }
  const changeRestStartTimeHandler = (event: { target: HTMLInputElement }) => {
    setRestStartTime(() => event.target.value)
  }
  const changeRestEndTimeHandler = (event: { target: HTMLInputElement }) => {
    setRestEndTime(() => event.target.value)
  }
  const submit = () => {
    setLogs([...logs, createUserLogs()])
  }
  const nowJapaneseDay = () => {
    const jpDay = ['日', '月', '火', '水', '木', '金', '土']
    return jpDay[now.getDay()]
  }
  const createUserLogs = () => {
    return {
      day: `${now.getDate().toString()}(${nowJapaneseDay()})`,
      start: startTime,
      end: endTime,
      rest: `${restStartTime}~${restEndTime}`,
      notification: '',
    }
  }
  return (
    <div>
      <div>
        {'申請'}
        <input type={'text'} value={requestYear} onChange={changeRequestYearHandler} />
        {'年'}
        <input type={'text'} value={requestMonth} onChange={changeRequestMonthHandler} />
        {'月'}
        {now.getDate().toString()}
        {'日'}
      </div>
      <div>{'業務'}</div>
      <div>
        {'開始'}
        <input type={'text'} value={startTime} onChange={changeStartTimeHandler} />
      </div>
      <div>
        {'終了'}
        <input type={'text'} value={endTime} onChange={changeEndTimeHandler} />
      </div>
      <div>{'休憩'}</div>
      <div>
        {'開始'}
        <input type={'text'} value={restStartTime} onChange={changeRestStartTimeHandler} />
      </div>
      <div>
        {'終了'}
        <input type={'text'} value={restEndTime} onChange={changeRestEndTimeHandler} />
      </div>
      <div>
        {'届出'}
        <input type={'checkboxl'} />
      </div>
      <div>
        <select>
          <option>{'有給休暇'}</option>
          <option>{'時間有給'}</option>
          <option>{'休日出勤'}</option>
        </select>
      </div>
      <div>
        <button onClick={submit}>登録</button>
      </div>
      <div>
        {'記録'}
        <div>
          <input type={'text'} value={displayMonth} onChange={changeDisplayMonthHandler} />
          {'月'}
        </div>
        <table>
          <thead>
            <tr>
              <th>{'日'}</th>
              <th>{'開始'}</th>
              <th>{'終了'}</th>
              <th>{'休憩'}</th>
              <th>{'届出'}</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, idx) => (
              <tr key={idx}>
                <td>{log.day}</td>
                <td>{log.start}</td>
                <td>{log.end}</td>
                <td>{log.rest}</td>
                <td>{log.notification}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
