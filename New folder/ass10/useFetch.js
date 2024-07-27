import { useState, useEffect } from 'react';

// Custom hook to fetch data from a given URL
const useFetch = (url) => {
    const [data, setData] = useState(null) // State to store fetched data
    const [loading, setLoading] = useState(true)  // State to track loading status
    const [error, setError] = useState(null) // State to store any error messages

    useEffect(() => {
        const fetchData = async () => {
        setLoading(true)  // Set loading to true before starting the fetch
        setError(null) // Reset error state before new fetch
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error('Network response was not ok') // Throw error for non-200 responses
            }
            const result = await response.json()
            setData(result) // Store fetched data in state
        } catch (err) {
            setError(err.message) // Store error message in state
        } finally {
            setLoading(false) // Set loading to false after fetch is complete
        }
        }

        fetchData() // Call fetch function
    }, [url]) // Effect depends on URL

    return { data, loading, error } // Return state variables for use in components
}

export default useFetch;
