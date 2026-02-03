import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([])
    const userData = useSelector((state) => state.auth.userData);
    const authStatus = useSelector((state) => state.auth.status);

    useEffect(() => {
        console.log("=== HOME DEBUG ===");
        console.log("Auth status:", authStatus);
        console.log("User data:", userData);
        console.log("User ID:", userData?.$id);

        if (authStatus && userData) {
            appwriteService.getPosts([]).then((posts) => {
                if (posts) {
                    console.log("All posts fetched:", posts.documents);
                    console.log("Total posts:", posts.documents.length);
                    
  
                    posts.documents.forEach(post => {
                        console.log(`Post "${post.title}" userId:`, post.userId);
                    });
          
                    const userPosts = posts.documents.filter(
                        post => {
                            const match = post.userId === userData.$id;
                            console.log(`Post "${post.title}": ${post.userId} === ${userData.$id}? ${match}`);
                            return match;
                        }
                    );
                    console.log("Filtered user posts:", userPosts);
                    console.log("User posts count:", userPosts.length);
                    setPosts(userPosts);
                }
            }).catch(error => {
                console.error("Error fetching posts:", error);
            })
        } else {
            console.log("Not logged in, clearing posts");
            setPosts([]);
        }
    }, [authStatus, userData])
  
    console.log("Current posts state:", posts);

    if (!authStatus) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                No posts yet. Create your first post!
                            </h1>
                            <h3 className=" font-bold text-gray-700 hover:text-gray-500">refresh to load posts</h3>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home