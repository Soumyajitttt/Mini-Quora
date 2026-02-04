import React, {useState} from 'react'
import authService from '../appwrite/auth'
import {Link ,useNavigate} from 'react-router-dom'
import {login} from '../store/authSlice'
import {Button, Input, Logo} from './index.js'
import {useDispatch} from 'react-redux'
import {useForm} from 'react-hook-form'

function Signup() {
    const navigate = useNavigate()
    const [error, setError] = useState("")
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()

    const create = async(data) => {
        setError("")
        try {
            const userData = await authService.createAccount(data)
            if (userData) {
                const userData = await authService.getCurrentUser()
                if(userData) dispatch(login(userData));
                navigate("/")
            }
        } catch (error) {
            setError(error.message)
        }
    }

  return (
    <div className="flex items-center justify-center min-h-screen px-4 py-12 bg-slate-50/50">
      {/* Wider container: max-w-4xl for a more spacious feel */}
      <div className="w-full max-w-4xl">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          
          <div className="flex flex-col md:flex-row">
            {/* Left Column: Branding/Welcome (Hidden on small mobile if preferred, or stacked) */}
            <div className="md:w-2/5 bg-gradient-to-br from-indigo-50 to-slate-200 p-10 flex flex-col justify-between border-b md:border-b-0 md:border-r border-slate-100">
              <div className="flex justify-center md:justify-start">
                <span className="transform hover:scale-105 transition-transform duration-300">
                  <Logo width="80px" />
                </span>
              </div>
              
              <div className="hidden md:block mt-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Join our community</h3>
                <p className="text-slate-600 leading-relaxed">
                  Start your journey with us today. Get access to all features and a personalized dashboard.
                </p>
              </div>

              <div className="mt-8 pt-8 border-t border-slate-200 hidden md:block">
                
              </div>
            </div>

            {/* Right Column: The Form */}
            <div className="md:w-3/5 p-8 lg:p-12">
              <div className="mb-10">
                <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Create account</h2>
                <p className="text-slate-600">
                  Already have an account?{" "}
                  <Link
                    to="/login"
                    className="font-semibold text-slate-900 hover:underline decoration-2 underline-offset-4 transition-all"
                  >
                    Sign in
                  </Link>
                </p>
              </div>
              
              {error && (
                <div className="mb-6 p-4 bg-red-50 border-l-4 border-red-500 rounded-r-xl">
                  <p className="text-red-600 text-sm font-medium">{error}</p>
                </div>
              )}

              <form onSubmit={handleSubmit(create)} className='space-y-6'>
                <div className="grid grid-cols-1 gap-6">
                  <Input
                    label="Full Name"
                    placeholder="John Doe"
                    {...register("name", {
                      required: true,
                    })}
                  />
                  
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
                  
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Minimum 8 characters"
                    {...register("password", {
                      required: true,
                    })}
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full py-4 text-lg font-semibold shadow-lg shadow-slate-200 transition-all hover:shadow-none active:scale-[0.98]"
                >
                  Create Account
                </Button>
              </form>
              
              <p className="mt-8 text-xs text-center text-slate-400">
                By signing up, you agree to our <span className="underline cursor-pointer">Terms of Service</span> and <span className="underline cursor-pointer">Privacy Policy</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup