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
//     this.createTransaction(amount, Transaction.DEPOSIT);
//     this.balance += amount;
//     // this.transactions.push(this.createTransaction);
//   },
// };

// console.log(account.deposit(1000));
