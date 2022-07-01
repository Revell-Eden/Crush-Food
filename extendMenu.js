"use strict";

let nav = document.querySelector('.navList');
let toggle = document.querySelector('.menuToggle');

function extendMenu() {
  if (nav.style.display === "none"){
    nav.style.display = "flex";
    console.log("open");
    toggle.classList.add('.menuClose');
  } else {
    nav.style.display = "none";
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