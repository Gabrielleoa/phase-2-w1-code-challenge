import React, { useEffect, useState } from "react";
import Transactions from "phase-2-w1-code-challenge/src/Transaction.js;
import TransactionForm from "./TransactionForm";
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
            <h1>ROYAL BANK TRANSACTION APP</h1>
            <Transactions transactions={transactions}/>
            <TransactionForm onAddTransaction={handleAddTransaction}/>

        </div>
    )
    }
export default App;
