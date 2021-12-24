console.log("this is registration page");


const registrationform = document.getElementById("registrationform");

console.log(registrationform);

registrationform.onsubmit = function (event) {
    event.preventDefault();
    console.log("i am triggered when submit is preessed");
};