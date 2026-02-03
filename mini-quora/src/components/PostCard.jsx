import React from 'react'
import appwriteService from "../appwrite/config"
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {  // Changed 'image' to 'featuredImage'
    
  return (
    <Link to={`/post/${$id}`}>
        <div className='w-full  bg-gray-600 rounded-xl p-4 border border-t-2 border-t-black'>
            <div className='w-full justify-center mb-4 border border-t-2 border-t-black rounded-xl'>
                <img 
                  src={featuredImage ? appwriteService.getFilePreviewURL(featuredImage) : "https://via.placeholder.com/300"} 
                  alt={title}
                  className='rounded-xl' 
                  onError={(e) => {
                    console.error("Image failed to load");
                    e.target.src = "https://via.placeholder.com/300";
                  }}
                />
            </div>
            <h2 className='text-xl font-bold'>
                {title}
            </h2>
        </div>
    </Link>
  )
}

export default PostCard