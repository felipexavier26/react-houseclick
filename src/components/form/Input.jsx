import React from 'react'
import './input.css'

function Input({ type, name, placeholder, handleOnchange, value, text }) {
    return (
        <>
            <div className="mb-3">
                <label htmlFor={name} className="form-label">{text}</label>
                <input
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

export default Input