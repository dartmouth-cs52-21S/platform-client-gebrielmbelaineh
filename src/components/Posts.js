import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Post from './Post';
import { fetchPosts } from '../actions';

const posts = () => {
  const {
    all,
  } = useSelector((state) => state.posts);
  const dispatch = useDispatch(fetchPosts());

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      {all.map((post) => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}> <Post
            key={post.id}
            title={post.title}
            content={post.content}
            tags={post.tags}
            coverUrl={post.coverUrl}
            id={post.id}
          />
          </Link>
        </div>

      ))}

    </div>
  );
};

export default posts;
