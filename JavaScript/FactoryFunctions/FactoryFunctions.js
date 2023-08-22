const operations = (operation,...number)=>{
    switch(operation){
         
         case "addition": 
              return add
         case "subtraction": 
              return subtract
         case "multiplication": 
              return multiply
         case "division": 
              return divide
         case "ceil": 
              return ceil
         case "floor": 
              return floor
         case "factorial": 
              return factorial
         default: 
              return [0,"Error: Invalid operation"]
    }
}

const add = (...number)=>{

    number.forEach((number,index)=>{
         if(typeof number !='number' )
              return[0,"NaN"]
    })

    let sum = 0
    for(let num of number){
         sum += num
    }
    return [sum, "success"]
}


const subtract = (...number)=>{

    number.forEach((number,index)=>{
         if(typeof number !='number' )
              return[0,"NaN"]
    })

    let subtraction = number[0]
    // for(let num of number){
    //      subtraction -= num
    // }
    for (let i = 1; i < number.length; i++) {
         subtraction -= number[i]
     }
    return [subtraction, "success"]
}

const multiply = (...number) => {
    number.forEach((number, index) => {
        if (typeof number != 'number') {
            return [0, "NaN"]
        }
    })

    let multiplication = 1
    for (let num of number) {
         multiplication *= num
    }
    return [multiplication, "success"]
}

const divide = (...number) => {
    number.forEach((number, index) => {
        if (typeof number != 'number' || number === 0) {
            return [0, "NaN"]
        }
    })

    let division = number[0]
    for (let i = 1; i < number.length; i++) {
        division /= number[i]
    }
    return [division, "success"]
}

const ceil = (...number) => {
    number.forEach((number, index) => {
        if (typeof number != 'number') {
            return [0, "NaN"]
        }
    })

    const ceilNumber = Math.ceil(number)
    return [ceilNumber, "success"]
} 

const floor = (...number) => {
    number.forEach((number, index) => {
        if (typeof number != 'number') {
            return [0, "NaN"]
        }
    })

    const floorNumber = Math.floor(number)
    return [floorNumber, "success"]
} 


const factorial = (...number)=>{
    number.forEach((number, index) => {
         if (typeof number != 'number') {
             return [0, "NaN"]
         }
     })

    let fact = 1
    for(let i=1;i<=number;i++){
         fact *= i
    }
    return [fact, "success"]
}


let addition = operations("addition")
let subtraction = operations("subtraction")
let multiplication = operations("multiplication")
let division = operations("division")
let ceilResult = operations("ceil")
let floorResult = operations("floor")

