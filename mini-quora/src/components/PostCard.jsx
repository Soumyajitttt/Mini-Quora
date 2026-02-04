import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    
  return (
    <Link to={`/post/${$id}`} className="group block h-full">
      <article className='h-full bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 border border-slate-200 hover:border-slate-300 transform hover:-translate-y-1'>
        <div className='relative overflow-hidden aspect-video bg-gradient-to-br from-slate-100 to-slate-200'>
          <img 
            src={featuredImage ? appwriteService.getFilePreviewURL(featuredImage) : "https://via.placeholder.com/300"} 
            alt={title}
            className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out' 
            onError={(e) => {
              console.error("Image failed to load");
              e.target.src = "https://via.placeholder.com/300";
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        
        <div className='p-6'>
          <h2 className='text-xl font-bold text-slate-900 line-clamp-2 group-hover:text-slate-700 transition-colors duration-200'>
            {title}
          </h2>
          
          <div className="mt-4 flex items-center justify-between">
            <span className="text-sm text-slate-500 font-medium">Read more</span>
            <svg 
              className="w-5 h-5 text-slate-400 group-hover:text-slate-900 group-hover:translate-x-1 transition-all duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  )
}

export default PostCard