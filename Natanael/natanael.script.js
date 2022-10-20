"use strict";

const blogPosts = document.querySelectorAll("article");
const maxPosts = document.getElementById("number-of-posts");
maxPosts.setAttribute("max", blogPosts.length);

maxPosts.addEventListener("input", () => {
  console.log(maxPosts.value);
  blogPosts.forEach((post, i) => {
    if (i < maxPosts.value) post.style.display = "block";
    else post.style.display = "none";
  });
});
