import React from 'react';
import { useSelector, useDispatch as dispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPost } from '../actions';

const PostList = () => {
  const {
    all,
  } = useSelector((state) => state.posts);

  const handleClick = (id) => {
    dispatch((fetchPost(id)));
  };

  return (
    <div>
      {all.map((post) => (
        <div key={post.id}>
          <Link to={`/post/${post.id}`}>
            <div onClick={() => handleClick(post.id)} role="button" tabIndex="0" className="post">
              <h3>{post.title}</h3>
            </div>
          </Link>
        </div>

      ))}
    </div>
  );
};

export default PostList;
