"use strict";

let boxLid = document.getElementById('recipeBoxLid');
let recipe = document.querySelector('.recipe')
let recipeBox = document.querySelector('.recipeBox');
let boxOpening = document.getElementById('boxOpening');

function scrollRecipeBox() {
    console.log('mouseEnter');
    boxOpening.style.height = "0";
    recipe.style.display = "flex";
    recipe.style.animation = "openRecipe 0.5s linear";
    boxLid.style.animation = "openRecipe 0.5s linear";
    boxLid.style.margin = "4em 4em 0.5em 4em";
}
function closeBox() {
    boxLid.style.transform = "translateY(0em)";
    boxOpening.style.height = "";
    boxLid.style.animation = "closeRecipe 0.5s linear";
    recipe.style.animation = "closeRecipe 0.5s linear";
    recipe.style.display = "none";
}