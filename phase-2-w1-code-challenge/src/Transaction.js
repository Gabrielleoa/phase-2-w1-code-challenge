import React, { useState } from 'react';

function Transactions({transactions}) {
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Description</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Date</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction) => (
                        <tr key = {transaction.id}>
                            <td>{transaction.description}</td>
                            <td>{transaction.category}</td>


                            <td>{transaction.amount}</td>
                            <td>{transaction.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Transactions;