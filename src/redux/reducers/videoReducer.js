import {
  FETCH_VIDEOS_REQUEST,
  FETCH_VIDEOS_SUCCESS,
  FETCH_VIDEOS_FAIL,
} from "../actions/videosActions";

//initial state passing to the reducer
const initialState = {
  loading: false,
  videos: [],
  error: "",
};

export const videosReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_VIDEOS_REQUEST:
      return {
          ...state,
          loading: true,
      }
    case FETCH_VIDEOS_SUCCESS:
      return {
          loading: false,
          videos: action.payload,
          error: "",
      };
    case FETCH_VIDEOS_FAIL:
      return {
          loading: false,
          videos: [],
          error: action.payload,
      };
    default:
      return  state ;
  }
};
