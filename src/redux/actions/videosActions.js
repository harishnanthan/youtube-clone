import axios from "axios";
// require('dotenv').config();

export const FETCH_VIDEOS_REQUEST = "FETCH_VIDEOS_REQUEST";
export const FETCH_VIDEOS_SUCCESS = "FETCH_VIDEOS_SUCCESS";
export const FETCH_VIDEOS_FAIL = "FETCH_VIDEOS_FAIL";

const fetchVideoRequest = () => {
  return {
    type: FETCH_VIDEOS_REQUEST
  }
}

const fetchVideoSuccess = (payload) => {
  return {
    type: FETCH_VIDEOS_SUCCESS,
    payload,
  };
};

const fetchVideosFail = (payload) => {
  return {
    type: FETCH_VIDEOS_FAIL,
    payload,
  };
};

export const fetchVideos = (query) => {
  console.log("FETCH VIDEOS")
  // console.log(query)
  if (query === undefined)
    query = "js"
  return (dispatch) => {
    dispatch(fetchVideoRequest())
    axios
      .get(
      // `https://jsonplaceholder.typicode.com/users`
      // `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${query}&type=video&key=AIzaSyC9Nl1gAhqHuNHiD8IYBsKOjeVsgECvJEg`
    )
      .then((res) => {
        console.log("REDUCER");
        // const videos = res.data
        const videos = res.data.items;
        dispatch(fetchVideoSuccess(videos));
      })
      .catch((err) => {
        const errMsg = err.message;
        dispatch(fetchVideosFail(errMsg));
      });
  };
};
