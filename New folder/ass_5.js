//Question 1-Write a function that returns a closure which adds a specific number to its argument.

function func1(num){                                 // Function Definition 'func' that takes a number 'num' as an argument
    return function(y){                              // Return a closure (a function) that takes another number 'y' as an argument
        return y+num                                 // The closure adds 'num' to 'y' and returns the result
    }
}
let a=func1(10)                                      // Create a variable 'a' and assign it the closure returned by calling 'func' with the argument
console.log(a(1))                                    // Call the closure 'a' with the argument and print the result to the console---O/p: 11

// Question 2-Create a function using closure to keep track of how many times it has been called.

function func2(){                                        // Function Definition 'func' that keep track of how many times it has been called
    let count=0                                          // Initialization of a counter variable
    return function(){                                   // Return a closure that increments the counter and returns the updated count
        return count++
    }
}
let track=func2()                                       // Create a variable 'counter' and assign it the closure returned by calling 'func'
//logs the result in console when we call the counter function multiple times
console.log(track()) // 0
console.log(track()) // 1
console.log(track()) // 2

// Question 3- Implement a prototype method to calculate the area of a rectangle object.

class arear{                                              // Class Definition 'arear' with a constructor that takes length and breadth as arguments
    constructor(l,b){
        this.length=l                                     // Set the instance's 'length' property to the value of 'l'
        this.breadth=b                                    // Set the instance's 'breadth' property to the value of 'b'
    }
}
arear.prototype.display=function(){                       // Add a method 'display' to the prototype of 'arear' class
    console.log(`Area of rectangle is ${this.length*this.breadth}`) // Log the area of the rectangle
}
let rect=new arear(10,20)                                 // Create a new instance of 'arear' with length and breadth
rect.display()                                            // Call the 'display' method on the 'rect' instance---O/p: Area of rectangle is 200

// Question 4-Write a function to create an object and add methods using prototype to calculate perimeter and area of a circle.

class circle{                                               // Class Definition 'circle' with a constructor that takes radius and pi as arguments
    constructor(r,pi){
        this.radius=r                                       // Set the instance's 'radius' property to the value of 'r'
        this.pi=pi                                          // Set the instance's 'pi' property to the value of 'pi'
    }
}
circle.prototype.perimeterCircle=function(){                // Add a method 'perimeterCircle' to the prototype of 'circle' class
    console.log(`Perimeter of circle is ${2*this.pi*this.radius}`)      // Log the perimeter of the circle
}
circle.prototype.areaOfCircle=function(){                   // Add a method 'areaOfCircle' to the prototype of 'circle' class
    console.log(`Area of circle is ${this.pi*this.radius*this.radius}`) // Log the area of the circle
}
const c=new circle(3,3.14)                                  // Create a new instance of 'circle' with radius and pi
// Call the 'perimeterCircle' and 'areaOfCircle' method on the 'c' instance
c.perimeterCircle()                                         // Output: Perimeter of circle is 18.84
c.areaOfCircle()                                            // Output: Area of circle is 28.26

// Question 5-Create a function that returns a set of functions that can increment, decrement, reset, and get the value of a private counter. Each function should be able to modify or access the private counter, demonstrating a more complex use of closures

function func3(){                                              // Function 'func' manages a private counter 'c' and returns methods to manipulate and access it.
    let c=0                                                    // Initialize a private counter 'c'
    function inc(){                                            // Inner Function to manipulate 'c' using closure
        c++                                                    // Increment the counter 'c'
    }
    function dec(){
        c--                                                    // Decrement the counter 'c'
    }
    function reset(){
        c=0                                                    // Reset the counter 'c' to 0
    }
    function getValue(){
        return console.log("Value of counter:",c)              // Return and log the current value of 'c'
    }
    return{                                                    // Return an object with references to the inner functions
        inc,dec,reset,getValue                                 // Method to Increment, Decrement, Reset and to Get the current value of 'c'
    }
}
const counter=func3()                                          // Create an instance of 'func' and assign it to 'counter'
// Logs the result in console when we call the counter function multiple times
counter.inc()                                                  // Increment 'c' by 1
counter.inc()                                                  // Increment 'c' by 1
counter.inc()                                                  // Increment 'c' by 1
counter.getValue()                                             // O/p: Value of counter: 3 (current value of 'c')
counter.dec()                                                  // Decrement 'c' by 1
counter.getValue()                                             // O/p: Value of counter: 2 (current value of 'c')
counter.reset()                                                // Reset 'c' to 0
counter.getValue()                                             // O/p: Value of counter: 0 (current value of 'c')
