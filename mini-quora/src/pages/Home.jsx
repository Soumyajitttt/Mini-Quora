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
            <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100">
                <Container>
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
                            <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                            </svg>
                        </div>
                        <h1 className="text-4xl font-bold text-slate-900 mb-4">
                            Welcome to Your Blog
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto">
                            Sign in to access your posts and start sharing your stories with the world.
                        </p>
                        <div className="flex items-center justify-center gap-4">
                            <a href="/login" className="px-8 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors duration-200 shadow-lg hover:shadow-xl">
                                Sign In
                            </a>
                            <a href="/signup" className="px-8 py-3 bg-white text-slate-900 rounded-xl font-semibold hover:bg-slate-50 transition-colors duration-200 border-2 border-slate-900">
                                Create Account
                            </a>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }

    if (posts.length === 0) {
        return (
            <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-white to-slate-100">
                <Container>
                    <div className="text-center">
                        <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-100 rounded-full mb-6">
                            <svg className="w-10 h-10 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                            </svg>
                        </div>
                        <h1 className="text-4xl font-bold text-slate-900 mb-4">
                            No Posts Yet
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 max-w-md mx-auto">
                            Start your blogging journey by creating your first post. Share your thoughts, ideas, and stories.
                        </p>
                        <a href="/add-post" className="inline-block px-8 py-3 bg-slate-900 text-white rounded-xl font-semibold hover:bg-slate-800 transition-colors duration-200 shadow-lg hover:shadow-xl">
                            Create Your First Post
                        </a>
                        <p className="mt-6 text-sm text-slate-500">
                            Or refresh the page to load existing posts
                        </p>
                    </div>
                </Container>
            </div>
        )
    }

    return (
        <div className='min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12'>
            <Container>
                <div className="mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Your Posts</h1>
                    <p className="text-xl text-slate-600">Manage and view all your published content</p>
                </div>
                
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                    {posts.map((post) => (
                        <PostCard key={post.$id} {...post} />
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home