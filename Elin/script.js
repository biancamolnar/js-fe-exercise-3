"use strict";

const blogPosts = document.querySelectorAll("article");
const maxPosts = document.getElementById("number-of-posts");
maxPosts.setAttribute("max", blogPosts.length);

maxPosts.addEventListener("input", () => {
  // getInputValue();
  // let max = maxPosts.getAttribute("max");
  //max behöver vara equal input!!!!!
  console.log("number");
  if (number > blogPosts) {
    const postsEditCounter = blogPosts.length + number;
    //FÖR VARJE subtractPosts display:none från slutet
    for (let i = blogPosts; i >= postsEditCounter; i--) {
      blogPosts[i].style.display;
    }
  } else if (number < blogPosts) {
    const postsEditCounter = blogPosts.length - number;
    for (let i = blogPosts; i >= postsEditCounter; i--) {
      blogPosts[i].style.display.none;
    }
  }
  console.log(number);
});

let number = () => {
  let inputVal = document.getElementById("number-of-posts").value;
};

//FÖR VARJE
// length of array === NUMOFPOSTS.attribute.max
//array.length - NUMOFPOSTS.attribute.max array.metod
//

//NUMOFPOSTS.attribute.max
