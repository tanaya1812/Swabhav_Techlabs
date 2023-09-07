const Bank = require("./Bank")
const Account = require("./Account")

class Customer {
    static id = 0
    static allCustomers = []
    static accounts = []

    constructor(firstName, lastName, totalBalance, isAdmin) {
        this.id = Customer.id++,
        this.firstName = firstName,
        this.lastName = lastName,
        this.totalBalance = totalBalance,
        this.isAdmin = isAdmin
        this.accounts = []
    }

    static newAdmin(firstName, lastName, totalBalance) {
        try {
            if (typeof firstName != 'string') {
                throw new Error("Invalid First Name")
            }
            if (typeof lastName != 'string') {
                throw new Error("Invalid Last Name")
            }
            if (totalBalance < 0 || typeof totalBalance != 'number') {
                throw new Error("Invalid Balance")
            }

            return new Customer(firstName, lastName, totalBalance, true)
        } catch (error) {
            console.log(error.message)
        }
    }

    newCustomer(firstName, lastName, totalBalance) {
        try {
            if (!this.isAdmin) {
                throw new Error("Only admin can create user")
            }
            if (typeof firstName != 'string') {
                throw new Error("Invalid Name")
            }
            if (typeof lastName != 'string') {
                throw new Error("Invalid Last Name")
            }
            if (totalBalance < 0 || typeof totalBalance != 'number') {
                throw new Error("Invalid Balance")
            }
            let newCustomer = new Customer(firstName, lastName, totalBalance, false)
            Customer.allCustomers.push(newCustomer)
            return newCustomer

        } catch (error) {
            console.log(error.message)
        }
    }

    getAllCustomers() {
        try {
            if (!this.isAdmin) {
                throw new Error("Only admin can read user")
            }

            return Customer.allCustomers

        } catch (error) {
            console.log(error.message)
        }
    }

