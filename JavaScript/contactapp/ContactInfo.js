class ContactInfo {
    static id = 0
    constructor(typeOfContact, valueOfContact) {
        this.typeOfContact = typeOfContact,
            this.valueOfContact = valueOfContact,
            this.id = ContactInfo.id++
    }

    static newContactInfo(typeOfContact, valueOfContact) {
        try {
            if (typeof typeOfContact != "string")
                throw new Error("Invalid type of contact")
            if (typeof valueOfContact != "string")
                throw new Error("Invalid value of contact")

            return new ContactInfo(typeOfContact, valueOfContact)

        } catch (error) {
            console.log(error.message)
        }

    }

    updateContactInfo(parameter, newValue) {
        try {
            switch (parameter) {
                case 'typeOfContact':
                    this.#updateTypeOfContact(newValue)
                    break;
                case 'valueOfContact':
                    this.#updateValueOfContact(newValue)
                    break;
                default:
                    throw new Error("Invalid parameter")
            }
        } catch (error) {
            console.log(error.message)
        }
    }

    #updateTypeOfContact(newValue){
        try {
            if(typeof newValue!= 'string')
                throw new Error("Invalid type of contact")

            this.typeOfContact = newValue
        } catch (error) {
            console.log(error.message)
        }
    }

    #updateValueOfContact(newValue){
        try {
            if(typeof newValue!= 'string')
                throw new Error("Invalid value of contact")

            this.valueOfContact = newValue
        } catch (error) {
            console.log(error.message)
        }
    }
}

module.exports = ContactInfo