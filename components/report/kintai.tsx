export const kintai = () => {
  return (
    <div>
      <div>{'勤怠'}</div>
      <div>
        {'申請'}
        <input type={'text'} />
        {'年'}
        <input type={'text'} />
        {'月'}
        <input type={'text'} />
        {'日'}
      </div>
      <div>{'業務'}</div>
      <div>
        {'開始'}
        <input type={'text'} />
        {'時'}
        <input type={'text'} />
        {'分'}
      </div>
      <div>
        {'終了'}
        <input type={'text'} />
        {'時'}
        <input type={'text'} />
        {'分'}
      </div>
      <div>{'休憩'}</div>
      <div>
        {'開始'}
        <input type={'text'} />
        {'時'}
        <input type={'text'} />
        {'分'}
      </div>
      <div>
        {'終了'}
        <input type={'text'} />
        {'時'}
        <input type={'text'} />
        {'分'}
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
        {'記録'}
        <table>
          <tr>
            <th>{'日'}</th>
            <th>{'開始'}</th>
            <th>{'終了'}</th>
            <th>{'休憩'}</th>
            <th>{'届出'}</th>
          </tr>
          <tr>
            <td>{'1(月)'}</td>
            <td>{'9:00'}</td>
            <td>{'17:30'}</td>
            <td>{'12:00~13:00'}</td>
          </tr>
          <tr>
            <td>{'2(火)'}</td>
            <td>{'9:00'}</td>
            <td>{'17:30'}</td>
            <td>{'12:00~13:00'}</td>
          </tr>
          <tr>
            <td>{'3(水)'}</td>
            <td>{''}</td>
            <td>{''}</td>
            <td>{''}</td>
            <td>{'有給休暇'}</td>
          </tr>
        </table>
      </div>
    </div>
  )
}
