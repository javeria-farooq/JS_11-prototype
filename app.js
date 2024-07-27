/*//first we create simple objs
let obj = {
    name: 'javeria',
    courseOnGoing : 'web development',
    courseFuture : 'Gen AI'
}
console.log(obj)
// all about prototypes

obj.__proto__ = 'hello' // it doesn't set

let msg = ' hello'
obj.__proto__ = msg // it also didn't set

obj.__proto__ = {
    msg : 'hello'
} // it sets

obj.__proto__ = ['apple', 'mango', 'peach'] // it also sets but overwrites

obj.__proto__ = {
    msg : 'hello',
    arr : ['apple', 'mango', 'peach']
} //this is perfectly set*/

/* //prototype practice
const employeeTax = {
    calcTax() {
        console.log(`tax rate is 10%`)
    },

    firstVar: "javeria"
}

const employeeSalary = {
    salary: 50000,
}

const employeeSalary2 = {
    salary: 50000,
}

const employeeSalary3 = {
    salary: 50000,
}

const employeeSalary4 = {
    salary: 50000,
}

employeeSalary.__proto__ = employeeTax
employeeSalary2.__proto__ = employeeTax
employeeSalary3.__proto__ = employeeTax
employeeSalary4.__proto__ = employeeTax*/

/*// prototypal inheritance: jb obj m koi property nh hgi t wo uske prototype m check krega.
let user = {
    fullName : 'javeria',
    age : 20
}

let student = {
    fullName : 'aliza',
    age : 17,
    profession : 'student' //ye obj m nh th lkn prototype m mili t return krdga
}

user.__proto__ = student
console.log(user)
console.log(student)*/

// factory fnc

function CreateEmployee(firstName, lastName, age, salary, department) {
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
    this.salary = salary
    this.department = department
}
CreateEmployee.prototype.calTax = function() {
    let taxRate = this.salary * 10 / 100 // 10%
    return (`the tax rate of ${this.salary} is ${taxRate}`)
}

let employee1 = new CreateEmployee('mehak', 'alamgir', 28, 50000, 'Content writing')
console.log(employee1)
console.log(employee1.calTax())

let employee2 = new CreateEmployee('daniyal', 'nagori', 38, 200000, 'software engineer')
console.log(employee2)
console.log(employee2.calTax())