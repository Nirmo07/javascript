import React, { useState, useEffect } from 'react';

const UserSearch = () => {
    const [query, setQuery] = useState('') // State to hold the search query
    const [user, setUser] = useState(null) // State to hold the fetched user data

    useEffect(() => {
        if (query) {
            // Function to fetch user data from GitHub API
            const fetchUser = async () => {
                try {
                    let response = await fetch(`https://api.github.com/users/${query}`)
                    if (response.ok) {
                        let data = await response.json()
                        console.log(data)
                        setUser(data) // Set the user data in state
                    } else {
                        setUser(null) // Set user to null if response is not ok
                    }
                } catch (err) {
                    console.log('Error fetching user:', err)
                    setUser(null) // Set user to null in case of error
                }
            }

            fetchUser()
        } else {
            setUser(null) // Clear user data if query is empty
        }
    }, [query])

    return (
        <div >
            {/* Input field for searching GitHub username */}
            <input
                type="text"
                placeholder="Enter GitHub username"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{
                    width: '40%',
                    padding: '10px',
                    fontSize: '16px',
                    borderRadius: '5px',
                    marginBottom: '20px',
                    marginLeft:'6px',
                    marginTop:'6px'
                }}
            />
            {user ? (
                // Display user data if user is found
                <div style={{textAlign: 'center'}}>
                    <img
                        src={user.avatar_url}
                        alt={user.name}
                        style={{
                            width: '150px',
                            height: '150px',
                            borderRadius: '75px',
                            marginBottom: '10px'
                        }}
                    />
                    <h2 style={{
                        fontSize: '1.5em',
                        color: '#333'
                    }}>{user.name}</h2>
                </div>
            ) : (
                 // Display message if no user is found and query is not empty
                query && <p >No user found</p>
            )}
        </div>
    );
};


export default UserSearch;
