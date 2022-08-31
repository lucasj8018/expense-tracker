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

const seedExpense = [
  {
    title: "RCM Level 8 Theory Books",
    category: "Work Material",
    amount: 23.99,
    date: new Date("2021-06-12"),
  },
  {
    title: "RCM Level 9 Harmony Books",
    category: "Work Material",
    amount: 25.99,
    date: new Date("2021-07-05"),
  },
  {
    title: "Piano Tuning",
    category: "Instrument",
    amount: 145,
    date: new Date("2022-05-15"),
  },
  {
    title: "Les Miserables Tickets",
    category: "Prof Dev",
    amount: 550.7,
    date: new Date("2022-07-18"),
  },
  {
    title: "RCM Level 10 Theory Books",
    category: "Work Material",
    amount: 23.99,
    date: new Date("2022-08-20"),
  }
];

Expense.insertMany(seedExpense)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
