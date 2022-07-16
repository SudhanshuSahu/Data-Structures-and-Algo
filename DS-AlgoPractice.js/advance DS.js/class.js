//**********Class is a blue print for creating objects with pre-defined properties and methods 
//we are going to implment data structures as classes */
//SYntax of class

// class Student {
//     constructor(firstName , lastName){
//         this.fisrtName = firstName
//         this.lastName = lastName
//     }
    
// }
// let firstStudent = new Student("sudhanshu","sahu")
// let secondStudent = new Student("rupesh","rai")
// console.log(firstStudent ,secondStudent );

//****INSTANCE METHOD */
class Student {
    constructor(firstName , lastName){
        this.fisrtName = firstName
        this.lastName = lastName
        this.tardies = 0
    }
    fullName(){
        return ` YOur full name is ${this.fisrtName} ${this.lastName}`
    }
    markLate(){
        this.tardies +=1
        if(this.tardies >=3){
            return "YOU ARE EXPELLED!!"
        }
        return `${this.fisrtName} ${this.lastName} has been late ${this.tardies} times`
    }
}
let firstStudent = new Student("sudhanshu","sahu")
let secondStudent = new Student("rupesh","rai")

console.log(firstStudent.fullName())
console.log(firstStudent.markLate())
//console.log(firstStudent ,secondStudent );