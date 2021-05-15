import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import DeleteIcon from '@material-ui/icons/Delete';
import { deletePost, fetchPosts, updatePost } from '../actions';

const PostDetail = ({ id }) => {
  const { current } = useSelector((state) => state.posts);
  const [postDetail, setPostDetail] = useState({
    title: '',
    tags: '',
    coverUrl: '',
    content: '',
  });

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setPostDetail((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    event.preventDefault();
  };

  const deleteHandler = () => {
    dispatch(deletePost(current._id));
    dispatch(fetchPosts());
  };

  const editHandler = () => {
    dispatch(updatePost(current._id, postDetail));
    dispatch(fetchPosts());
  };

  return (

    <div>
      <form className="create-post">
        <input
          className="title"
          name="title"
          value={postDetail.title}
          onChange={handleChange}
          placeholder={current.title}
        />
        <textarea
          className="content"
          name="content"
          value={postDetail.content}
          onChange={handleChange}
          placeholder={current.content}
          rows="3"
        />
        <input
          className="url"
          name="coverUrl"
          value={postDetail.coverUrl}
          onChange={handleChange}
          placeholder={current.coverUrl}
        />
        <input
          className="tags"
          name="tags"
          value={postDetail.tags}
          onChange={handleChange}
          placeholder={current.tags}
        />
        <Link to="/">
          <button type="button" className="Donebutton" onClick={editHandler}>
            <DoneAllIcon />
          </button>
        </Link>
        <Link to="/">
          <button type="button"
            className="Deletebutton"
            onClick={deleteHandler}
          >
            <DeleteIcon />
          </button>
        </Link>

      </form>
    </div>
  );
};

export default PostDetail;
