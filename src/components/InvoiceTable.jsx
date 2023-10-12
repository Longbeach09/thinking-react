import './InvoiceTable.css';
import ModeButtons from './ModeButtons';
import DescriptionCell from './DescriptionCell';
import RateCell from './RateCell';
import HoursCell from './HoursCell';
import TableHeader from './TableHeader';
import AddButton from './AddButton'
import TableRow from './TableRow'

const InvoiceTable = ({initialInvoiceData}) => {

    const rows =initialInvoiceData.map((invoiceItem) => {
        //when we map over the invoice data each item is a object now
        const { id, description, rate, hours} = invoiceItem
//invouce item is just a name
        return (
            <TableRow
                key={id}
                initialInvoiceData={{description, rate, hours}}
                initialIsEditing={false}
            />
        ) //then we return a table row component  makes all of the rows dynamic//
        //get the info from apps and destroctures them  and put them in there place
        })

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
                    <AddButton />
                </tfoot>

            </table>
         </div>
        
    )
}

export default InvoiceTable ;