    static #findCustomer(customerID) {
        try {
            if (customerID < 0 || typeof customerID != "number")
                throw new Error("Invalid user ID")

            for (let index = 0; index < Customer.allCustomers.length; index++) {
                if (customerID == Customer.allCustomers[index].id) {
                    return [Customer.allCustomers[index], index]
                }
            }
            throw new Error("Customer Id not found")
        } catch (error) {
            console.log(error.message)
        }
    }

    #updateFirstName(newValue) {
        try {
            if (typeof newValue != 'string')
                throw new Error("Invalid First Name value")
        } catch (error) {
            console.log(error.message)
        }
        this.firstName = newValue
    }

    #updateLastName(newValue) {
        try {
            if (typeof newValue != 'string')
                throw new Error("Invalid Last Name value")
        } catch (error) {
            console.log(error.message)
        }
        this.lastName = newValue
    }

    #updateTotalBalance(newValue) {
        try {
            if (typeof newValue != 'string')
                throw new Error("Invalid Total Balance value")
        } catch (error) {
            console.log(error.message)
        }
        this.lastName = newValue
    }

    updateCustomer(customerID, parameter, newValue) {
        try {
            if (!this.isAdmin) {
                throw new Error("Only admin can update user")
            }

            if (customerID < 0 || typeof customerID != "number")
                throw new Error("Invalid customer ID")

            if (typeof parameter != 'string') {
                throw new Error("Invalid parameter")
            }

            let [customerToBeUpdated, indexToBeUpdated] = Customer.#findCustomer(customerID)

            if (customerToBeUpdated == null)
                throw new Error("User not found")

            switch (parameter) {
                case 'firstName':
                    customerToBeUpdated.#updateFirstName(newValue)
                    break;
                case 'lastName':
                    customerToBeUpdated.#updateLastName(newValue)
                    break;
                case 'totalBalance':
                    customerToBeUpdated.#updateTotalBalance(newValue)
                    break;
                default:
                    throw new Error("Invalid parameter")
            }
            return 'User Updated'

        } catch (error) {
            console.log(error.message)
        }
    }

    deleteCustomer(customerID) {
        try {
            if (!this.isAdmin) {
                throw new Error("Only admin can delete user")
            }

            if (customerID < 0 || typeof customerID != "number")
                throw new Error("Invalid customer ID")

            let [customerToBeDeleted, indexToBeDeleted] = Customer.#findCustomer(customerID)

            if (customerToBeDeleted == null)
                throw new Error("User not found")

            Customer.allCustomers.splice(indexToBeDeleted, 1)
            return 'User Deleted'

        } catch (error) {
            console.log(error.message)
        }
    }


    //CRUD ON BANK BY ADMIN

    createBank(fullName, abbreviation) {
        try {
            if (!this.isAdmin) {
                throw new Error("Only admin can create bank")
            }

            Bank.newBank(fullName, abbreviation)
            
            return 'Bank Created'

        } catch (error) {
            console.log(error.message)
        }
    }

    getAllBanks() {
        try {
            if (!this.isAdmin) {
                throw new Error("Only admin can read bank")
            }

            return Bank.banks

        } catch (error) {
            console.log(error.message)
        }
    }

    updateBank(bankID, parameter, newValue) {
        try {
            if (!this.isAdmin) {
                throw new Error("Only admin can read bank")
            }

            if (bankID < 0 || typeof bankID != "number")
                throw new Error("Invalid Bank ID")

            if (typeof parameter != 'string') {
                throw new Error("Invalid parameter")
            }

            let [foundBank, indexofBank] = Bank.findBank(bankID)
            if (foundBank == null)
                throw new Error("Bank not found")

            foundBank.updateBank(parameter, newValue)

            return 'Bank Updated'

        } catch (error) {
            console.log(error.message)
        }
    }

    deleteBank(bankID) {
        try {
            if (!this.isAdmin) {
                throw new Error("Only admin can delete bank")
            }

            if (bankID < 0 || typeof bankID != "number")
                throw new Error("Invalid Bank ID")

            let [bankToBeDeleted, indexToBeDeleted] = Bank.findBank(bankID)

            if (bankToBeDeleted == null)
                throw new Error("Bank not found")

            Bank.banks.splice(indexToBeDeleted, 1)

            return 'Bank Deleted'

        } catch (error) {
            console.log(error.message)
        }
    }


    createAccount(bankID, bankName, balance) {
        try {
            if (this.isAdmin) {
                throw new Error("Admin cannot create account")
            }
            
            if (bankID < 0 || typeof bankID != 'number') {
                throw new Error("Invalid Customer ID")
            }
           

            let [foundBank, indexOfBank] = Bank.findBank(bankID)
            if (foundBank == null)
                throw new Error("Bank not found")

            let newAccount = Account.newAccount(bankName, balance)
            this.accounts.push(newAccount)
            foundBank.accounts.push(newAccount);

            return 'Account Created'

        } catch (error) {
            console.log(error.message)
        }
    }
    getAllAccounts() {
        try {
            if (this.isAdmin) {
                throw new Error("Admin cannot read accounts")
            }
            return this.accounts
        } catch (error) {
            console.log(error.message)
        }
    }

    getAllAccountsByID(bankID) {
        try {
            if (this.isAdmin) {
                throw new Error("Admin cannot read accounts")
            }

            if (typeof bankID != 'number') {
                throw new Error("Invalid Bank ID")
            }

            let [foundBank, indexOfBank] = Bank.findBank(bankID)
            if (foundBank == null)
                throw new Error("Bank not found")

            let customerAccounts = foundBank.getAllAccountsByID()
            return customerAccounts

        } catch (error) {
            console.log(error.message)
        }
    }

    findAccountID(accountID){
        try {
            for (let index = 0; index < this.accounts.length; index++) {
                if(accountID == this.accounts[index].id){
                    return [this.accounts[index],index]
                } 
            }
            throw new Error("Account ID not found")
        } catch (error) {
            console.log(error.message)
        }
    }

    deleteAccount(accountID) {
        try {
            if (typeof accountID != 'number') {
                throw new Error("Invalid Account ID")
            }
            if (this.isAdmin) {
                throw new Error("Admin cannot delete account")
            }

            let [foundAccount, indexOfAccount] = this.findAccountID(accountID)
            if (foundAccount == null)
                throw new Error("Account not found")

            this.accounts.splice(indexOfAccount, 1)

            Bank.deleteAccountFromBank(accountID)

            return 'Account Deleted'
        } catch (error) {
            console.log(error.message)
        }
    }

    deposit(amount, accountID){
        try {
            if(this.isAdmin){
                throw new Error("Admin cannot deposit amount")
            }
            if(amount<0 || typeof amount != 'number'){
                throw new Error("Invalid Amount")
            }

            if(typeof accountID != 'number'){
                throw new Error("invalid Account ID")
            }
            let [foundAccount,indexOfAccount] = this.findAccountID(accountID)
            if (foundAccount == null)
                throw new Error("Account not found")

            this.accounts[indexOfAccount].deposit(amount)
            
            return 'Amount Deposited'
        } catch (error) {
            console.log(error.message)
        }
    }

    withdraw(amount, accountID){
        try {
            if(this.isAdmin){
                throw new Error("Admin cannot withdraw amount")
            }
            if(amount<0 || typeof amount != 'number'){
                throw new Error("Invalid Amount")
            }

            if(typeof accountID != 'number'){
                throw new Error("invalid Account ID")
            }
            let [foundAccount,indexOfAccount] = this.findAccountID(accountID)
            if (foundAccount == null)
                throw new Error("Account not found")

            this.accounts[indexOfAccount].withdraw(amount)
           
            return 'Amount Withdrawed'
        } catch (error) {
            console.log(error.message)
        }
    }

    transferMoney(amount, senderAccountId, customerID, receiverAccountId){
        try {
            if(this.isAdmin){
                throw new Error("Admin cannot transfer amount")
            }
            if(amount < 0 || typeof amount != 'number'){
                throw new Error("Invalid Amount")
            }
            if(typeof senderAccountId != 'number'){
                throw new Error("Invalid Account ID ")
            }
            if(customerID < 0 || typeof customerID != 'number'){
                throw new Error("Invalid Receiver Customer ID ")
            }
            if(typeof receiverAccountId != 'number'){
                throw new Error("Invalid Receiver Account ID")
            }
            let [foundReceiverCustomer,indexOfReceiverCustomer] = Customer.#findCustomer(customerID)
            if(foundReceiverCustomer == null ){
                throw new Error("Receiver Customer not found")
            }
            let withdraw = this.withdraw(amount, senderAccountId)
            let deposit = Customer.allCustomers[indexOfReceiverCustomer].deposit(amount, receiverAccountId)

            if(!deposit || !withdraw){
                throw new Error("Transfer failed")               
            }
            return 'Amount transferred'
        } catch (error) {
            console.log(error.message)
        }
    }

    getPassbook(accountID){
        try {
            if(this.isAdmin){
                throw new Error("Admin cannot read passbook")
            }
            if(typeof accountID != 'number'){
                throw new Error("Invalid Account ID")
            }
            let [foundAccount,indexOfAccount] = this.findAccountID(accountID)
            if (foundAccount == null)
                throw new Error("Account not found")
            
            return foundAccount.getPassbook()
            
        } catch (error) {
            console.log(error.message)
        }
    }

}

module.exports = Customer