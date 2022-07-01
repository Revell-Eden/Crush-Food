"use strict";

let logBtn = document.querySelector('.loginBtn');
    let log = document.querySelector('.logDirectory');
    let register = document.getElementById('register');
    let login = document.getElementById('login');
    let bannerTxt = document.querySelector('.bannerText p');
    let label = document.querySelector('.headLabel');

function loginWindow() {
    if (log.style.display === "flex"){
        log.style.display = "none";
    } else {
        log.style.display = "flex";
        console.log("profile active");
        register.style.display = "none";
        login.style.display = "none";
        bannerTxt.style.display = "none";
        label.style.display = "none";
    }   
}
function registerWindow() {
    if (log.style.display === "flex"){
        log.style.display = "none";
    } else {
        log.style.display = "flex";
        console.log("profile active");
        log.style.display = "block";
        register.style.display = "none";
        login.style.display = "none";
        bannerTxt.style.display = "none";
        label.style.display = "none";
    }   
}