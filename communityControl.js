"use strict";
let preStore = JSON.parse(localStorage.getItem("allEntries"));
window.onload = function commentHlp() {
    console.log("Comment Count:", preStore.length);
}

let recipe = document.querySelector('.recipePreview');
let recipeBtn = document.querySelector('.recipe');
function showRecipe() {
    if (recipe.style.display === "block") {
        recipeBtn.style.background = "#fff";
        recipeBtn.style.color = "#000";
        recipe.style.display = "none";
        console.log("open");
    } else {
        recipeBtn.style.background = "rgb(255, 131, 131)";
        recipeBtn.style.color = "#fff";
        recipe.style.display = "block";
        console.log("close");
    }
}
function postComment() {
    
    if (preStore == null) preStore = [];
    let pushedData = document.getElementById('newComment').value;
    /*let userId = document.getElementById('userId').value;*/
    let entry = {/*"userID": userId,*/ "comment": pushedData};
    /*
    preStore.push({comment: pushedData});
    preStore.forEach((item,i) => {
        item.id = i + 1;
        return item
    });*/
    localStorage.setItem('entry', JSON.stringify(entry));
    // Save allENtries back to local storage //
    preStore.push(entry);
    localStorage.setItem("allEntries", JSON.stringify(preStore));
    console.log(preStore);
}