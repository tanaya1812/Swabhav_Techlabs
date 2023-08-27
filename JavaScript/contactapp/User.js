let Contact = require("./Contact.js")

class User {
    static id = 0
    static allUsers = []

    constructor(name, age, gender, isAdmin) {
        this.name = name
        this.age = age
        this.gender = gender
        this.contacts = []
        this.id = User.id++
        this.isAdmin = isAdmin
    }

    static newAdmin(name, age, gender) {
        try {

            if (typeof name != 'string') {
                throw new Error("Invalid Name")
            }
            if (typeof age != 'number') {
                throw new Error("Invalid Age")
            }
            if (gender != 'F' && gender != 'M' && gender != 'O') {
                throw new Error("Invalid Gender")
            }

            return new User(name, age, gender, true)

        } catch (error) {
            console.log(error.message)
        }

    }

    newUser(name, age, gender) {
        try {
            if (!this.isAdmin) {
                throw new Error("Not an admin")
            }
            if (typeof name != 'string') {
                throw new Error("Invalid Name")
            }
            if (typeof age != 'number') {
                throw new Error("Invalid Age")
            }
            if (gender != 'F' && gender != 'M' && gender != 'O') {
                throw new Error("Invalid Gender")
            }
            let newUser = new User(name, age, gender, false)
            User.allUsers.push(newUser)
            return newUser

        } catch (error) {
            console.log(error)
        }

    }

    getAllUsers() {
        try {
            if (!this.isAdmin) {
                throw new Error("Not an admin")
            }

            return User.allUsers

        } catch (error) {
            console.log(error.message)
        }
    }

