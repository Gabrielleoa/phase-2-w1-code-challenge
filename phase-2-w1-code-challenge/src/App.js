import React, { useEffect, useState } from "react";
import Transactions from "./Transaction";
import TransactionForm from "./TranscationForm";
import Header from './Header';
function App (){
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        fetch('https://my-json-server.typicode.com/gabrielleoa/bank-of-flatiron-code-challenge/transactions')
        .then((response) => response.json())
        .then((data) => setTransactions(data));
    }, []);

    const handleAddTransaction = (newTransaction) => {
        setTransactions([...transactions, newTransaction]);
    };
    
    return (
        <div>
          <Header/>
          <TransactionForm onAddTransaction={handleAddTransaction}/>
            <Transactions transactions={transactions}/>
            

        </div>
    )
    }
export default App;
