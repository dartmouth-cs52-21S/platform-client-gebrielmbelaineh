import { ActionTypes } from '../actions';

const initialState = {
  all: [],
  current: {},
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.FETCH_POSTS:
      return { ...initialState, all: action.payload };
    case ActionTypes.FETCH_POST:
      return { ...initialState, current: action.payload };
    case ActionTypes.DELETE_POST:
      return { ...initialState };
    case ActionTypes.CREATE_POST:
      return { ...initialState };
    case ActionTypes.UPDATE_POST:
      return { ...initialState };
    default:
      return state;
  }
};

export default postReducer;
