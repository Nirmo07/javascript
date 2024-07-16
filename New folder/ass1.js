////Question 1: Write a program that defines and logs different data types

// local variable(let) , global variable(var) and constant variable(const)
let string="abc"    //Initialization of string
const number=123      //Initialization of constant number
var num=12.5         //Initialization of number(decimal/float)
let boolean=true     //Initialization of boolean with value as true(1)
let Boolean=false     //Boolean with value false(0)
let object={          //Initialization of object
    name:"xyz",
    age:23,
    hobby:"cvb"
}
let arr=[1,2,"zcv",12.4]   //Initialization of array

//Log the value and type of each variable to the console.
console.log(string,":",typeof string)
console.log(number,":",typeof number)
console.log(num,":",typeof num)
console.log(boolean,":",typeof boolean)
console.log(Boolean,":",typeof Boolean)
console.log(object,":",typeof object)
console.log(arr,":",typeof arr)

////Question 2: Write a program that performs basic arithmetic operations.

let n1=parseInt(prompt("Enter first no:"))       //prompt user to enter two numbers
let n2=parseInt(prompt("Enter second no:"))       //parseInt is used to convert user i/p(which is in String) into int
console.log("sum:",n1+n2)    //Logs Addition between two numbers
console.log("sub:",n1-n2)     //Logs Subtraction between two numbers
console.log("product:",n1*n2)  //Logs Multiplication between two numbers
console.log("division:",n1/n2)  //Logs Division between two numbers

////Question 3: Create a program that checks if a number is positive, negative, or zero.

let g=parseInt(prompt("Enter a no:"))    //Prompt the user to enter a number.
if(g>0){                                  //if g(user_input) is greater than 0,logs positive
    console.log("positive")
}
else if(g<0){                              //else if g(user_input) is smaller than 0,logs negative
    console.log("negative")
}
else{
    console.log("zero")                    //else logs zero
}

////Question 4: Write a program that prints all even numbers from 1 to 20.

for (let i=1;i<=20;i++){   // for loop----i iterates from 1 to 20
    if (i%2!=0){               //if statement--checks if i is odd or i % 2 is not equal to 0
        continue         //jump statement(continue)--skips iteration if if-statement is executed
    }
    else{
        console.log("Even no. are:",i)  //Logs even number
    }
}

///Question 5:  Create a program that simulates a simple grading system.

h=Number(prompt("Enter grade(0-100):"))  //prompt grades (0 to 100) from user
if (h <= 100 && h >= 90) {                   //if-else if-else condition used to differentiate between grade according to conditions
    console.log("Grade: A")
    }
else if (h<=89 && h>=80){
    console.log("Grade: B")
}
else if (h <= 79 && h >= 70) {
    console.log("Grade: C")
}
else if (h <= 69 && h >= 60) {
    console.log("Grade: D")
}
else if (h <= 59 && h >= 0) {
    console.log("Grade: F")
}
else {                     //if the prompt value is below 0 or above 100 or is of different datatype else condition statement will be displayed
    console.log("Invalid grade")
}