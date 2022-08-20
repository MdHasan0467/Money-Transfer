



function similarItemsExpenses(elementId) {
  const similarField = document.getElementById(elementId);
  const similarFieldString = similarField.value;
  const similarFieldValue = parseInt(similarFieldString);
  
  return similarFieldValue;
}

function similarItemsExpensesTwo(elementId) {
  const similarField = document.getElementById(elementId);
  const similarFieldString = similarField.innerText;
  const similarFieldValue = parseInt(similarFieldString);
  
  return similarFieldValue;
}




document.getElementById('calculate-btn').addEventListener('click', function () {
    const incomeFieldValue = similarItemsExpenses('income-field');
    const foodField = similarItemsExpenses('food-field');
    const rantField = similarItemsExpenses('rent-field');
    const clothField = similarItemsExpenses('cloth-field');
  

   if (isNaN(incomeFieldValue) || isNaN(foodField) || isNaN(rantField) || isNaN(clothField)) {
    alert('Error: Warning! your input is not a number')
    return;
   }
  
    //Calculate Expanse Amount
  const newTotalExpense = foodField + rantField + clothField;

  const totalExpenseAmount = similarItemsExpensesTwo('total-expense');
  
    // Calculate Total Expense
  const totalExpenseValue = totalExpenseAmount + newTotalExpense;
  //Set the value
  document.getElementById('total-expense').innerHTML = totalExpenseValue;




  const balanceFieldValue = similarItemsExpensesTwo('total-balance');
    // calculate balance
  const newBalance = incomeFieldValue - totalExpenseValue;
  //Set the new value
  document.getElementById('total-balance').innerHTML = newBalance;

   


  incomeFieldValue.value= '';
  foodField.value= '';
  rantField.value= '';
  clothField.value= '';
})


document.getElementById('save-btn').addEventListener('click', function () {
   const incomeFieldValue = similarItemsExpenses('income-field');
   const savingsInputField = similarItemsExpenses('saving-input');
  
    const foodField = similarItemsExpenses('food-field');
    const rantField = similarItemsExpenses('rent-field');
    const clothField = similarItemsExpenses('cloth-field');
  
    //Calculate Expanse Amount
  const newTotalExpense = foodField + rantField + clothField;
  
  const totalExpenseAmount = similarItemsExpensesTwo('total-expense');
      // Calculate Total Expense
  const totalExpenseValue = totalExpenseAmount + newTotalExpense;

    //Set the total value to the total expense button
  document.getElementById('total-expense').innerHTML = totalExpenseValue;

  const balanceFieldValue = similarItemsExpensesTwo('total-balance');
      // calculate balance
  const newBalance = incomeFieldValue - totalExpenseValue;
  //Set the new value to the total balance
  document.getElementById('total-balance').innerHTML = newBalance;

// Total savings modulus
  const totalSavings = parseFloat(balanceFieldValue / savingsInputField);
  document.getElementById('savings-amount').innerHTML = totalSavings;

    const X = balanceFieldValue - totalSavings;
  document.getElementById('remaining-amount').innerHTML = X;

})