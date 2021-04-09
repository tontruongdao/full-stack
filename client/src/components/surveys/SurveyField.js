import React from 'react'

export default ({ input, label, meta: {error, touched } }) => {

    // Will render the error message, as it is a string, if touched is true.
    return (
        <div>
            <label>{label}</label>
            <input {...input} style={{ marginBottom: '5px'}}/>
            <div className="red-text" style={{ marginBottom: '20px'}}></div>
            {touched && error} 
        </div>
    )
}