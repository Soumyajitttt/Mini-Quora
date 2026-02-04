import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                console.log("Fetched posts:", posts.documents);
                setPosts(posts.documents)
            }
        })
    }, []) 
    
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12'>
        <Container>
            <div className="mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">All Posts</h1>
                <p className="text-xl text-slate-600">Explore all published content from our community</p>
            </div>
            
            {posts.length === 0 ? (
                <div className="text-center py-20">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
                        <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                        </svg>
                    </div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">No posts available</h2>
                    <p className="text-slate-600">Be the first to create a post!</p>
                </div>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {posts.map((post) => {
                        console.log("Rendering post:", post); 
                        return (
                            <PostCard key={post.$id} {...post} />
                        )
                    })}
                </div>
            )}
        </Container>
    </div>
  )
}

export default AllPosts