import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import axios from 'axios'

axios.get('/invoices')
  .then((response) => {
    
    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <App initialData={response.data}/>
      </React.StrictMode>,
    );
  })
    .catch((error) => {
      console.log(error)
    })

//what this is doing is its taking id and rending our application in app