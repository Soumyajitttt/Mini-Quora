import React, { useState, useRef, useEffect, useId } from 'react';

function CustomSelect({ 
    options, 
    label, 
    value, 
    onChange, 
    placeholder = "Select...",
    className = ""
}) {
    const [isOpen, setIsOpen] = useState(false);
    const divRef = useRef(null);
    const id = useId();

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (divRef.current && !divRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleSelect = (option) => {
        onChange(option); // Updates React Hook Form
        setIsOpen(false);
    };

    return (
        <div className={`w-full relative ${className}`} ref={divRef}>
            {label && (
                <label 
                    htmlFor={id} 
                    className='block text-sm font-semibold text-slate-700 mb-2'
                >
                    {label}
                </label>
            )}

            {/* THE TRIGGER (Mimics your original input styles) */}
            <div 
                id={id}
                onClick={() => setIsOpen(!isOpen)}
                className={`
                    w-full px-4 py-3 rounded-xl 
                    border outline-none 
                    transition-all duration-200 cursor-pointer
                    flex justify-between items-center
                    
                    ${isOpen 
                        ? 'bg-white border-slate-900 ring-4 ring-slate-100' // Focus State
                        : 'bg-slate-50 border-slate-300 hover:bg-slate-100' // Default State
                    }
                `}
            >
                <span className={`font-medium ${value ? "text-slate-900" : "text-slate-500"}`}>
                    {value ? value : placeholder}
                </span>

                {/* Arrow Icon */}
                <svg 
                    className={`w-5 h-5 text-slate-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </div>

            {/* THE DROPDOWN MENU (Custom styled options) */}
            {isOpen && (
                <div className="absolute z-50 w-full mt-2 bg-white rounded-xl border border-slate-200 shadow-xl overflow-hidden animate-in fade-in zoom-in-95 duration-100">
                    <ul className="max-h-60 overflow-auto">
                        {options?.map((option) => (
                            <li
                                key={option}
                                onClick={() => handleSelect(option)}
                                className={`
                                    px-4 py-3 cursor-pointer transition-colors duration-150 text-slate-700
                                    ${value === option 
                                        ? 'bg-slate-100 font-bold text-slate-900' // Selected Item
                                        : 'hover:bg-slate-50 hover:text-slate-900' // Hover Item
                                    }
                                `}
                            >
                                {option}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
        
    );
}

export default CustomSelect;