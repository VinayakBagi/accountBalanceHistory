const accountBalanceHistory = [
  {
    monthNumber: 0, // current month
    account: {
      balance: { amount: 0 },
    },
  },
  {
    monthNumber: 1, // last month
    account: {
      balance: { amount: 100 },
    },
  },
  {
    monthNumber: 2, // two months ago
    account: {
      balance: { amount: 200 },
    },
  },
];

const accountTypeChecker = (accountBalanceHistory) => {
  /***
      Your goal is to write a function that determines from someone's ${accountBalanceHistory} 🧾 (see the array above for an example)
      whether this array is of type A (variable) or type B (fixed).
    
      Type 🅰 denotes a balance history where the balance amount decreases by varying amounts each month.
    
      Type 🅱 is one where the balance amount changes by the same amount each month.
      ***/

  // Write your logic here  - No pressure 😁 //

  var amountDifference = new Set();
  for (var i = 1; i < accountBalanceHistory.length; i++) {
    let presentBalAmount = accountBalanceHistory[i]?.account?.balance?.amount;
    let previousBalAmount =
      accountBalanceHistory[i - 1]?.account?.balance?.amount;
    if (presentBalAmount == undefined || previousBalAmount == undefined) {
      //if amount doesn't exist
      return "Error: Input data is invalid";
    }
    if (previousBalAmount < 0) {
      //if balance amount is negative.
      return `Error: Balance amount (${previousBalAmount}) is negative`;
    }
    let diff = presentBalAmount - previousBalAmount;
    if (diff < 0) {
      //if balance amount is increasing compared to previous month.
      return `Error: Balance amount increased from ${presentBalAmount} to ${previousBalAmount}`;
    }
    amountDifference.add(diff);
  }
  console.log(amountDifference);
  return amountDifference.size != 1 ? "A" : "B";
};

console.log(accountTypeChecker(accountBalanceHistory));
