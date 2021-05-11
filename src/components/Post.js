import React from 'react';
import { useDispatch } from 'react-redux';
import { fetchPost } from '../actions';

const Post = ({
  title, tags, content, coverUrl, id,
}) => {
  const dispatch = useDispatch();

  const onClickHandler = () => {
    dispatch((fetchPost(id)));
  };
  return (

    <div className="post" onClick={onClickHandler} role="button" tabIndex="0">
      <h1> {title}</h1>
      <p> {tags}</p>
      <p>{content}</p>
      <img src={coverUrl} alt={title} />
    </div>

  );
};

export default Post;
