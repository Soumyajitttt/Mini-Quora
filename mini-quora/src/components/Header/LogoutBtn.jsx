import React from 'react'
import {useDispatch} from 'react-redux'
import authService from '../../appwrite/auth'
import {logout} from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch()
    const logoutHandler = () => {
        authService.logout()
            .then(() => {
                dispatch(logout())  
            })
            .catch((error) => {  
                console.error("Error during logout process:", error);
            });
    }
  return (
    <button
      className='px-5 py-2.5 text-sm font-medium text-slate-700 hover:text-white hover:bg-rose-600 rounded-lg transition-all duration-200 border border-slate-300 hover:border-rose-600 flex items-center gap-2 group'
      onClick={logoutHandler}
    >
      <svg 
        className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" 
        fill="none" 
        stroke="currentColor" 
        viewBox="0 0 24 24"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={2} 
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" 
        />
      </svg>
      Logout
    </button>
  )
}

export default LogoutBtn