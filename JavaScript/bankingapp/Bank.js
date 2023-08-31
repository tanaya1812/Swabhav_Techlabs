const Account = require("./Account")
const Customer = require("./Customer")

class Bank {

    static id = 0
    static banks = []

    constructor(fullName, abbreviation) {
        this.id = Bank.id++,
        this.fullName = fullName,
        this.abbreviation = abbreviation.match(/\b\w/g).join('')
        this.accounts = []
    }

    static newBank(fullName, abbreviation) {
        try {
            if (typeof fullName != "string") {
                throw new Error("Invalid full name")
            }

            if (typeof abbreviation != "string") {
                throw new Error("Invalid abbreviation")
            }

            let newBank = new Bank(fullName, abbreviation)
            this.banks.push(newBank)

            return newBank

        } catch (error) {
            console.log(error.message)
        }
    }

    static findBank(bankID) {
        try {
            for (let index = 0; index < this.banks.length; index++) {
                if (bankID == this.banks[index].id)
                    return [this.banks[index], index]
            }

            throw new Error("Bank not found")
        } catch (error) {
            console.log(error.message)
        }

    }

    // getAllBanks(){
    //     return this.banks
    // }

    updateBank(parameter, newValue) {
        switch (parameter) {
            case 'fullName':
                this.#updateFullName(newValue)
                break;
            case 'abbreviation':
                this.#updateAbbreviation(newValue)
            default:
                throw new Error("Invalid parameter")
        }
    }

    #updateFullName(newValue) {
        try {
            if (typeof newValue != 'string')
                throw new Error("Invalid Full Name value")
        } catch (error) {
            console.log(error.message)
        }
        this.fullName = newValue

        this.abbreviation = newValue.match(/\b\w/g).join('')
    }

    #updateAbbreviation(newValue) {
        try {
            if (typeof newValue != 'string')
                throw new Error("Invalid Full Name value")
        } catch (error) {
            console.log(error.message)
        }
        this.abbreviation = newValue.match(/\b\w/g).join('')
    }


    getAllAccountsByID() {
        return this.accounts
    }

    static findAccountInBank(accountID) {
        try {
            for (let index = 0; index < Bank.banks.length; index++) {
                for (let i = 0; i < Bank.banks[index].accounts.length; i++) {
                    if (accountID == Bank.banks[index].accounts[i].getAccountID()) {
                        return [index, i]
                    }
                }
            }
            throw new Error("Account ID not found")
        } catch (error) {
            console.log(error.message)
        }
    }

    static deleteAccountFromBank(accountID) {
        try {
            if (typeof accountID != 'number') {
                throw new Error("Invalid Account ID")
            }

            let [bankIndex, accountIndex] = Bank.findAccountInBank(accountID)

            if (bankIndex == null)
                throw new Error("Bank not found")

            return Bank.banks[bankIndex].accounts.splice(accountIndex, 1)


        } catch (error) {
            console.log(error.message)
        }
    }




}

module.exports = Bank