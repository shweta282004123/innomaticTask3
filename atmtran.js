// 1. ATM Withdrawal System


function atmWithdrawal(balance, amount, pin, enteredPin) {
  if (enteredPin !== pin) {
    return "Incorrect PIN";
  }
  if (amount > balance) {
    return "Insufficient Funds";
  }
  if (amount % 100 !== 0) {
    return "Enter amount in multiples of 100";
  }
  return "Transaction successful";
}
console.log(atmWithdrawal(5000,3000,411314,411314));
 