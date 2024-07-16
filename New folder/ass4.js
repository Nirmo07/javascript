// Question-Write a function that takes an object and returns an array of the object's keys and values.

let person = { name: "John", age: 30 }          // Objects and keys
function getKeysAndValues(obj) {                // Function to get keys and values of an object as an array of arrays
    return Object.entries(obj);                 // To get array of key-value pair Object.entries is used and returned
}
console.log(getKeysAndValues(person));         //logs the result by calling a function with a parameter as 'person' 

//Question 2- Create a function to convert a string to title case

function toTitleCase(str){                         //Function to convert a string to title case
    let string=str.toString()                      //Convert the input to a string
    let arr=string.split(" ")                      //Split the string into an array of words
    let b = ' '                                    //Initialize an empty string to store the result
    for(let i in arr){                             //'for' loop iterates through each word in the array
        let a=arr[i].charAt(0).toUpperCase()       //Get the first character of the word and convert it to uppercase
        for(let j=1;j<arr[i].length;j++){          // Add the rest of the word (in lowercase) to the result
            a+=arr[i][j]
        }
        b+=a+' '                                   //Add the formatted word to the result string
    }
    return b                                       // Return the result string
}
console.log(toTitleCase("hello world"))            //logs the result by calling a function with a parameter

//Question 3-Implement a function that checks if an object is empty.

let object={}                                       // Initialize an empty object
// let object={ 1:"hd"}                             //Initialization of object
function checkobject(o){                            //function to check if object is empty or not
    let obj=Object.keys(o)                          // Get an array of the object's keys
        if(obj.length==0){                          // Check if the array is empty and if then return a message
            return "Object empty"
        }
        else{                                       // If not empty, return the object itself
            return o
        }
}
console.log(checkobject(object))                    // Call the function with the object as an argument

//Question 4- Write a function to count the number of occurrences of each character in a string.

function charCount(str){                                // Function to count occurrences of each character in a string
    let o={}                                            // Initialize an empty object to store character counts
    for (let i of str){                                 // Iterate through each character in the string
        if(o[i]){                                       // Check if the character is already a key in 'o'
            o[i]++                                      // Increment the count if the character exists
        }
        else{                                           // Initialize the count to 1 if the character doesn't exist
            o[i]=1
        }
    }
    return o                                            // Return the object containing character counts                         // 'For-in' loop--- to iterates the array using index
}
console.log(charCount("hello"))                         // Output: { h: 1, e: 1, l: 2, o: 1 }
