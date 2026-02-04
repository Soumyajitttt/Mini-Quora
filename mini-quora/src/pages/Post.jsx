import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            appwriteService.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        appwriteService.deletePost(post.$id).then((status) => {
            if (status) {
                appwriteService.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-12">
            <Container>
                <article className="max-w-4xl mx-auto">
                    {/* Featured Image Section */}
                    <div className="relative w-full mb-8 rounded-3xl overflow-hidden shadow-2xl group">
                        <div className="aspect-[21/9] bg-gradient-to-br from-slate-200 to-slate-300">
                            <img
                                src={appwriteService.getFilePreviewURL(post.featuredImage)}
                                alt={post.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {isAuthor && (
                            <div className="absolute top-6 right-6 flex gap-3">
                                <Link to={`/edit-post/${post.$id}`}>
                                    <Button bgColor="bg-emerald-600 hover:bg-emerald-700" className="shadow-lg backdrop-blur-sm bg-opacity-95">
                                        <span className="flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                            </svg>
                                            Edit
                                        </span>
                                    </Button>
                                </Link>
                                <Button bgColor="bg-red-600 hover:bg-red-700" onClick={deletePost} className="shadow-lg backdrop-blur-sm bg-opacity-95">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                        </svg>
                                        Delete
                                    </span>
                                </Button>
                            </div>
                        )}
                    </div>

                    {/* Title Section */}
                    <div className="mb-8">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
                            {post.title}
                        </h1>
                        
                        <div className="flex items-center gap-4 mt-6 text-slate-600">
                            <div className="flex items-center gap-2">
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                </svg>
                                <span className="text-sm font-medium">
                                    {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 border border-slate-200">
                        <div className="prose prose-lg prose-slate max-w-none
                            prose-headings:font-bold prose-headings:text-slate-900
                            prose-p:text-slate-700 prose-p:leading-relaxed
                            prose-a:text-slate-900 prose-a:font-semibold hover:prose-a:text-slate-700
                            prose-strong:text-slate-900
                            prose-code:text-slate-900 prose-code:bg-slate-100 prose-code:px-1 prose-code:py-0.5 prose-code:rounded
                            prose-pre:bg-slate-900 prose-pre:text-slate-100
                            prose-img:rounded-2xl prose-img:shadow-lg
                            prose-blockquote:border-l-4 prose-blockquote:border-slate-900 prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:italic
                        ">
                            {parse(post.content)}
                        </div>
                    </div>

                    {/* Back Button */}
                    <div className="mt-12 text-center">
                        <Link to="/" className="inline-flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                            </svg>
                            Back to Posts
                        </Link>
                    </div>
                </article>
            </Container>
        </div>
    ) : null;
}