
const ModeButtons = ({isEditing, saveClick, editClick, funckyDelete}) => {

   
  return  isEditing ? (   //if is Editing is true return Save  
  // if false return Delete and edit the question mark and colon
    <td>
        <button onClick={saveClick}>Save</button>  
    </td>

     
  ) : ( 
    <td>
    <button onClick={funckyDelete}>Delete</button>
    <button onClick={editClick}>Edit</button>
    </td>
  
  )
}
// all of the buttons for my prodject
export default ModeButtons