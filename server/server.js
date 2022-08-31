const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Expense = require("./models/expense");

mongoose
  .connect("mongodb://localhost:27017/expenseTracker", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connectted");
  })
  .catch((err) => {
    console.log("MongoDB connection error.");
    console.log(err);
  });

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//----------------------------------------------------------------------------------------------
// This get request path loads the expense data from the expenses collection.
//----------------------------------------------------------------------------------------------
app.get("/expense", async (req, res) => {
  try {
    const expenseData = await Expense.find({});
    res.json(expenseData);
  } catch (error) {
    console.log(error);
  }
});

//----------------------------------------------------------------------------------------------
// This post request is called to receive the new expense item data and insert into the expenses
// collection
//----------------------------------------------------------------------------------------------
app.post("/add-expense", async (req, res) => {
  try {
    console.log(req.body.date);
    const newExpense = new Expense(req.body);
    await newExpense.save();
  } catch (error) {
    console.log(error);
  }
});

app.listen(8000, () => {
  console.log("Server listening on port 8000");
});
