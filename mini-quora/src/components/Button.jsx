import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-slate-900",
    textColor = "text-white",
    className = "",
    ...props
}) {
    return (
        <button 
            className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-[1.02] active:scale-[0.98] shadow-md hover:shadow-xl ${bgColor} ${textColor} ${className} disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100`} 
            {...props}
        >
            {children}
        </button>
    );
}