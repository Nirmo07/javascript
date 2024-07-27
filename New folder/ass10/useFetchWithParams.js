import { useState, useEffect } from 'react';

// Custom hook to fetch data from a given URL with query parameters
const useFetchWithParams = (url, params) => {
    const [data, setData] = useState(null) // State to store fetched data
    const [loading, setLoading] = useState(true) // State to track loading status
    const [error, setError] = useState(null) // State to store any error messages

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Convert params object to query string
                const queryString = new URLSearchParams(params).toString()
                // Fetch data from the URL with query parameters
                const response = await fetch(`${url}?${queryString}`)
                // Check if the response is ok (status in the range 200-299)
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                // Parse the JSON data
                const result = await response.json()
                // Store fetched data in state
                setData(result)
            } catch (err) {
                // Store error message in state
                setError(err.message)
            } finally {
                // Set loading to false after fetch is complete
                setLoading(false)
            }
        };

        fetchData() // Call fetch function
    }, [url, params]) // Effect depends on URL and params

    return { data, loading, error } // Return state variables for use in components
};

export default useFetchWithParams;
