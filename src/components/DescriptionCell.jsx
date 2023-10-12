
const DescriptionCell = ({isEditing, value, onValueChange }) => {  
  //takes in is editing from the other folders and returns depending if its true or false
// anytime we type somthing it will put in whatever is in our input feild
  return isEditing ? (
    <td>
        <input 
        type="text" 
        value= {value}
        onChange={(e) =>onValueChange(e.target.value)}
        /> 
    </td>
  ) : (
    <td>{value}</td>
  
  )
}

export default DescriptionCell