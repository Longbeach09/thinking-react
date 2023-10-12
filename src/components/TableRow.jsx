import ModeButtons from "./ModeButtons"
import DescriptionCell from "./DescriptionCell"
import RateCell from "./RateCell"
import HoursCell from "./HoursCell"
import formatCurrency from "../utils/formatCurrency"
import { useState } from "react"



  // const {description, rate, hours } = initialInvoiceData
const TableRow = ({initialIsEditing, initialInvoiceData, deleteFunc}) => {
  
const [editMode, setEditMode] = useState(initialIsEditing)
const [description, setDescription] = useState(initialInvoiceData.description)
const [hours, setHours] = useState(initialInvoiceData.hours)  //using usestate o
const [rate, setRate] = useState(initialInvoiceData.rate)

const changeNormalMode =() => setEditMode(false)
const changeEditMode = () => setEditMode (true)

  return (
      <tr>
          <ModeButtons 
              isEditing={editMode} 
              saveClick={changeNormalMode}    //were tying these save and edit clicks to our save and edit button
              editClick={changeEditMode}
              funckyDelete={deleteFunc} 
          />
          <DescriptionCell 
              isEditing={editMode} 
              value={description}
              onValueChange={setDescription}
              //takes the data from the apps.js all the way down to here and puts it in 
          /> 
          <RateCell 
              isEditing={editMode} 
              value ={rate}  //takes data from apps.js all they way down and displays the pay rate
              onValueChange={setRate}
          />
          <HoursCell 
              isEditing={editMode} 
              value ={hours} 
              onValueChange={setHours}
          />
          <td>{formatCurrency( rate * hours)}</td> 
  </tr>
  ) // the td above creates the hourly rate and then add the monney sybols and does the math to get the answer
}

// the initial is editing is set as true in invoce table and just changing all of the data instead of individually setting them

// the main part of the stuff 
export default TableRow