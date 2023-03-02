import React from "react";
import { useState } from "react";

function AddTransactionForm({handleSubmit}) {
  const [newDate, setDate] = useState("");
  const [newDescription, setDescription] = useState("");
  const [newCategory, setCategory] = useState("");
  const [newAmount, setAmount] = useState("");

  function handleSubmission(event) {
    event.preventDefault();
    handleSubmit(formData);
  }

  const formData = {date: newDate, description: newDescription, category: newCategory, amount: parseFloat(newAmount)};

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmission}>
        <div className="inline fields">
          <input type="date" name="date" value={newDate} onChange={(event) => setDate(event.target.value)}/>
          <input type="text" name="description" placeholder="Description" value={newDescription} onChange={(event) => setDescription(event.target.value)}/>
          <input type="text" name="category" placeholder="Category" value={newCategory} onChange={(event) => setCategory(event.target.value)}/>
          <input type="number" name="amount" placeholder="Amount" step="0.01" value={newAmount} onChange={(event) => setAmount(event.target.value)}/>
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
