const ContactInfo = require("./ContactInfo.js");

class Contact{

    static id = 0 
    constructor(name){
        this.name = name,
        this.contactInfos = [],
        this.id = Contact.id++
    }

    static newContact(name){
        try {
            if (typeof name != "string") {
                throw new Error("Invalid name")
            }

            return new Contact(name)
        } catch (error) {
            console.log(error.message)
        }
    }

    updateContact(parameter, newValue){
        
            switch (parameter) {
                case 'name':
                    this.#updateName(newValue)
                    break;
            
                default:
                    throw new Error("Invalid parameter")
            }
            
    }

    #updateName(newValue){
        try {
            if (typeof newValue != 'string')
                throw new Error("Invalid Name value")
        } catch (error) {
            console.log(error.message)
        }
        this.name = newValue
    }

    createContactInfo(typeOfContact, valueOfContact){

        let newContactInfo = ContactInfo.newContactInfo(typeOfContact, valueOfContact)
        this.contactInfos.push(newContactInfo)
        return newContactInfo
    }

    #findContactInfo(contactInfoID){
        try {
            if(typeof contactInfoID != "number"){
                throw new Validation("Invalid Contact Info ID")
            }

            for (let index = 0; index < this.contactInfos.length; index++) {
                if(contactInfoID == this.contactInfos[index].id){
                    return [this.contactInfos[index], index]
                }
            }
            // return [null,-1]
            throw new Error("ContactInfo ID not found")
        } catch (error) {
            console.log(error.message)
        }
        
    }

    updateContactInfo(contactInfoID, parameter, newValue){
        let [foundContactInfo, indexOfContact] = this.#findContactInfo(contactInfoID)
        foundContactInfo.updateContactInfo(parameter, newValue)
        return foundContactInfo
    }

    getAllContactInfo(){
        return this.contactInfos
    }

    getContactInfoByID(contactinfoID){
        let [foundContactInfo,indexOfContactInfo] = this.#findContactInfo(contactinfoID)
        return foundContactInfo
    }

    deleteContactInfo(contactInfoID){
        try {
            if(typeof contactInfoID != "number"){   
                throw new Validation("Invalid Contact ID")    
            }

            let [foundContactInfo, indexOfContactInfo] = this.#findContactInfo(contactInfoID)
            this.contactInfos.splice(indexOfContactInfo,1)
        } catch (error) {
            console.log(error.message)
        }
        
    }
}

module.exports = Contact