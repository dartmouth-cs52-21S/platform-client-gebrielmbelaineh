import React, { useState } from 'react';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { createPost, fetchPosts } from '../actions';

const Createpost = () => {
  const [postComponent, setPostComponent] = useState(
    {
      title: '',
      tags: '',
      coverUrl: '',
      content: '',
    },
  );

  function handleChange(event) {
    const { value, name } = event.target;

    setPostComponent((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    event.preventDefault();
  }
  const dispatch = useDispatch();
  const addPost = () => {
    dispatch(createPost(postComponent));
    dispatch(fetchPosts());
  };

  return (
    <div>
      <form className="create-post">

        <input
          className="title"
          name="title"
          placeholder="Title"
          onChange={handleChange}
          value={postComponent.title}
        />

        <textarea
          className="content"
          name="content"
          placeholder="Take a note..."
          rows="3"
          onChange={handleChange}
          value={postComponent.content}
        />

        <input
          className="url"
          name="coverUrl"
          placeholder="Image URL"
          onChange={handleChange}
          value={postComponent.coverUrl}
        />

        <input
          className="tags"
          name="tags"
          placeholder="Tags"
          onChange={handleChange}
          value={postComponent.tags}
        />

        <Link to="/"><button type="button" className="addbutton" onClick={addPost}> <AddIcon /></button></Link>
      </form>

    </div>
  );
};

export default Createpost;
