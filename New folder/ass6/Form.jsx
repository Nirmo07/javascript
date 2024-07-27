import React, { useState } from 'react';

const Form = () => {
    // State variables for form inputs
    const [name, setName] = useState('') // Name input
    const [message, setMessage] = useState('') // Message input
    const [terms, setTerms] = useState(false) // Terms checkbox
    // Handle change for name input
    const handleNameChange = (event) => {
        setName(event.target.value)
    }
    // Handle change for message input
    const handleMessageChange = (event) => {
        setMessage(event.target.value)
    }
    // Handle change for terms checkbox
    const handleTermsChange = (event) => {
        setTerms(event.target.checked)
    }
    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault() // Prevent page reload
        const formValues = { name, message, terms } // Gather form values
        console.log('Form Values:', formValues) // Log form values
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                {/* Input field for the name */}
                <div>
                    <label>
                        Name:
                        <input type="text" name="name" value={name} onChange={handleNameChange} style={{ width: '20em', padding: '10px', borderRadius: '4px', margin: 6 }}/>
                    </label>
                </div>
                {/* Textarea for the message */}
                <div>
                    <label style={{ display: 'block', marginBottom: '5px', marginTop: '6px' }}>
                        Message:
                    </label>
                    <textarea name="message" value={message} onChange={handleMessageChange} style={{ width: '30em', padding: '10px', borderRadius: '4px', height: '70px', resize: 'vertical', margin: '3px' }} ></textarea>
                </div>
                {/* Checkbox for accepting terms and conditions */}
                <div>
                    <label>
                        Accept Terms and Conditions:
                        <input type="checkbox" name="terms" checked={terms} onChange={handleTermsChange} style={{ marginLeft: '10px', marginBottom: '1px' }}/>
                    </label>
                </div>
                {/* Submit button for the form */}
                <button type="submit" style={{ padding: '10px 15px', borderRadius: '4px', cursor: 'pointer', margin: '10px', marginTop: '9px' }}>
                Submit
                </button>
            </form>
        </div>
    )
}

export default Form // Export the Form component
