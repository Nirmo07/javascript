// Assignment 1: Basic Async/Await for Data Fetching

// Import the axios library
const axios = require('axios')

// Asynchronous function to fetch data from the public API
const fetchData1 = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    console.log(response.data)
}
// Call the asynchronous function to fetch and log the data
fetchData1()


// Assignment 2: Handling Errors with Async/Await

// Asynchronous function to fetch data from an invalid URL
const fetchData2 = async () => {
    try {
        // Attempt to fetch data from an invalid URL
        const response = await axios.get('https://invalidurl.example.com/posts')
        console.log(response.data)
    } catch (error) {
        // Log an appropriate error message
        console.error('Error fetching data:', error.message)
    }
}
// Call the asynchronous function to fetch and log the data
fetchData2()


// Assignment 3: Sequential Data Fetching with Async/Await

// Asynchronous function to fetch data from two APIs
const fetchData3 = async () => {
    try {
        // Fetch data from the first API
        const postsResponse = await axios.get('https://jsonplaceholder.typicode.com/posts')
        console.log('Posts:', postsResponse.data)
        // Fetch data from the second API
        const usersResponse = await axios.get('https://jsonplaceholder.typicode.com/users')
        console.log('Users:', usersResponse.data)
    } catch (error) {
        // Log an error message if something goes wrong
        console.error('Error fetching data:', error.message)
    }
}
// Call the asynchronous function to fetch and log the data
fetchData3()


// Assignment 4: Parallel Data Fetching with Async/Await

// Asynchronous function to fetch data from two APIs in parallel
const fetchData4 = async () => {
    try {
        // Create an array of fetch promises
        const fetchPosts = axios.get('https://jsonplaceholder.typicode.com/posts')
        const fetchUsers = axios.get('https://jsonplaceholder.typicode.com/users')
        // Use Promise.all to fetch data from both APIs in parallel
        const [postsResponse, usersResponse] = await Promise.all([fetchPosts, fetchUsers])
        // Log the results from both APIs
        console.log('Posts:', postsResponse.data)
        console.log('Users:', usersResponse.data)
    } catch (error) {
        // Log an error message if something goes wrong
        console.error('Error fetching data:', error.message)
    }
}
// Call the asynchronous function to fetch and log the data
fetchData4()


// Assignment 5: Chaining Async Functions

// Function to fetch posts
const fetchPosts = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return response.data // Return the posts data
}

// Function to fetch comments
const fetchComments = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/comments')
    return response.data // Return the comments data
}

// Function to call fetchPosts and then fetchComments
const fetchData5 = async () => {
    try {
        const posts = await fetchPosts() // Wait for posts to be fetched
        console.log('Posts:', posts) // Log posts
        const comments = await fetchComments() // Wait for comments to be fetched
        console.log('Comments:', comments) // Log comments
    } catch (error) {
        console.error('Error fetching data:', error.message) // Log error if any
    }
}
// Call the function to fetch and log the data
fetchData5()