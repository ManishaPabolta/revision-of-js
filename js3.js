let expenses = [];
function addExpense(amount, category) {
    let expense = {
        amount: amount,
        category: category
    };
    expenses.push(expense);
    console.log("Expense Added Successfully!");
}
function totalExpense() {
    let total = 0;
    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }
    console.log("Total Expense =", total);
}
function categoryWiseExpense() {
    let categories = {};

    for (let i = 0; i < expenses.length; i++) {
        let category = expenses[i].category;

        if (categories[category]) {
            categories[category] += expenses[i].amount;
        } else {
            categories[category] = expenses[i].amount;
        }
    }
    console.log("Category Wise Expense:");
    console.log(categories);
}
addExpense(500, "Food");
addExpense(1000, "Shopping");
addExpense(300, "Food");
addExpense(700, "Travel");
addExpense(200, "Shopping");
totalExpense();
categoryWiseExpense();

console.log(expenses);