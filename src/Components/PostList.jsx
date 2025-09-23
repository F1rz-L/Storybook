import React from 'react'
import { Link } from 'react-router';

export default function PostList({ posts }) {
  return (
    <div className="p-4">
      <h2>Available Posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="mb-2 ">
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
