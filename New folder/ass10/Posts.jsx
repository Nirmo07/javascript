import React from 'react'

// Functional component to display a post
const Posts = (props) => {
    return (
    <div style={{margin:'6px'}}>
        {/* List item displaying the post title */}
        <li style={{ fontSize: '1em', color: '#333', marginBottom: '3px',listStyleType: 'disc',fontSize:'20px' }}>Title: {props.title}</li>
    </div>
    )
}

export default Posts
