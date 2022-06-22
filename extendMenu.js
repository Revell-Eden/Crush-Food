"use strict";
let subMenu = document.querySelector('.subMenu');
let nav = document.querySelector('nav');
let toggle = document.querySelector('.menuToggle');

function extendMenu() {
  if (subMenu.style.display === "flex"){
    subMenu.style.display = "none";
    console.log("close");
    nav.style.height = "3em";
    toggle.classList.add('.menuClose');
  } else {
    subMenu.style.display = "flex";
    console.log("open");
    nav.style.height = "5em";
    toggle.classList.add('.menuOpen');
}   
}