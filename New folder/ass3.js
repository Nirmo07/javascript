//  Question 1- Write a JavaScript function that takes an array of strings and returns a new array with each string capitalized.

const words = ["apple", "banana", "cherry"]          // Array of strings
function capitalizeStrings(str){                     // Function definition with a parameter which stores the input array
    let newstr=[]                                    // Empty array to store new capitalized strings
    for (let i in str){                              // 'For-in' loop--- to iterates the array using index
        let a=str[i].charAt(0).toUpperCase()         // Capitalize the first character of each string in the array and stores it in local variable
        // newstr.push(a)                            // O-pushes the capitalized first character into new array which is newstr
        for(let j=1;j<str[i].length;j++){            // 'For' loop to iterate over the remaining characters of the current string
                a+=str[i][j]                         // Adds the remaining characters to the capitalized first character
        }
        newstr.push(a)                               // Pushes the fully capitalized string into new array which is 'newstr'
    }
    return newstr                                    // Returns 'newstr' which stores the array of capitalized strings
}
console.log(capitalizeStrings(words))                // Log the result by calling the function with the 'words' array as the argument


//Question 2- Create a function that returns the second largest element in an array.

const arr = [3, 1, 4, 2, 5]                          // Array of unordered numbers
function secondLargest(arr){                         // Function definition with a parameter which stores the input array
    let array=arr.sort()                             // Sorts the array 'arr' in ascending order and stores into new array which is 'array'
    // return array                                  // O-returns 'array' which stores sorted array
    return array[array.length-2]                     // Returns the second largest element in the sorted array
}
console.log("second largest:",secondLargest(arr))    // Log the result by calling the function with the 'arr' array as the argument

//Question 3-Write a JavaScript function that takes an array of objects and a key, and returns an array of values corresponding to that key.

const objects = [                                   // Array of objects
    {name: "John", age: 25},
    {name: "Jane", age: 30},
    {name: "Jim", age: 20}
]
const key = "name"                                  // Variable 'key' to specify which object property to extract
function getValuesByKey(objects,key){               // Function definition with a parameter which stores the array of object and key
    let arr=[]
    for(let i in objects){                          // 'For-in' loop--- to iterates the array using index
        let a=objects[i][key]                       // Access the property specified by 'key' in each object
        arr.push(a)                                 // Push the value to the result array 'arr'
    }
    return arr                                      // Return the array of values
}
console.log(getValuesByKey(objects, key))           // Output: ["John", "Jane", "Jim"]

//Question 4- Calculate the factorial of every element in an array and store it in a new array.

const numbers = [1, 2, 3, 4];                        // Array of numbers

function factorialArray(num) {                       // Function definition with 'num' as a parameter which stores array of numbers
    let arr = [];                                    // Initialize an empty array to store factorial results
    for (let i in num) {                             // for-in loop--- to iterates the array using index
        let a = 1;                                   // Initialize variable 'a' to 1 to calculate factorial
        for (let j = 1; j <= num[i]; j++) {          // Loop through numbers from 1 up to the current element in 'num'
            a *= j;                                  // Multiply 'a' with the factorial value
        }
        arr.push(a);                                 // Push the factorial value 'a' into the result array 'arr'
    }
    return arr;                                       // Return the array containing factorial values
}

console.log(factorialArray(numbers));                // Output: [1, 2, 6, 24]

//Question 5-Create a function to find the intersection of two arrays.

const array1 = [1, 2, 3, 4]                             // First Array of numbers
const array2 = [3, 4, 5, 6]                             // Second Array of numbers

function intersection(arr1,arr2){                       // Function definition with 'arr1' and 'arr2' as a parameter which stores array of numbers
    let arr=arr1.filter((val)=>{                        // Use filter to iterate through arr1 and filter elements present in arr2
        return arr2.includes(val)                       // Check if arr2 includes the current element (val) from arr1
    })
    return arr                                          // Return the filtered array containing elements present in both arrays
}
console.log(intersection(array1, array2))               // Output: [3, 4]
