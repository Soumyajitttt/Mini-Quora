import React, {useId} from 'react'

const Input = React.forwardRef( function Input({
    label,
    type = "text",
    className = "",
    ...props
}, ref){
    const id = useId()
    return (
        <div className='w-full'>
            {label && (
                <label 
                    className='block text-sm font-semibold text-slate-700 mb-2' 
                    htmlFor={id}
                >
                    {label}
                </label>
            )}
            <input
                type={type}
                className={`w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 border border-slate-300 outline-none focus:bg-white focus:border-slate-900 focus:ring-4 focus:ring-slate-100 transition-all duration-200 placeholder:text-slate-400 ${className}`}
                ref={ref}
                {...props}
                id={id}
            />
        </div>
    )
})

export default Input