"use strict";
let subMenu = document.querySelector('.subMenu');
let nav = document.querySelector('nav');
let toggle = document.querySelector('.menuToggle');

function extendMenu() {
  if (subMenu.style.display === "flex"){
    subMenu.style.display = "none";
    console.log("close");
    nav.style.height = "4em";
    toggle.classList.add('.menuClose');
  } else {
    subMenu.style.display = "flex";
    console.log("open");
    nav.style.height = "6em";
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

window.onload = function extendProfileMenu() {
  let profileBox = document.querySelector('.profileBox');
  let registrationAwait = document.querySelector('.registrationAwait');
  if (registrationAwait.style.display = "flex") {
    profileBox.style.display = "flex";
    registrationAwait.style.display = "none";
  } else {
    alert("no registration found");
  }
}