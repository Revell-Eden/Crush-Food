"use strict";

let nav = document.querySelector('nav');
let toggle = document.querySelector('.menuToggle');
// PRIMARY NAVBAR //

function extendMenu() {
  if (nav.style.display === "flex"){
    nav.style.display = "none";
    console.log("open");
    toggle.classList.add('.menuClose');
  } else {
    nav.style.display = "flex";
    navHidden.style.height = 0;
    console.log("close");
    toggle.classList.add('.menuOpen');
}   
}

let settings = document.querySelector('.settings');
let setSect = document.querySelector('#setSection');
let exit = document.querySelector('.exit');
function extendSettingsMenu() {
  if (settings.style.display === "block") {
    console.log("exit Handoff");
    settings.style.display = "none";
    setSect.style.display = "none";
    console.log("timeout Call");
    setSect.style.background = "transparent";
  } else {
    settings.style.display = "block";
    setSect.style.display = "block";
    exit.classList.add('.exited');
    console.log("open");
    setSect.style.background = "rgb(0,0,0,0.8)";
}   
}

// Subscribe Logic //