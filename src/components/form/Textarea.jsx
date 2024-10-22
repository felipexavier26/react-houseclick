import React from 'react'

function Textarea({ type, name, placeholder, handleOnchange, value, text }) {
    return (
        <>
            <div className="mb-3">
                <label htmlFor={name} className="form-label">{text}</label>
                <textarea
                    type={type}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleOnchange}
                    value={value}
                    required
                    className="form-control"
                />
            </div>
        </>
    )
}

export default Textarea