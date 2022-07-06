"use strict";

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

function newComment() {
    
}