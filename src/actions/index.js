import axios from 'axios';

export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  UPDATE_POST: 'UPDATE_POST',
  CREATE_POST: 'CREATE_POST',
  DELETE_POST: 'DELETE_POST',
};

const ROOT_URL = 'https://gbelaineh-blog.herokuapp.com/api';
const API_KEY = '?key=g_belaineh';

export function fetchPosts() {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts${API_KEY}`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_POSTS, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

export function fetchPost(id) {
  return (dispatch) => {
    axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`)
      .then((response) => {
        dispatch({ type: ActionTypes.FETCH_POST, payload: response.data });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
      .then(() => {
        dispatch({ type: ActionTypes.DELETE_POST });
        axios.get(`${ROOT_URL}/posts${API_KEY}`)
          .then((data) => {
            dispatch({ type: ActionTypes.FETCH_POSTS, payload: data.data });
          });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

export function createPost(field) {
  return (dispatch) => {
    axios.post(`${ROOT_URL}/posts${API_KEY}`, field)
      .then(() => {
        dispatch({ type: ActionTypes.CREATE_POST });
        axios.get(`${ROOT_URL}/posts${API_KEY}`)
          .then((data) => {
            dispatch({ type: ActionTypes.FETCH_POSTS, payload: data.data });
          });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}

export function updatePost(id, field) {
  return (dispatch) => {
    axios.put(`${ROOT_URL}/posts/${id}${API_KEY}`, field)
      .then(() => {
        dispatch({ type: ActionTypes.UPDATE_POST });
        axios.get(`${ROOT_URL}/posts${API_KEY}`)
          .then((data) => {
            dispatch({ type: ActionTypes.FETCH_POSTS, payload: data.data });
          });
      })
      .catch((error) => {
        dispatch({ type: ActionTypes.ERROR_SET, error });
      });
  };
}
