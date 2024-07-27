import React,{useState} from 'react'

const ConditionalRendering = () => {
    const [Paragraph, setParagraph] = useState(false)// State to toggle paragraph visibility
    // Toggle paragraph visibility
    const toggleParagraph = () => {
        setParagraph(!Paragraph)
    }
    // Reset state to hide paragraph
    const resetState = () => {
        setParagraph(false)
    }
    return (
        <div>
            {/* Button to toggle paragraph visibility */}
            <button onClick={toggleParagraph} style={{ margin: '6px' }}>{Paragraph ? 'Hide' : 'Show'} Paragraph</button>
            {/* Button to reset paragraph visibility to hidden */}
            <button onClick={resetState}>Reset</button>
            {/* Conditionally render the paragraph based on state */}
            {Paragraph && (
                <p style={{ margin: '6px', textAlign: "justify" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
            )}
        </div>
    )
}

export default ConditionalRendering // Export the component
