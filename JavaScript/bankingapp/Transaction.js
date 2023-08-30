const Customer = require("./Customer")

class Transaction{
    
    constructor(date, oldBalance, newBalance, remark, transactionAmount){
        this.date = date,
        this.oldBalance = oldBalance,
        this.newBalance = newBalance,
        this.remark = remark,
        this.transactionAmount = transactionAmount
    }
}

module.exports = Transaction