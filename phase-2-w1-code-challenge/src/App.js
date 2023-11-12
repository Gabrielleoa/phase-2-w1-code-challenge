import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 const [transactions, setTransactions] = useState([]);

 useEffect(() => {
   fetch('https://my-json-server.typicode.com/gabrielleoa/bank-of-flatiron-code-challenge/transactions')
   .then ((response) => response.json())
   .then((data) => setTransactions(data))
     
        
 })


  
}

export default App;
