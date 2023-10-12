
const ModeButtons = ({isEditing}) => {

   
  return  isEditing ? (   //if is Editing is true return Save  
  // if false return Delete and edit the question mark and colon
    <td>
        <button>Save</button>
    </td>

     
  ) : ( 
    <td>
    <button>Delete</button>
    <button>Edit</button>
    </td>
  
  )
}
// all of the buttons for my prodject
export default ModeButtons