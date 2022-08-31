import React, { useState, useEffect } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [addingState, setAddingState] = useState(false);

  //----------------------------------------------------------------------------------------------
  // This fetchExpense() function sends a get request for the expense data in the expenseTracker
  // database.
  //----------------------------------------------------------------------------------------------
  const fetchExpense = async () => {
    const response = await fetch("/expense");
    const data = await response.json();
    setExpenses(data);
  };

  //----------------------------------------------------------------------------------------------
  // This addExpenseHandler() function sends a post request with the new expense form data to the
  // server and updates the addingState to true / false.
  //----------------------------------------------------------------------------------------------
  const addExpenseHandler = async (expense) => {
    setAddingState(!addingState);
    const response = await fetch("/add-expense", {
      method: "POST",
      body: JSON.stringify(expense),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    console.log(data);
  };

  //----------------------------------------------------------------------------------------------
  // This useEffect() calls the fetchExpense() function and re-run every time a new expense form 
  // is entered by the user
  //----------------------------------------------------------------------------------------------
  useEffect(() => {
    fetchExpense();
  }, [addingState]);

  return (
    <div>
      <NewExpenses onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
