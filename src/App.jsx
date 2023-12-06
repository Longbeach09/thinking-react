import './App.css';
import InvoiceTable from './components/InvoiceTable';
import ModeButtons from './components/ModeButtons';
import DescriptionCell from './components/DescriptionCell';

async function App({initialData}) {

  // const initialData = await axios.get('/invoices')
  
  return (
   <InvoiceTable initialInvoiceData={initialData} />
    
  )  // my top level app is passing down the test data to invoce table
}
//and rendering invoce table
export default App;
