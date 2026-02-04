import React from 'react'
import { Link } from 'react-router-dom'
import {Logo} from '../index.js'

function Footer() {
  return (
    <footer className="relative mt-auto bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wMiI+PHBhdGggZD0iTTM2IDE2YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00em0wIDI0YzAtMi4yMSAxLjc5LTQgNC00czQgMS43OSA0IDQtMS43OSA0LTQgNC00LTEuNzktNC00ek0xMiAxNmMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHptMCAyNGMwLTIuMjEgMS43OS00IDQtNHM0IDEuNzkgNCA0LTEuNzkgNC00IDQtNC0xLjc5LTQtNHoiLz48L2c+PC9nPjwvc3ZnPg==')] opacity-40"></div>
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex flex-col space-y-6">
              <div className="inline-flex items-center">
                <Logo width="100px" variant="light" />
              </div>
              <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                A modern platform for sharing thoughts, stories, and ideas with the world. Create, publish, and connect with readers everywhere.
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 rounded-full bg-slate-700/50 hover:bg-rose-600 transition-colors duration-300 flex items-center justify-center cursor-pointer">
                  <span className="text-xs">𝕏</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-700/50 hover:bg-rose-600 transition-colors duration-300 flex items-center justify-center cursor-pointer">
                  <span className="text-xs">in</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-slate-700/50 hover:bg-rose-600 transition-colors duration-300 flex items-center justify-center cursor-pointer">
                  <span className="text-xs">gh</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-6">
              Company
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-slate-400 hover:text-rose-600 transition-colors duration-200 text-sm"
                  to="/"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 hover:text-rose-600 transition-colors duration-200 text-sm"
                  to="/"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 hover:text-rose-600 transition-colors duration-200 text-sm"
                  to="/"
                >
                  Affiliate Program
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 hover:text-rose-600 transition-colors duration-200 text-sm"
                  to="/"
                >
                  Press Kit
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-6">
              Support
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-slate-400 hover:text-rose-600 transition-colors duration-200 text-sm"
                  to="/"
                >
                  Account
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 hover:text-rose-600 transition-colors duration-200 text-sm"
                  to="/"
                >
                  Help
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 hover:text-rose-600 transition-colors duration-200 text-sm"
                  to="/"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 hover:text-rose-600 transition-colors duration-200 text-sm"
                  to="/"
                >
                  Customer Support
                </Link>
              </li>
            </ul>
          </div>
          
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-6">
              Legal
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  className="text-slate-400 hover:text-rose-600 transition-colors duration-200 text-sm"
                  to="/"
                >
                  Terms &amp; Conditions
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 hover:text-rose-600 transition-colors duration-200 text-sm"
                  to="/"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  className="text-slate-400 hover:text-rose-600 transition-colors duration-200 text-sm"
                  to="/"
                >
                  Licensing
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-700">
          <p className="text-sm text-slate-400 text-center">
            &copy; {new Date().getFullYear()} DevUI. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer