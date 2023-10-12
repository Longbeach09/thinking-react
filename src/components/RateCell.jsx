import formatCurrecy from '../utils/formatCurrency'

const RateCell = ({ isEditing, value }) => {
  return isEditing ? (
    <td>
        <input type= "text" value={formatCurrecy(value)}/>
    </td>
  ) : (
    <td>{formatCurrecy(value)}</td>
  )
}
// this goes to the invoice table and table rows and tells it what to do if its true or false
export default RateCell