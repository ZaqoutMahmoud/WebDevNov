const initialState = {
  news: [],
  singlenews: [],
  errorMessage: ''
}

const newsReducer = (state = initialState, action) => {

  switch (action.type) {
      case "GET_ALL_NEWS_SUCCESS":
          return {
              ...state,
              news: action.payload
          }
      case "GET_ALL_NEWS_FAIL":
          return {
              ...state,
              news: [],
              errorMessage: action.payload
          }
      case "GET_SINGLE_NEWS_SUCCESS":
          return {
              ...state,
              singlenews: action.payload,
          }
      case "GET_SINGLE_NEWS_FAIL":
          return {
              ...state,
              singlenews: [],
              errorMessage: action.payload
          }
      default:
          return {
              ...state
          }
  }


}

export default newsReducer