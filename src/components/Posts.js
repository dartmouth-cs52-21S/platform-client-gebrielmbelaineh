import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import Post from './Post';
import { fetchPosts } from '../actions';

const posts = () => {
  const {
    all,
  } = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div className="posts">
      {all.map((post) => (
        <div key={post._id}>
          <Link to={`/post/${post._id}`}> <Post
            key={post._id}
            title={post.title}
            content={post.content}
            tags={post.tags}
            coverUrl={post.coverUrl}
            id={post._id}
          />
          </Link>
        </div>

      ))}

    </div>
  );
};

export default posts;
