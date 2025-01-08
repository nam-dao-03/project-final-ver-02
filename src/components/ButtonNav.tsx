import {NavLink} from "react-router-dom";
import React from "react";


interface ButtonProps {
    path: string;
    content: string;
    className?: string;
    children?: React.ReactNode;
}

export default function ButtonNav({path, content, className = "", children}: ButtonProps) {
    return <NavLink to={path} className={`button-nav ${className}`}>{children}<span>{content}</span></NavLink>
}