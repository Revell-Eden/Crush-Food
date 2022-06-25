"use strict";
let today = document.getElementById('today');

function scrollToday() {
    window.scrollTo({top:1500, behavior:'smooth'});
    console.log("scrolled to 'today' ")
}

let pickable = document.querySelector('.pickable');
/*
setInterval(topPickScroll, 1000);

function topPickScroll() {
    pickable.scrollLeft += 440;
    console.log("Top Choice window scrolled");
    console.log('scrolled');
}