import React, { useState } from 'react';
function TransactionForm({ onAddTransaction }) {
    const [ description, setDescription] = useState('');
    const [ category, setCategory] = useState('');
    const [ amount, setAmount] = useState('');
    const [ date, setDate]= useState('')

    const handleSubmit = (event) => {
        event.preventDefault();
        if (description && category && amount) {
            const newTransaction = {
                id: new Date().getTime(),
                description,
                category,
                amount: (amount),
                date,
            };
            onAddTransaction(newTransaction);
        
        onAddTransaction(newTransaction);
        setDescription('');
        setCategory('');
        setAmount('');
        setDate('')
        };
    }
    const formStyle =  {
        maxWidth:'400px',
        margin:'auto',
        padding:'20px',
        border:'1px solid #ddd',
        borderRadius:'8px',
        boxShadow:'0 0 10px rgba(0, 0, 0, 0.1)',
    };

return (
    <div>
        <h2 >New Transaction</h2>
        <form onSubmit={handleSubmit} style={formStyle}>
            <label>
                Description:
                <input
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <br></br>
            <label>
                Category:
                <input
                type='text'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                />
            </label>
            <br></br>
            <label>
                Amount:
                <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}></input>
            </label>
            <br></br>
            <label>
                Date:
                <input
                type='date'
                value={date}
                onChange={(e) => setDate(e.target.value)}/> <br></br>
                <button type='submit'>Add Transaction</button>
                
            </label>
        </form>
    </div>
)
};
export default TransactionForm;