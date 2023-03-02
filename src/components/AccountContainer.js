import React from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

function AccountContainer({transactions, handleSubmit, handleSearch}) {
  return (
    <div>
      <Search handleSearch={handleSearch} />
      <AddTransactionForm handleSubmit={handleSubmit} />
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
