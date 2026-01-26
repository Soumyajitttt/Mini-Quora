 import { useState } from 'react'
import './App.css'

function App() {
  console.log(import.meta.env.VITE_APPWRITE_URL);
  

  return (
    <><div className="flex justify-center items-center h-screen">
        <h1 className="text-3xl font-bold text-black ">
          Hello world!
        </h1>
      </div>
    </>
  )
}

export default App
 