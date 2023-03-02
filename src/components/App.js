import React from "react";
import AccountContainer from "./AccountContainer";
import { useState, useEffect } from "react";

const transactionsAPI = "http://localhost:8001/transactions"


function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(transactionsAPI)
      .then((resp) => resp.json())
      .then((table) => {
        setTransactions(table);
      })

  }, [])


  function handleSubmit(newTransaction) {
    const addNewTransaction = () => {
      fetch(transactionsAPI, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newTransaction),
      }).then(resp => resp.json())
        .then((transaction) => {
          setTransactions([...transactions, newTransaction]);
        })
    }

    addNewTransaction();
  }


  function handleSearch(event) {
    setSearchTerm(event.target.value);
  }

  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer transactions={transactions.filter((transaction) => (transaction.description.toLowerCase().includes(searchTerm.toLowerCase())))} handleSubmit={handleSubmit} handleSearch={handleSearch}/>
    </div>
  );
}

export default App;
