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
            <h1 style={{paddingLeft:50}} >ROYAL BANK TRANSACTION APP</h1>
            <Transactions transactions={transactions}/>
            <TransactionForm onAddTransaction={handleAddTransaction}/>
            <Header/>

        </div>
    )
    }
export default App;
