import React, {useId} from 'react'

function Select({
    options,
    label,
    className,
    ...props
}, ref) {
    const id = useId()
  return (
    <div className='w-full'>
        {label && (
            <label 
                htmlFor={id} 
                className='block text-sm font-semibold text-slate-700 mb-2'
            >
                {label}
            </label>
        )}
        <select
            {...props}
            id={id}
            ref={ref}
            className={`w-full px-4 py-3 rounded-xl bg-slate-50 text-slate-900 border border-slate-300 outline-none focus:bg-white focus:border-slate-900 focus:ring-4 focus:ring-slate-100 transition-all duration-200 cursor-pointer ${className}`}
        >
            {options?.map((option) => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
  )
}

export default React.forwardRef(Select)