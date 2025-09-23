import React, { useEffect, useState } from 'react'
import PostList from './Components/PostList';
import Header from './Components/Header';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Home() {
    const [posts, setPosts] = useState([]);
    const [showMorePosts, setShowMorePosts] = useState(false);
    const observerRef = React.useRef();

    gsap.registerPlugin(ScrollTrigger);
    const firstSection = document.getElementById('section1');
    ScrollTrigger.create({
        trigger: firstSection,
        pin: true, 
        markers: true,
        start: 'top top',
        end: 'bottom top', // The snapping effect will last until the bottom of the section leaves the viewport
        snap: {
            snapTo: 1, // Snap to the end of the section's scroll range
            duration: 0.3,
            ease: 'power1.inOut',
        },
    });

    useEffect(() => {
        // Fetch or initialize your posts data here
        const initialPosts = [
            { id: 1, title: 'Post 1' },
            { id: 2, title: 'Post 2' },
            { id: 3, title: 'Post 3' },
        ];
        setPosts(initialPosts);
    }, []);

    const handleScroll = () => {
        if (window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 100) {
            setShowMorePosts(true);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const addMorePosts = () => {
        if (showMorePosts) {
            // Add more posts here, for example, fetching from an API
            const newPosts = [
                { id: posts.length + 1, title: 'New Post 1' },
                { id: posts.length + 2, title: 'New Post 2' },
            ];
            setPosts((prevPosts) => [...prevPosts, ...newPosts]);
            setShowMorePosts(false);
        }
    };

    return (
        <div className="h-screen w-screen" onScroll={handleScroll}>
            <Header id="section1" />
            <div className='container card mx-auto mt-4 p-4'>
                <PostList posts={posts} />
                {showMorePosts && (
                    <div ref={(node) => (observerRef.current = node)}>
                        {/* Add more posts here as the user scrolls */}
                        <ul>
                            {posts.slice(-5).map((post) => (
                                <li key={post.id} className="mb-2">
                                    <a href={`/post/${post.id}`}>{post.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                <button className='btn btn-primary' onClick={addMorePosts} disabled={!showMorePosts}>
                    Show More Posts
                </button>
            </div>
        </div>
    );
}
