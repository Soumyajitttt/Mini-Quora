import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from "./index"
import {useDispatch} from "react-redux"
import authService from "../appwrite/auth"
import {useForm} from "react-hook-form"

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState("")

    const login = async(data) => {
        setError("")
        try {
            const session = await authService.login(data)
            if (session) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(authLogin(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className='flex items-center justify-center min-h-screen px-4 py-12 bg-slate-50/50'>
      {/* Increased max-width from md (28rem) to 2xl (42rem) */}
      <div className="w-full max-w-2xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          
          <div className="flex flex-col md:flex-row">
            {/* Branding Section - Visible on wider screens */}
            <div className="md:w-2/5 bg-gradient-to-br from-indigo-50 to-slate-200 p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100">
              <div className="flex justify-center md:justify-start">
                <span className="transform hover:scale-105 transition-transform duration-300">
                  <Logo width="80px" />
                </span>
              </div>
              
              <div className="hidden md:block mt-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Join our community</h3>
                <p className="text-slate-600 leading-relaxed">
                  Continue your journey with us today. Get access to all features and a personalized dashboard.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200 hidden md:block">
                
              </div>
            </div>

            {/* Form Section */}
            <div className="md:w-2/3 p-8 lg:p-12">
              <div className="mb-8">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Welcome back</h2>
                <p className="text-slate-600">
                  New here?{" "}
                  <Link
                    to="/signup"
                    className="font-semibold text-slate-900 hover:underline decoration-2 underline-offset-4 transition-all"
                  >
                    Create an account
                  </Link>
                </p>
              </div>
              
              {error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                  <p className="text-red-600 text-sm font-medium">{error}</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit(login)} className='space-y-6'>
                <div className="grid grid-cols-1 gap-6">
                    <Input
                      label="Email Address"
                      placeholder="name@company.com"
                      type="email"
                      {...register("email", {
                        required: true,
                        validate: {
                          matchPatern: (value) => /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                          "Email address must be a valid address",
                        }
                      })}
                    />
                    
                    <div className="relative">
                        <Input
                          label="Password"
                          type="password"
                          placeholder="••••••••"
                          {...register("password", {
                            required: true,
                          })}
                        />
                        <div className="flex justify-end mt-2">
                            <Link to="#" className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">
                                Forgot password?
                            </Link>
                        </div>
                    </div>
                </div>
                
                <Button
                  type="submit"
                  className="w-full py-4 text-lg font-semibold shadow-lg shadow-slate-200 transition-all hover:shadow-none active:scale-[0.98]"
                >
                  Sign in to Dashboard
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login