    static #findUser(userId) {
        try {
            if (userId < 0 || typeof userId != "number")
                throw new Error("Invalid user ID")

            for (let index = 0; index < User.allUsers.length; index++) {
                if (userId == User.allUsers[index].id) {
                    return [User.allUsers[index], index]
                }
            }

            // return [null, -1]
            throw new Error("User Id not found")
        } catch (error) {
            console.log(error.message)
        }

    }

    #updateName(newValue) {
        try {
            if (typeof newValue != 'string')
                throw new Error("Invalid Name value")
        } catch (error) {
            console.log(error.message)
        }
        this.name = newValue

    }

    #updateAge(newValue) {
        try {
            if (typeof newValue != 'number')
                throw new Error("Invalid Age value")
        } catch (error) {
            console.log(error.message)
        }
        this.age = newValue

    }

    #updateGender(newValue) {
        try {
            if (newValue != 'F' && newValue != 'M' && newValue != 'O')
                throw new Error("Invalid Gender value")
        } catch (error) {
            console.log(error.message)
        }
        this.gender = newValue

    }

    updateUser(userId, parameter, newValue) {
        try {
            //validation
            if (!this.isAdmin) {
                throw new Error("Not an admin")
            }

            if (userId < 0 || typeof userId != "number")
                throw new Error("Invalid user ID")

            if (typeof parameter != 'string') {
                throw new Error("Invalid parameter")
            }

            let [userToBeUpdated, indexToBeUpdated] = User.#findUser(userId)
            if (userToBeUpdated == null)
                throw new Error("User not found")

            switch (parameter) {
                case 'name':
                    userToBeUpdated.#updateName(newValue)
                    break;
                case 'age':
                    userToBeUpdated.#updateAge(newValue)
                    break;
                case 'gender':
                    userToBeUpdated.#updateGender(newValue)
                    break;
                default:
                    throw new Error("Invalid parameter")
            }
            return 'User Updated'

        } catch (error) {
            console.log(error.message)
        }
    }

    deleteUser(userId) {
        try {
            if (!this.isAdmin) {
                throw new Error("Not an admin")
            }

            if (userId < 0 || typeof userId != "number")
                throw new Error("Invalid user ID")

            let [userToBeDeleted, indexToBeDeleted] = User.#findUser(userId)

            if (userToBeDeleted == null)
                throw new Error("User not found")
            User.allUsers.splice(indexToBeDeleted, 1)
            return 'User Deleted'

        } catch (error) {
            console.log(error.message)
        }
    }

    createContact(name) {
        try {
            if (this.isAdmin) {
                throw new Error("Admin cannot create contact")
            }

            let newContact = Contact.newContact(name)
            this.contacts.push(newContact)

            return 'Contact Created'

        } catch (error) {
            console.log(error.message)
        }

    }
    getAllContacts() {
        try {
            if (this.isAdmin) {
                throw new Error("Admin cannot read contact")
            }

            return this.contacts

        } catch (error) {
            console.log(error.message)
        }
    }
    #findContact(contactID) {
        try {
            if (this.isAdmin) {
                throw new Error("Admin cannot find contact")
            }

            if (contactID < 0 || typeof contactID != "number")
                throw new Error("Invalid Contact ID")

            for (let index = 0; index < this.contacts.length; index++) {
                if (contactID == this.contacts[index].id)
                    return [this.contacts[index], index]
            }
            // return [null, -1]
            throw new Error("Contact ID not found")

        } catch (error) {
            console.log(error.message)
        }

    }

    updateContact(contactID, parameter, newValue) {
        try {
            if (this.isAdmin) {
                throw new Error("Admin cannot update contact")
            }

            if (typeof parameter != 'string') {
                throw new Error("Invalid parameter")
            }

            if (contactID < 0 || typeof contactID != "number")
                throw new Error("Invalid Contact ID")

            let [foundContact, indexOfContact] = this.#findContact(contactID)

            if (foundContact == null)
                throw new Error("Contact not found")

            foundContact.updateContact(parameter, newValue)

            return 'Contact Updated'

        } catch (error) {
            console.log(error.message)
        }
    }

    deleteContact(contactID) {
        try {
            if (this.isAdmin) {
                throw new Error("Admin cannot delete contact")
            }

            if (contactID < 0 || typeof contactID != 'number') {
                throw new Validation("Invalid Contact ID")
            }

            let [contactToBeDeleted, indexToBeDeleted] = this.#findContact(contactID)

            if (contactToBeDeleted == null)
                throw new Error("Contact not found")

            this.contacts.splice(indexToBeDeleted, 1)

            return 'Contact Deleted'

        } catch (error) {
            console.log(error.message)
        }

    }

    createContactInfo(typeOfContact, valueOfContact, contactID) {
        try {
            if (this.isAdmin) {
                throw new Error("Admin cannot create contact info")
            }

            if (contactID < 0 || typeof contactID != 'number') {
                throw new Validation("Invalid Contact ID")
            }

            let [foundContact, indexOfContact] = this.#findContact(contactID)
            let newContactInfo = foundContact.createContactInfo(typeOfContact, valueOfContact)
            return 'Contact Info Created'

        } catch (error) {
            console.log(error.message)
        }
    }

    getAllContactInfo(contactID) {
        try {
            if (this.isAdmin) {
                throw new Error("Admin cannot read contact info")
            }

            if (contactID < 0 || typeof contactID != 'number') {
                throw new Validation("Invalid Contact ID")
            }

            let [foundContact, indexOfContact] = this.#findContact(contactID)
            let foundContactInfo = foundContact.getAllContactInfo()
            return foundContactInfo

        } catch (error) {
            console.log(error.message)
        }

    }

    getContactInfoByID(contactID, contactInfoID) {
        try {
            if (this.isAdmin) {
                throw new Error("Admin cannot read contact info")
            }

            if (typeof contactID != 'number') {
                throw new Validation("Invalid Contact ID")
            }
            if (typeof contactInfoID != 'number') {
                throw new Validation("Invalid Contact Info ID")
            }
            let [foundContact, indexOfContact] = this.#findContact(contactID)
            foundContact.getContactInfoByID(contactInfoID)

            return 'Contacts Info Read by ID'
        } catch (error) {
            return (error.message)
        }
    }

    updateContactInfo(contactID, contactInfoID, parameter, newValue) {
        try {
            if (this.isAdmin) {
                throw new Error("Admin cannot update contact info")
            }

            if (contactID < 0 || typeof contactID != 'number') {
                throw new Validation("Invalid Contact ID")
            }

            if (contactInfoID < 0 || typeof contactInfoID != 'number') {
                throw new Validation("Invalid Contact ID")
            }

            if (typeof parameter != 'string') {
                throw new Error("Invalid parameter")
            }

            let [foundContact, indexOfContact] = this.#findContact(contactID)
            foundContact.updateContactInfo(contactInfoID, parameter, newValue)

            return 'Contact Info Updated'

        } catch (error) {
            console.log(error.message)
        }
    }

    deleteContactInfo(contactID, contactInfoID) {
        try {
            if (this.isAdmin) {
                throw new Error("Admin cannot delete contact info")
            }

            if (typeof contactInfoID != "number") {
                throw new Validation("Invalid Contact ID")
            }
            let [foundContact, indexOfContact] = this.#findContact(contactID)
            foundContact.deleteContactInfo(contactInfoID)

            return 'Contact Info Deleted'

        } catch (error) {
            console.log(error.message)
        }
    }

}

module.exports = User