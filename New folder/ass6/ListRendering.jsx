import React, { useState } from 'react'

const ListRendering = () => {
    // State for items, filter text, and new item input
    const [items, setItems] = useState(['Apple', 'Mango', 'Gauva'])// Initial list of items
    const [filterText, setFilterText] = useState('')// Filter input
    const [newItem, setNewItem] = useState('')// New item input

    // Handle change in filter input
    const handleFilterChange = (event) => {
        setFilterText(event.target.value)
    }

    // Filter items based on filter text
    const filteredItems = items.filter(item => item.toLowerCase().includes(filterText.toLowerCase()))
    
    // Handle change in new item input
    const handleNewItemChange = (event) => {
        setNewItem(event.target.value)
    }
    
    // Add new item to the list
    const addItem = () => {
        if (newItem.trim() !== '') {
            const updatedItems = items.concat(newItem.trim())// Append new item
            setItems(updatedItems)
            setNewItem('')// Clear input after adding
        }
    }
    return (
    <div>
        {/* Input for filtering items */}
        <input type="text" placeholder="Filter items" value={filterText} onChange={handleFilterChange} style={{padding: '10px',margin: '10px',borderRadius: '4px',width: '200px'}}/>
            {/* Input for filtering items */}
            <ul style={{width: '200px',marginTop:'2px',marginBottom:'2px'}}>
                {filteredItems.map((item, index) => (
                    <li key={index} style={{padding: '3px'}}>{item}</li>
                ))}
            </ul>
            {/* Input for adding a new item */}
            <input type="text" placeholder="Add new item" value={newItem} onChange={handleNewItemChange} style={{padding: '10px',margin: '10px',borderRadius: '4px',width: '200px'}} />
            {/* Button to add the new item */}
            <button onClick={addItem} style={{padding: '10px 15px',borderRadius: '4px',cursor: 'pointer',margin:'10px',marginTop:'9px'}} >Add Item</button>
    </div>
    )
}

export default ListRendering // Export the ListRendering component
