// const Transaction = {
//   DEPOSIT: "deposit",
//   WITHDRAW: "withdraw",
// };

// const account = {
//   balance: 0,
//   transactions: [],

//   createTransaction(amount, type) {
//     const newTransaction = {
//       id: `${this.transactions.length + 1}__${type}`,
//       type,
//       amount,
//     };

//     return newTransaction;
//   },

//   deposit(amount) {
//     this.transactions.push(this.createTransaction(amount, Transaction.DEPOSIT));
//     this.balance += amount;
//   },

//   withdraw(amount) {
//     if (amount > this.balance) {
//       console.log(
//         "You don`t have enough money at the account. Please ghenge the sum."
//       );
//     } else {
//       this.transactions.push(
//         this.createTransaction(amount, Transaction.WITHDRAW)
//       );
//       this.balance -= amount;
//     }
//   },

//   getBalance() {
//     return console.log("Balance:", account.balance);
//   },

//   getTransactionDetails(id) {
//     this.transactions.find((transaction) => {
//       if (id === transaction.id) {
//         return console.log(transaction);
//       }
//     });
//   },

//   getTransactionTotal(type) {
//     this.transactions.reduce((total, transaction) => {
//       if (transaction.type === type) {
//         return total + transaction.amount;
//       }
//       console.log(`Total ${type}:`, total);
//     }, 0);
//   },
// };
// account.deposit(2000);
// account.deposit(3000);
// account.deposit(4000);
// account.withdraw(10000);
// account.withdraw(1000);
// console.log(account.transactions);
// account.getBalance();
// account.getTransactionDetails("3__deposit");
// account.getTransactionTotal(Transaction.DEPOSIT);
