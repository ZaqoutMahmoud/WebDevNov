const {
  getPosts,
  getSinglePost,
  addPost,
  deletePost,
  updatePost,
} = require("./Actions/fetchActions");
getPosts();
getSinglePost(4);
addPost({ id: 2, title: "post title", body: "lorem ipsum" });
deletePost(2);
updatePost(6);
