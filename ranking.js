"use strict";

let ranking = document.querySelector('.ranking');
let rankBadge = document.querySelector('.rankBadge');
let rankScore = document.querySelector('.rankScore');
let rankMsg = document.querySelector('.rankMsg');
let x = 0;

window.onload = function rankMe() {
    x = Math.round(Math.random() *100);
    if (x >= 70) {
        console.log('Amazing');
        rankBadge.innerHTML = "&#127765;";
        rankScore.innerHTML = x;
        rankMsg.innerHTML = "A true culinary Master; Teach the world your greatest recipes";
    } else if (x >= 50) {
        console.log('great');
        rankBadge.innerHTML = "&#127766;";
        rankScore.innerHTML = x;
        rankMsg.innerHTML = "Super effort, keep up the amazing community work";
    } else if (x >= 30) {
        console.log('good');
        rankBadge.innerHTML = "&#127767;";
        rankScore.innerHTML = x;
        rankMsg.innerHTML = "You are learning the ropes, with persitance will come great relish";
    } else if (x >= 0) {
        console.log('okay');
        rankBadge.innerHTML = "&#127768;";
        rankScore.innerHTML = x;
        rankMsg.innerHTML = "All chefs start in their own kitchen";
    } else {
        return false;
    }
}
/*
// Profile Img logic // 
window.onload = function createProfileImg() {
   let profilePlac = document.querySelector('.profile');
   let z = 0;
   profilePlac.innerHTML = ``;

   z = Math.round(Math.random() * 10%3);
   console.log(z);
   if (z = 0) {
    profilePlac.innerHTML = `<img src="crushImages/userLogo1.jpg">`;
   } else if (z = 1) {
    profilePlac.innerHTML = `<img src="crushImages/userLogo2.jpg">`;
   } else if (z = 2) {
    profilePlac.innerHTML = `<img src="crushImages/userLogo2.jpg">`;
   } else if (z = 3) {
    profilePlac.innerHTML = `<img src="crushImages/userLogo1.jpg">`;
   } else {
    return false;
   }
}
*/