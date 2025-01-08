import React from "react";

interface InputType {
    label: string;
    name: string;
    type: string;
    className: string;
    value: string;
    handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder: string;
}

export default function GroupInput({label, name, type, className, placeholder, value, handleInput } : InputType) {
    return <div className={className}>
        <label htmlFor={label} className="auth__form-label">{name}</label>
        <input id={label} type={type} name={label} className="auth__form-input" autoComplete="off" placeholder={placeholder} value={value} onChange={handleInput}/>
    </div>
}