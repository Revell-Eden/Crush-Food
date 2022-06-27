"use strict";
/* let dietryArray = [glutenFree, vegan, peanut, vegetarian, lactose, kosher, keto]
    let formArray = [emailStored, dietryArray, usernameStored, passwordStored]
    confirm("Confirm your details before proceding ", `Email: ${emailStored} Dietry: ${dietryArray} Username: ${usernameStored} Password: ${passwordStored}`);


function submitForm() {*/
let email = document.querySelector("#email");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let emailStored = email.value;
let usernameStored = username.value;
let passwordStored = password.value;
function validateForm() {
    let x = document.forms["register"]["email"]["username"]["password"].value;
    if(x == "") {
        alert("all fields marked with * must be filled out");
        return false;
    }
}

var form = document.getElementById('#register');
function handleForm(event) {
        event.preventDefault();
    }
form.addEventListener('submit', handleForm);
alert("form submitted sucessfully");

let registrationFormData = [];
let formData = document.getElementsByClassName('.formData');
registrationFormData = Array.prototype.filter.call(formData, function(formData) {
    return formData.value;
})

