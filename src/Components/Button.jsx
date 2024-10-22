import React from "react";

const Button = ({ label, onClick, type = "button", className }) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`w-36 py-1 rounded ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;
