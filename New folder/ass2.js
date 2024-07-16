// Question 1: Multiplication Table Generator

console.log("Multiplication table from 1 to 10:")
for(let i=1;i<=10;i++){                // Outer loop iterates over each multiplicand (i) from 1 to 10
    let r='   '  // Initialize an empty string for current row
    for(let j=1;j<=10;j++){              // Inner loop iterates over each multiplier (j) from 1 to 10 for the current multiplicand (i)
        let product=i*j       //Calculate & Initialize a variable to store product
        r+=i+"*"+j+"="+product+"   "    //format and append empty string
    }
    console.log(r)    // logs the output
}

// Question 2: Sum of Numbers in an Array

let array=[1,3,5,2,4,7]    //Initialize array
let sum=0                  //Initialize sum as 0
for(let i of array){       //iterates through each element in array
    sum+=i            //add current element i to sum
}
console.log("\nsum of array:",sum)   //logs the sum of array

// Question 3: Palindrome Checker

function palindrome(str){    //initialize function to check if string is palindrome or not
    let i=0                  // Initialize i as the starting index (0)
    let j=str.length-1       //initialize j as ending index (length of string -1)
    while (i<j){               //while loop until i is less than j
        if(str.charAt(i)!=str.charAt(j))  // Compare characters at positions i and j
            return false               // If characters do not match, return false (not a palindrome)
        i++                             // Increment first pointer
        j--                 // decrement the other pointer
    }
    return true                //returns true if loop completes without any mismatches
}

console.log("\n",palindrome("LeveL"))   //true
console.log(palindrome("abc"))     //false

// Question 4: Fibonacci Sequence Generator

function fibonacci(n){    //initialize function to generate fibonacci sequence
    let n1=0              // Initialize first Fibonacci number
    let n2=1              // Initialize second Fibonacci number
    let array=[]             // Initialize array to store Fibonacci sequence
    array.push(n1)             // push first Fibonacci number (0) to array
    array.push(n2)             // push second Fibonacci number (1) to array
    for(let i=2;i<n;i++){       // Loop to generate Fibonacci numbers from 2 to n-1
        let n3=n2+n1             // Calculate next Fibonacci number
        array.push(n3)             // push calculated Fibonacci number to array
        n1=n2             // Update n1 to previous n2
        n2=n3             // Update n2 to current n3
    }
    return array             // Return array containing first n Fibonacci numbers
}

console.log("\n",fibonacci(10))    //logs first 10 fibonacci numbers

// Question 5: Block Scope with Let and Const

function scope(){
    if (true){
        let x=10   //initialized let
        var y=20   //initialized var
        const a=3.14   //initialized const
        console.log(x)//10
        console.log(y)//20
        console.log(a)//3.14
    }
    // console.log(x)  //ReferenceError: x is not defined(let--blocked scope,but cannot access outside of block)
    console.log(y)      //20(var--function scope--can be accessed outside of block)
    // console.log(a)      //ReferenceError: a is not defined(const--blocked scope,but cannot access outside of block)
}
scope()//function call
