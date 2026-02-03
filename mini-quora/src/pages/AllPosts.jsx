import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config";

function AllPosts() {
    const [posts, setPosts] = useState([])
    
    useEffect(() => {
        appwriteService.getPosts([]).then((posts) => {
            if (posts) {
                console.log("Fetched posts:", posts.documents); // Debug log
                setPosts(posts.documents)
            }
        })
    }, []) // Move getPosts INSIDE useEffect
    
  return (
    <div className='w-full py-8'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map((post) => {
                    console.log("Rendering post:", post); // Debug: check the post object
                    return (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    )
                })}
            </div>
        </Container>
    </div>
  )
}

export default AllPosts