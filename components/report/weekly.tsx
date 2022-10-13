export const useWeekly = () => {
  return (
    <div>
      <div>{'週報'}</div>
      <div>
        {'10月'}
        {'合計就業時間'}
        <input type={'number'} />
        {'第1週(1~)'}
        <input type={'text'} />
        {'第2週(3~)'}
        <input type={'text'} />
        {'第3週(10~)'}
        <input type={'text'} />
        {'第4週(17~)'}
        <input type={'text'} />
        {'第5週(24~)'}
        <input type={'text'} />
        {'第6週(31~)'}
        <input type={'text'} />
        <div> {'次月'} </div>
        {'合計就業時間'}
        <input type={'number'} />
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
      </div>
    </div>
  )
}
