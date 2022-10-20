"use strict";

const blogArray = document.querySelectorAll("article");
const numOfPosts = document.getElementById("number-of-posts");
numOfPosts.setAttribute("max", blogArray.length);

let num = blogArray.length - numOfPosts.value;
numOfPosts.addEventListener("input", (event) => {
  console.log(numOfPosts.value);

  blogArray.forEach((post, i) => {
    if(i < numOfPosts.value) {
      post.style.display = 'block';
    }
    else {
      post.style.display = "none";
    }
  });


});




