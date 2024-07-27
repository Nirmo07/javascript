// Assignment 1: Basic File Handling

const fs = require('fs')// Import the fs module
const text='Hello World' // Text to write into the file

// Write the text to notes.txt
fs.writeFile('notes.txt',text,(err)=>{
    // Check for errors during the write operation
    if(err){
        console.log('Error:',err) // Log the error if it occurs
    }else{
    console.log('File has been written successfully')// Log confirm message
    }
})

// Read the text from notes.txt
fs.readFile('notes.txt','utf-8',(err,data)=>{
    // Check for errors during the read operation
    if(err){
        console.log('Error:',err)// Log the error if it occurs
    }else{
        console.log('Content:',data)// Log the content
    }
})

// Append the additional text to notes.txt
fs.appendFile('notes.txt',' Hi There',(err)=>{
    // Check for errors during the append operation
    if(err){
        consle.log('Error:',err)// Log the error if it occurs
    }else{
        console.log('File has been appended successfully')// Log confirm message
    }
})

// Delete the File
fs.unlink('notes.txt',(err)=>{
    // Check for errors during the delete operation
    if(err){
        console.log('Error:',err)// Log the error if it occurs
    }else{
        console.log("File deleted successfully")// Log confirm message
    }
})


// Assignment 2: Synchronous vs Asynchronous File Handling

const LargeText = 'Hello World! '.repeat(10000000) // Create a large amount of text

// Synchronous write
console.log('Synchronous write')
const startWriteSync = new Date().getTime() // Start time for synchronous write
fs.writeFileSync('largefile.txt', LargeText) // Write the large text synchronously
const endWriteSync = new Date().getTime() // End time for synchronous write
const WriteSync = endWriteSync - startWriteSync // Calculate the time taken
console.log(`Time taken: ${WriteSync} ms`) // Log the time taken

// Synchronous read
console.log('Synchronous read')
const startReadSync = new Date().getTime() // Start time for synchronous read
const dataSync = fs.readFileSync('largefile.txt', 'utf8') // Read the file synchronously
const endReadSync = new Date().getTime() // End time for synchronous read
const ReadSync = endReadSync - startReadSync // Calculate the time taken
console.log(`Time taken: ${ReadSync} ms`) // Log the time taken

// Asynchronous write
console.log('Asynchronous write')
const startWriteAsync = new Date().getTime() // Start time for asynchronous write
fs.writeFile('largefile.txt', LargeText, (err) => { // Write the large text asynchronously
    if (err) {
        console.log('Error:', err) // Log any errors
    } else {
        const endWriteAsync = new Date().getTime() // End time for asynchronous write
        const WriteAsync = endWriteAsync - startWriteAsync // Calculate the time taken
        console.log(`Time taken: ${WriteAsync} ms`) // Log the time taken

        // Asynchronous read
        console.log('Asynchronous read')
        const startReadAsync = new Date().getTime() // Start time for asynchronous read
        fs.readFile('largefile.txt', 'utf8', (err, dataAsync) => { // Read the file asynchronously
            if (err) {
                console.log('Error:', err) // Log any errors
            } else {
                const endReadAsync = new Date().getTime() // End time for asynchronous read
                const ReadAsync = endReadAsync - startReadAsync // Calculate the time taken
                console.log(`Time taken: ${ReadAsync} ms`) // Log the time taken

                // Log time differences
                console.log('\nTime Differences:')
                console.log(`Sync Write vs Async Write: ${WriteSync - WriteAsync} ms`) // Log write time difference
                console.log(`Sync Read vs Async Read: ${ReadSync - ReadAsync} ms`) // Log read time difference

                // Explanation of results
                console.log('\nExplanation:');
                console.log('Synchronous operations block the event loop, preventing other code from executing until the file operation is complete.')
                console.log('Asynchronous operations allow other code to execute while the file operation is being performed, resulting in more efficient use of the event loop.')
            }
        })
    }
})


// Assignment 3: Callback Functions

// Function that simulates an asynchronous task
function doTask(callback) {
    console.log('Task started') // Log when the task starts
    // Simulate an asynchronous operation with a 2-second delay
    setTimeout(() => {
        console.log('Task completed') // Log when the task is completed
        callback() // Execute the callback function
    }, 2000)
}

// Callback function that logs "Callback executed"
function myCallback() {
    console.log('Callback executed')
}

// Call doTask and pass the callback function
doTask(myCallback)


// Assignment 4: Nested Callbacks (Callback Hell)

// Function that simulates Task 1
function task1(callback) {
    setTimeout(() => {
        console.log('Task 1 completed') // Log when Task 1 is completed
        callback() // Execute the callback function
    }, 1000) // 1-second delay
}

// Function that simulates Task 2
function task2(callback) {
    setTimeout(() => {
        console.log('Task 2 completed') // Log when Task 2 is completed
        callback() // Execute the callback function
    }, 2000) // 2-second delay
}

// Function that simulates Task 3
function task3(callback) {
    setTimeout(() => {
        console.log('Task 3 completed') // Log when Task 3 is completed
        callback() // Execute the callback function
    }, 3000) // 3-second delay
}

// Nest the tasks to ensure they run in order
task1(() => {
    task2(() => {
        task3(() => {
            console.log('All tasks completed')
        })
    })
})


// Assignment 5: Using Promises to Avoid CallBack Hell

// Function that simulates Task 1 and returns a Promise
function task1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 1 completed') // Log when Task 1 is completed
            resolve() // Resolve the Promise
        }, 1000) // 1-second delay
    })
}

// Function that simulates Task 2 and returns a Promise
function task2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 2 completed') // Log when Task 2 is completed
            resolve() // Resolve the Promise
        }, 2000) // 2-second delay
    })
}

// Function that simulates Task 3 and returns a Promise
function task3() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Task 3 completed') // Log when Task 3 is completed
            resolve() // Resolve the Promise
        }, 3000) // 3-second delay
    })
}

// Chain the tasks using .then() and handle errors with .catch()
task1()
    .then(() => task2())
    .then(() => task3())
    .then(() => {
        console.log('All tasks completed');
    })
    .catch((err) => {
        console.error('Error:', err);
    })
