import React ,{useState} from 'react'

const DynamicStyling = () => {
    // State to manage box properties (color and size)
    const [boxes, setBoxes] = useState([
        { id: 1, color: 'black', size: '100px' },
        { id: 2, color: 'black', size: '100px' },
        { id: 3, color: 'black', size: '100px' }
    ])
    // Handle click to toggle box color
    const handleBoxClick = (id) => {
        const updatedBoxes = boxes.map(box => {
            if (box.id === id) {
                return { id: box.id, color: box.color === 'black' ? 'red' : 'black', size: box.size }
            }
            return box
        })
        setBoxes(updatedBoxes)
    }
    // Handle double click to toggle box size
    const handleBoxDoubleClick = (id) => {
        const updatedBoxes = boxes.map(box => {
            if (box.id === id) {
                return { id: box.id, color: box.color, size: box.size === '100px' ? '150px' : '100px' }
            }
            return box
        })
        setBoxes(updatedBoxes)
    }
    // Handle right click to reset box style
    const handleBoxRightClick = (id, event) => {
        event.preventDefault()// Prevent context menu
        const updatedBoxes = boxes.map(box => {
            if (box.id === id) {
                return { id: box.id, color: 'black', size: '100px' }
            }
            return box
        })
        setBoxes(updatedBoxes)
    }
    return (
        <div style={{ margin: '6px', justifyContent: 'space-between' }}>
            {/* Render each box with event handlers for click, double-click, and right-click */}
            {boxes.map(box => (
                <div
                    key={box.id} // Unique key for each box
                    onClick={() => handleBoxClick(box.id)} // Handle single click to toggle color
                    onDoubleClick={() => handleBoxDoubleClick(box.id)} // Handle double click to toggle size
                    onContextMenu={(e) => handleBoxRightClick(box.id, e)} // Handle right click to reset style
                    style={{
                        cursor: 'pointer', // Change cursor to pointer
                        backgroundColor: box.color, // Set box color
                        width: box.size, // Set box width
                        height: box.size, // Set box height
                        marginBottom: '8px', // Space between boxes
                        transition: 'all 0.3s ease', // Smooth transition for style changes
                        userSelect: 'none' // Prevent text selection
                    }}>
                </div>
            ))}
        </div>
    );
    
}

export default DynamicStyling // Export the component
