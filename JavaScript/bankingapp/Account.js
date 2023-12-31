const Transaction = require("./Transaction")

class Account {

    static id = 0
    constructor(bankName, balance) {
        this.id = Account.id++,
            this.bankName = bankName,
            this.balance = balance
        this.passbook = []
    }

    static newAccount(bankName, balance) {
        try {
            if (typeof bankName != 'string')
                throw new Error("Invalid bank name")
            if (typeof balance != "number")
                throw new Error("Invalid balance")

            return new Account(bankName, balance)

        } catch (error) {
            console.log(error.message)
        }
    }

    getAccountID() {
        return this.id
    }

    deposit(amount) {
        try {

            let oldBalance = this.balance
            this.balance += amount

            let newTransaction = new Transaction(new Date(), oldBalance, this.balance, "Deposit", amount)
            if(!newTransaction)
                throw new Error("Transaction not possible")
            
            this.passbook.push(newTransaction)
            return true
        } catch (error) {
            console.log(error.message)
            return false
        }

    }
    withdraw(amount) {
        try {
            if (amount > this.balance) {
                throw new Error("Amount is more than current balance")
            }
            let oldBalance = this.balance
            this.balance -= amount
            let newTransaction = new Transaction(new Date(), oldBalance, this.balance, "Credit", amount)

            this.passbook.push(newTransaction)
            return true
        } catch (error) {
            console.log(error.message)
            return false
        }
    }

    getPassbook() {
        return this.passbook
    }


}

module.exports = Account