/*first we create our simple obj: and use this keyword in it*/

/*const student = {
    fullName : "javeria farooq",
    marks: 74,
    printMarksFnc: function myFnc() {
        console.log(`print marks in fnc = ${marks}`)
    }
}*/

/*console.log(`Full Name of a student is : ${student.fullName}`)
console.log(`marks of a student is: ${student.marks}`)
console.log(`now print the value of student marks = ${student.printMarksFnc()}`)*/

/*ab yhn pe hmne ise kaha h k student obj m jao r usmn se printMarks wle fnc ko invoke kro jb usne us fnc ko invoke
kia t usmn console ki statement th t islye ye console pe print krwaega lkn actual m ye console pe print nh hga qk is
fnc k undr hm js marks ko conosle pe print krwna chah rh hn wo marks ek obj k undr h ab chahe wo obj is fnc ka h ya
na h isse frq nh prta lkn agr wo ksi obj m h t oose oosi trhn access krnge js trhn ksi bh obj ki ksi bh propert ko
access krte hn yni objName.propertyName is trhn:*/

/*const student = {
    fullName: "javeria farooq",
    marks: 74,
    printMarksFnc: function myFnc() {
        console.log(`print marks in fnc = ${this.marks}`) //here we also use objName means: student
        yhn hm ye bh lkh skte hn student.marks. basically yhn this lkhne ka mtlb hi ye h k mn js obj k undr hn isi
        obj yni this hi obj ki property marks ko access krna chahti hn.
    }
}

console.log(student)
console.log(`Full Name of a student is : ${student.fullName}`)
console.log(`marks of a student is: ${student.marks}`)
console.log(`${student.printMarksFnc()}`)
/*acha ek bt k yhn sth sth undefined bh aarh h pta nh q.shyd jb hm ksi obj ki property m stored fnc ko console pe
print krwa rh hn tb wo print t hrh h lkn sth hi next line m undefined bh aarh h*/

/*now we explore the type of array and fnc and see that the obj named prototype: */

/*let arr = [1, 2, 3, 4, 5]
console.log(arr)
console.log(typeof arr)

let arrowFnc = () => {
    console.log(`hello this is my arrow function`)
}

function nameFnc() {
    console.log(`hello this is my naming function`)
}

console.log(`type of arrow func is = ${typeof arrowFnc}`)
console.log(`type of naming func is = ${typeof nameFnc}`)
console.log(typeof arrowFnc)
console.log(typeof arr)*/

/*now we check to create our own prototype in simple way: */

/*let arr = ["jav", "aliza", "afnan"]
arr.__proto__ = "yasmeen"
console.log(arr)*/

/*let arr = ["jav", "aliza", "afnan"]
let myName = "yasmeen"
arr.__proto__ = myName
console.log(arr)*/

/*let arr = ["jav", "aliza", "afnan"]
let arr2 = ["yasmeen", "farooq"]
arr.__proto__ = arr2
console.log(arr)*/

/*let myObj = {
    fullName : "javeria",
    age: 20,
}

let myObj2 = {
    fullName : "aliza",
    age : 17,
}

myObj.__proto__ = myObj2
console.log(myObj)*/

/*let arr = [1, 2, 3]
let myObj = {
    fullName : "javeira",
    age : 20,
}

arr.__proto__ = myObj
console.log(arr)*/

/*let myObj = {
    fullName : "javeira",
    age : 20,
}

let arr = [1, 2, 3]

myObj.__proto__ = arr
console.log(myObj)*/

/*methods of defining fnc in an obj */

/*1st method is simple from that we defined. */

/*const myObj = {
    firstFnc : function myFnc() {
        console.log("this is the function defining by simple method")
    }
}*/

/*2nd method is that we defining our fnc without fncName but this is allowed only in an obj */

/*const myObj2 = {
    secFnc: function() {
        console.log(`this is function which defines without function name`)
    }
}*/

/*3rd method is that we defining our fnc without function keyword and obj keyName but this is also allowed only in an
obj*/

/*const myObj3 = {
    myFnc2 () {
        console.log(`this is function which defines without function keyword and object key name`)
    }
}*/

/*now we set our own prototype in professional way*/

/*const employeeTax = {
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

/*prototype: */

/*const employee = {
    calcTax(){
        console.log(`tax rate is 10%`)
    }
    calcTax: function(){
        console.log(`tax rate is 10%`)
    }
}

const newEmployee = {
    name: 'javeria',
    age: 60
}

console.log(employee, employee.calcTax)
console.log(newEmployee, newEmployee.name, newEmployee.salary)
newEmployee.__proto__ = employee

console.log(newEmployee, newEmployee.calcTax())*/