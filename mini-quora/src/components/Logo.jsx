import React from 'react'

function Logo({width = '100px'}) {
  return (
    <div className="flex items-center gap-2">
      {/* Grid Box */}
      <div className="w-8 h-8 border-2 border-red-600 grid grid-cols-2 gap-0.5 p-1">
        <div className="bg-red-600"></div>
        <div className="bg-red-400"></div>
        <div className="bg-red-400"></div>
        <div className="bg-red-600"></div>
      </div>
      
      {/* Text */}
      <span className="text-xl font-bold text-gray-800">
        Mini<span className="text-red-600">Quora</span>
      </span>
    </div>
  )
}

export default Logo