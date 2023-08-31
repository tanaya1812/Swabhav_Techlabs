const Customer = require("./Customer")

let a1 = Customer.newAdmin("ABC", "XYZ", 500)
console.log(a1)

// console.log(a1.newCustomer("Tanaya", "Raikwar", 500))
// console.log(a1.getAllCustomers())

// console.log(a1.updateCustomer(1,'firstName',"XYZ"))
// console.log(a1.getAllCustomers())

// console.log(a1.deleteCustomer(1))
// console.log(a1.getAllCustomers())

//bank

console.log(a1.createBank("State Bank", "State Bank"))
console.log(a1.createBank("Canara Bank", "Canara Bank"))
console.log(a1.getAllBanks())

// console.log(a1.updateBank(0,'fullName',"Canara Bank"))
// console.log(a1.getAllBanks())

// console.log(a1.deleteBank(0))
// console.log(a1.getAllBanks())


//account

let user1 = a1.newCustomer("Tanaya", "Raikwar", 500)
console.log(a1.getAllCustomers())

console.log(user1.createAccount(0,"State Bank", 1000))
console.log(user1.createAccount(1,"Canara Bank", 2000))
console.log(user1.createAccount(1,"Canara Bank", 4000))
console.log(a1.getAllCustomers())
console.log(a1.getAllBanks())
console.log(user1.getAllAccountsByID(1))
console.log(user1.getAllAccounts())

console.log(user1.deleteAccount(0))
console.log(user1.getAllAccountsByID(1))

//transaction

console.log(user1.deposit(20,1))
console.log(user1.withdraw(200,2))

console.log(user1.getAllAccountsByID(1))

// console.log(user1.transferMoney(20, 1, 1, 2))
console.log(user1.transferMoney(20, 3, 1 , 2))
console.log(user1.getAllAccountsByID(1))

console.log(user1.getPassbook(1));