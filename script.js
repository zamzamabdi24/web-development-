"use strict";

// =====================================
// 1. Store application data
// =====================================

let monthlyBudget = 0;
let expenses = [];
let totalExpenses = 0;
let remainingBalance = 0;

// =====================================
// 2. Select elements from index.html
// =====================================

const startBudgetButton = document.querySelector("#startBudget");
const addExpenseButton = document.querySelector("#addExpenseBtn");

// =====================================
// 3. Reusable functions
// =====================================

// Collect user input and convert it to a number
function getAmount(message) {
    const userInput = prompt(message);

    if (userInput === null) {
        return null;
    }

    const amount = Number.parseFloat(userInput);

    if (Number.isNaN(amount) || amount < 0) {
        alert("Please enter a valid amount.");
        return getAmount(message);
    }

    return amount;
}

// Calculate the total expenses
function calculateTotalExpenses() {
    totalExpenses = expenses.reduce(function (total, expense) {
        return total + expense;
    }, 0);

    return totalExpenses;
}

// Calculate the remaining balance
function calculateRemainingBalance() {
    remainingBalance = monthlyBudget - totalExpenses;

    return remainingBalance;
}

// Display labeled results in the browser console
function displayResults() {
    console.log("========== SpendWise Budget Report ==========");
    console.log("Monthly budget: KSh " + monthlyBudget);
    console.log("Total expenses: KSh " + totalExpenses);
    console.log("Remaining balance: KSh " + remainingBalance);

    if (remainingBalance >= 0) {
        console.log("Status: You are within your budget.");
    } else {
        console.log("Status: You have exceeded your budget.");
    }

    console.log("=============================================");
}

// =====================================
// 4. Collect budget information
// =====================================

function startBudgeting() {
    const budget = getAmount("Enter your monthly budget:");

    if (budget === null) {
        console.log("Budget input cancelled.");
        return;
    }

    monthlyBudget = budget;

    calculateTotalExpenses();
    calculateRemainingBalance();
    displayResults();

    alert("Budget saved successfully. Check the browser console.");
}

// =====================================
// 5. Collect expense information
// =====================================

function addExpense() {
    const expenseName = prompt("Enter the expense name:");

    if (expenseName === null || expenseName.trim() === "") {
        alert("Please enter an expense name.");
        return;
    }

    const expenseAmount = getAmount("Enter the expense amount:");

    if (expenseAmount === null) {
        console.log("Expense input cancelled.");
        return;
    }

    expenses.push(expenseAmount);

    calculateTotalExpenses();
    calculateRemainingBalance();
    displayResults();

    console.log("Expense name: " + expenseName);
    console.log("Expense amount: KSh " + expenseAmount);

    alert("Expense added successfully. Check the browser console.");
}

// =====================================
// 6. Connect buttons to functions
// =====================================

startBudgetButton.addEventListener("click", startBudgeting);
addExpenseButton.addEventListener("click", addExpense);

// Confirm that JavaScript loaded successfully
console.log("SpendWise JavaScript loaded successfully.");