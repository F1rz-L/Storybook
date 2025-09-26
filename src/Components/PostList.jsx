import React from 'react'
import { Link } from 'react-router';

export default function PostList({ posts }) {
  return (
    <div className="p-4">
      <ul>
        {posts.map((post) => (
          <Link to={`/post/${post.id}`} key={post.id} className="mb-2 card p-4 min-h-[20svh] bg-base-100 text-base-content shadow hover:shadow-lg transition-shadow">
            <p className='text-xl font-bold m-4'>{post.title}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}
