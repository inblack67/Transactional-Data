import React, { useEffect } from 'react';

import Customers from './components/Customers'
import CustomerState from './context/customers/CustomerState'


// Styles
import 'materialize-css/dist/css/materialize.min.css'
import MJS from 'materialize-css/dist/js/materialize.min.js';
import './App.css';

function App() {

  useEffect(() => {
    // Materialize Init
    MJS.AutoInit();
  },[])

  return (
    <CustomerState>
      <div className="container">
        <h4 className="center">
          Transactional Data
          <hr/>
        </h4>
        <Customers />
      </div>
    </CustomerState>
  );
}

export default App;
