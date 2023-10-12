import ModeButtons from "./ModeButtons"
import DescriptionCell from "./DescriptionCell"
import RateCell from "./RateCell"
import HoursCell from "./HoursCell"
import formatCurrency from "../utils/formatCurrency"


const TableRow = ({initialIsEditing, initialInvoiceData}) => {
  
  // const {description, rate, hours } = initialInvoiceData
  return (
      <tr>
          <ModeButtons 
              isEditing={initialIsEditing} 
          />
          <DescriptionCell 
              isEditing={initialIsEditing} 
              value={initialInvoiceData.description} //takes the data from the apps.js all the way down to here and puts it in 
          /> 
          <RateCell 
              isEditing={initialIsEditing} 
              value ={initialInvoiceData.rate}  //takes data from apps.js all they way down and displays the pay rate
          />
          <HoursCell 
              isEditing={initialIsEditing} 
              value ={initialInvoiceData.hours} 
          />
          <td>{formatCurrency(initialInvoiceData.rate * initialInvoiceData.hours)}</td> 
  </tr>
  ) // the td above creates the hourly rate and then add the monney sybols and does the math to get the answer
}

// the initial is editing is set as true in invoce table and just changing all of the data instead of individually setting them

// the main part of the stuff 
export default TableRow