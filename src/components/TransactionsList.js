import React from "react";
import Transaction from "./Transaction";

function TransactionsList({transactions}) {
  const transactionElements = transactions.map((transaction, index) => {
    return <Transaction key={index} date={transaction.date} description={transaction.description} category={transaction.category} amount={transaction.amount}/>
  })

  return (
    <table className="ui celled striped padded table">
      <tbody>
        <tr>
          <th>
            <h3 className="ui center aligned header">Date</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Description</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Category</h3>
          </th>
          <th>
            <h3 className="ui center aligned header">Amount</h3>
          </th>
        </tr>
        {transactionElements}
      </tbody>
    </table>
  );
}

export default TransactionsList;
