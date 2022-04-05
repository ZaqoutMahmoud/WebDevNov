const baseUrl = "https://jsonplaceholder.typicode.com";
const fetch = require("node-fetch");

module.exports = {
  getPosts: function() {
    console.log("get posts method");
    fetch(`${baseUrl}/posts`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  },
  getSinglePost: function(id) {
    console.log("get single", id);
  },
  addPost: function(post) {
    console.log("Add Post", post);
  },
  deletePost: function(id) {
    console.log("Delete Post", id);
  },
  updatePost: function(id) {
    console.log("Update Post", id);
  },
};
