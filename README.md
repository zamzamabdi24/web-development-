# SpendWise JavaScript Foundation

SpendWise is a personal finance dashboard that helps users enter a monthly
budget, record expenses, calculate total spending, and determine the remaining
balance.

## Project Files

- `index.html` contains the structure of the SpendWise dashboard.
- `style.css` contains the visual design and layout.
- `script.js` contains the JavaScript logic.
- `README.md` documents the project.

## JavaScript Concepts Implemented

This project demonstrates the following JavaScript concepts:

- Variables using `let` and `const`.
- Data types such as numbers, strings, and arrays.
- User input using `prompt()`.
- Number conversion using `Number.parseFloat()`.
- Calculations using subtraction and addition.
- Array methods using `reduce()`.
- Functions and return values.
- Conditional statements using `if`.
- Event listeners using `addEventListener()`.
- Console output using `console.log()`.

## How Variables Are Used

The application stores important budgeting information in variables:

```javascript
let monthlyBudget = 0;
let expenses = [];
let totalExpenses = 0;
let remainingBalance = 0;
```

- `monthlyBudget` stores the user's monthly budget.
- `expenses` stores the expense amounts in an array.
- `totalExpenses` stores the total of all expenses.
- `remainingBalance` stores the amount left after expenses are subtracted.

The project uses `let` for values that change while the application is running.
It uses `const` for values that should not be reassigned, such as HTML element
references.

## How User Input Is Collected

The application collects information using JavaScript `prompt()` dialogs.

The user enters:

- Monthly budget.
- Expense name.
- Expense amount.

Prompt values are initially stored as text. The application converts the expense
amount into a number using:

```javascript
const amount = Number.parseFloat(userInput);
```

The application also checks that the amount is a valid number and is not
negative.

## How Calculations Are Performed

The total expenses are calculated using the `reduce()` method:

```javascript
totalExpenses = expenses.reduce(function (total, expense) {
    return total + expense;
}, 0);
```

The remaining balance is calculated by subtracting the total expenses from the
monthly budget:

```javascript
remainingBalance = monthlyBudget - totalExpenses;
```

For example:

```text
Monthly budget: KSh 75,000
Total expenses: KSh 2,800
Remaining balance: KSh 72,200
```

## How Functions Organize the Code

Functions divide the application into smaller reusable tasks:

- `getAmount()` collects and validates numeric input.
- `calculateTotalExpenses()` calculates the total expenses.
- `calculateRemainingBalance()` calculates the remaining balance.
- `displayResults()` displays the labeled budget report.
- `startBudgeting()` collects and stores the monthly budget.
- `addExpense()` collects and stores an expense.

Functions make the code easier to read, test, reuse, and maintain.

## How Results Are Displayed

The application displays calculated results in the browser console using
`console.log()`.

Example console output:

```text
========== SpendWise Budget Report ==========
Monthly budget: KSh 75000
Total expenses: KSh 2800
Remaining balance: KSh 72200
Status: You are within your budget.
=============================================
```

To view the results:

1. Open `index.html` in a browser.
2. Click **Start Budgeting**.
3. Enter the monthly budget.
4. Click **Add Expense**.
5. Enter the expense name and amount.
6. Open Developer Tools.
7. Select the **Console** tab.

## Testing

The following test cases should be checked:

- Entering a valid monthly budget.
- Adding one expense.
- Adding multiple expenses.
- Entering decimal amounts.
- Entering invalid text.
- Entering a negative amount.
- Cancelling a prompt.
- Checking the remaining balance.
- Confirming that results appear in the browser console.
- Confirming that the JavaScript file loads successfully.

## Submission

The public GitHub repository must contain:

- `index.html`
- `style.css`
- `script.js`
- `README.md`

After testing the project, push all files to a public GitHub
