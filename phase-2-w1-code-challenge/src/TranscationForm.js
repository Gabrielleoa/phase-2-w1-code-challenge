import React, { useState } from 'react';
function TransactionForm({ onAddTransaction }) {
    const [ description, setDescription] = useState('');
    const [ category, setCategory] = useState('');
    const [ amount, setAmount] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (description && category && amount) {
            const newTransaction = {
                id: new Date().getTime(),
                description,
                category,
                amount: (amount),
            };
            onAddTransaction(newTransaction);
        
        onAddTransaction(newTransaction);
        setDescription('');
        setCategory('');
        setAmount('');
        };
    }

return (
    <div>
        <h2>New Transaction</h2>
        <form onSubmit={handleSubmit}>
            <label>
                Description:
                <input
                type='text'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <label>
                Category:
                <input
                type='text'
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                />
            </label>
            <label>
                Amount:
                <input type='number' value={amount} onChange={(e) => setAmount(e.target.value)}></input>
                <button type='submit'>Add transaction</button>
            </label>
        </form>
    </div>
)
};
export default TransactionForm;