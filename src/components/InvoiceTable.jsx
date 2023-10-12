import './InvoiceTable.css';
import ModeButtons from './ModeButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';
import TableHeader from './TableHeader';
import AddButton from './AddButton'
import TableRow from './TableRow'
import { useState } from 'react';

let globalId = 4 

const InvoiceTable = ({initialInvoiceData}) => {

    const [currentData, setCurrentData] = useState(initialInvoiceData)
//takes the invoice data and saves it as current data in a usestate

    const rows =currentData.map((invoiceItem) => {
        //when we map over the invoice data each item is a object now
        const { id, description, rate, hours, isEditing} = invoiceItem
//invouce item is just a name
        return id > 3 ? (
            <TableRow
                key={id}
                initialInvoiceData={{description, rate, hours}}  //same as description: description, rate:, rate    
                initialIsEditing={true}
                deleteFunc={() => deleteRow(id)}
                />
                ) : ( <TableRow
                    key={id}
                    initialInvoiceData={{description, rate, hours, isEditing}}  //same as description: description, rate:, rate    
                    initialIsEditing={false}
                    deleteFunc={() => deleteRow(id)}
                    />)
            })
              //then we return a table row component  makes all of the rows dynamic//
            //get the info from apps and destroctures them  and put them in there place
            

        //addRow function to pass to <addButton /> to give it the ability to adda snw ofject (row) to our currenData array

    const addRow = () => {
        //get copy of current data
        const newInvoiceData =[...currentData]

        // create a new "blank" object for the new roew (modeled after each element in TEST_DATA)
        const newRow = {
            id: globalId,
            description: 'Description',
            rate: '',
            hours: '',
            isEditing: true
        }
        //add newRow object to the end of our copy of currentData
        newInvoiceData.push(newRow)

        //call setCurrentData to change state of currentData
        setCurrentData(newInvoiceData)

        //all above(except newRow) can be done with this instead
        //setCurrentData([...currentData, newRow])
        globalId ++
    }

    // delete function to pass to pass to <TableRow /> components
    const deleteRow = (itemId) => {

        // using the given id ^, find the corresdpondinf element in current data and remove it
        
       const filteredList = currentData.filter((invoiceItem) => invoiceItem.id !== itemId)  
       // the filter makes a new array and says if the invoiceItem doest = the item id itll be added

       setCurrentData(filteredList)

    } // it basically removes the one with the id or skips it 

       



    return (
        <div>
            <table>

                <thead>
                    <TableHeader> </TableHeader>
                </thead>

                <tbody>
                
                    {rows} 
                 </tbody>

                <tfoot>
                    <AddButton  
                        addClick={addRow} 
                    />
                </tfoot>

            </table>
         </div>
        
    )
}
//dont invoce the addClick unless it needs a call back
export default InvoiceTable ;