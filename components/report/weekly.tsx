const UseWeekly = () => {
  const now = new Date()
  const currentMonth = `${now.getMonth() + 1}月`
  return (
    <div>
      <div>{'週報'}</div>
      <div>{currentMonth}</div>
      <div>
        {'合計就業時間'}
        <input type={'number'} />
      </div>
      <div>
        <div>{'第1週(1~)'}</div>
        {'残業時間'}
        <input type={'text'} />
        {'休み合計(実測値・見込み)'}
        <input type={'text'} />
        {'残業時間'}
        <input type={'text'} />
      </div>
      <div>
        <div>{'第2週(3~)'}</div>
        {'残業時間'}
        <input type={'text'} />
        {'休み合計(実測値・見込み)'}
        <input type={'text'} />
        {'残業時間'}
        <input type={'text'} />
      </div>
      <div>
        <div>{'第3週(10~)'}</div>
        {'残業時間'}
        <input type={'text'} />
        {'休み合計(実測値・見込み)'}
        <input type={'text'} />
        {'残業時間'}
        <input type={'text'} />
      </div>
      <div>
        <div>{'第4週(17~)'}</div>
        {'残業時間'}
        <input type={'text'} />
        {'休み合計(実測値・見込み)'}
        <input type={'text'} />
        {'残業時間'}
        <input type={'text'} />
      </div>
      <div>
        <div>{'第5週(24~)'}</div>
        {'残業時間'}
        <input type={'text'} />
        {'休み合計(実測値・見込み)'}
        <input type={'text'} />
        {'残業時間'}
        <input type={'text'} />
      </div>
      <div>
        <div>{'第6週(31~)'}</div>
        {'残業時間'}
        <input type={'text'} />
        {'休み合計(実測値・見込み)'}
        <input type={'text'} />
        {'残業時間'}
        <input type={'text'} />
      </div>
      <div> {'次月'} </div>
      <div>
        <div>
          {'合計就業時間'}
          <input type={'number'} />
        </div>
        <div>
          {'休暇予定'}
          <input type={'number'} />
        </div>
        <div>
          {'残業見込み'}
          <input type={'number'} />
        </div>
      </div>
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
