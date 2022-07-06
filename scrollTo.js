"use strict";
let today = document.getElementById('today');
function scrollToday() {
    window.scrollTo({top:1500, behavior:'smooth'});
    console.log("scrolled to 'today' ")
}
let pickable = document.querySelector('.pickable');

setInterval(topPickScroll, 5000);
function topPickScroll() {
    pickable.scrollLeft += 430;
    /*console.log("Top Choice window scrolled");*/
}

setInterval(topPickRefresh, 25000);
function topPickRefresh() {
    pickable.scrollLeft -= 2200;
    /*console.log('Top Choice refreshed');*/
}
