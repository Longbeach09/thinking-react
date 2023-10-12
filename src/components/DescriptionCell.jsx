
const DescriptionCell = ({isEditing, value }) => {  //takes in is editing from the other folders and returns depending if its true or false

  return isEditing ? (
    <td>
        <input type="text" value= {value}/>
    </td>
  ) : (
    <td>{value}</td>
  
  )
}

export default DescriptionCell