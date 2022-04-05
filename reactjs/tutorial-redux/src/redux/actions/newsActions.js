const BASE_API = "https://jsonplaceholder.typicode.com";

// GET ALL POSTS
export const getAllNews = () => async (dispatch) => {
  let res = await fetch(`${BASE_API}/posts`);
  let data = await res.json();
  try {
    dispatch(getAllNewsSuccess(data));
  } catch (error) {
    dispatch(getAllNewsFail(data));
  }
};

export const getAllNewsSuccess = (data) => {
  return {
    type: "GET_ALL_NEWS_SUCCESS",
    payload: data,
  };
};

export const getAllNewsFail = (message) => {
  return {
    type: "GET_ALL_NEWS_FAIL",
    payload: message,
  };
};

// GET SINGLE POST
export const getSingleNews = (id) => async (dispatch) => {
  let res = await fetch(`${BASE_API}/posts/${id}`);
  let data = await res.json();
  try {
    dispatch(getSingleNewsSuccess(data));
  } catch (error) {
    dispatch(getSingleNewsFail(data));
  }
};

export const getSingleNewsSuccess = (data) => {
  return {
    type: "GET_SINGLE_NEWS_SUCCESS",
    payload: data,
  };
};

export const getSingleNewsFail = (message) => {
  return {
    type: "GET_SINGLE_NEWS_FAIL",
    payload: message,
  };
};
