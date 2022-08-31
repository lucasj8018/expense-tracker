const mongoose = require("mongoose");

//----------------------------------------------------------------------------------------------
// Data schema for the expenseTracker database
//----------------------------------------------------------------------------------------------
const expenseSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: [
      "Work Material",
      "Office Supply",
      "Office Improve",
      "Prof Dev",
      "Travel",
      "Meal",
      "Instrument",
      "Software Sub",
    ],
  },
  amount: {
    type: Number,
    required: true,
    min: 0,
  },
  date: {
    type: String,
    required: true,
  },
});

const Expense = mongoose.model("Expense", expenseSchema);

module.exports = Expense;
