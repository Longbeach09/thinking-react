import './InvoiceTable.css';
import ModeButtons from './ModeButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';
import TableHeader from './TableHeader';
import AddButton from './AddButton'
import TableRow from './TableRow'
import { useState } from 'react';
import axios from 'axios';



let globalId = 4 

const InvoiceTable = ({initialInvoiceData}) => {

    const [currentData, setCurrentData] = useState(initialInvoiceData)
//takes the invoice data and saves it as current data in a usestate

    const rows =currentData.map((invoiceItem) => {
        //when we map over the invoice data each item is a object now
        const { id, description, rate, hours, isEditing} = invoiceItem
//invouce item is just a name
return (
    <TableRow
                key={id}
                id={id}
                initialInvoiceData={{description, rate, hours}}  //same as description: description, rate:, rate    
                initialIsEditing={isEditing}
                deleteFunc={() => deleteRow(id)}
                />
)
        // return id > 3 ? (
        //     <TableRow
        //         key={id}
        //         initialInvoiceData={{description, rate, hours}}  //same as description: description, rate:, rate    
        //         initialIsEditing={true}
        //         deleteFunc={() => deleteRow(id)}
        //         />
        //         ) : ( <TableRow
        //             key={id}
        //             initialInvoiceData={{description, rate, hours, isEditing}}  //same as description: description, rate:, rate    
        //             initialIsEditing={false}
        //             deleteFunc={() => deleteRow(id)}
        //             />)
            })
              //then we return a table row component  makes all of the rows dynamic//
            //get the info from apps and destroctures them  and put them in there place
            

        //addRow function to pass to <addButton /> to give it the ability to adda snw ofject (row) to our currenData array

    const addRow = async() => {

         const response =  await axios.post('/addInvoice', {description: "Job Desription here"})

         setCurrentData([...currentData, response.data])
    }

    // delete function to pass to pass to <TableRow /> components
    const deleteRow =  async (itemId) => {

        const response = await axios.delete(`/deleteInvoice/${itemId}`)

        if (!response.data.error) { //if the response did not throw an error

            const filteredList = currentData.filter((invoiceItem) => invoiceItem.id !== itemId)  
            // the filter makes a new array and says if the invoiceItem doest = the item id itll be added
     
            setCurrentData(filteredList)
     
         } // it basically removes the one with the id or skips it 
        }
        // using the given id ^, find the corresdpondinf element in current data and remove it
        

       



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