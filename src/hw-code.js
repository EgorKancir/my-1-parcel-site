
// ДЗ:

// Main form

const sendBtn = document.getElementById("send-btn");
let firstName = document.getElementById("user-first-name");
let lastName = document.getElementById("user-last-name");
let age = document.getElementById("user-age");
let city = document.getElementById("user-city");

// InfoBox

let userInfoBoxFirstName = document.querySelector(".user-info-box__first-name");
let userInfoBoxLastName = document.querySelector(".user-info-box__last-name");
let userInfoBoxAge = document.querySelector(".user-info-box__age");
let userInfoBoxCity = document.querySelector(".user-info-box__user-city");


let userInfo = {
    firstName: "",
    lastName: "",
    age: 0,
    city: ""
};
function cliningInput() {
    firstName.value = "";
    lastName.value = "";
    age.value = "";
    city.value = "";
}
function userInfoBoxFun(userObject) {
    userInfoBoxFirstName.textContent = `First name: ${userObject.firstName}`;
    userInfoBoxLastName.textContent = `Last name: ${userObject.lastName}`;
    userInfoBoxAge.textContent = `Age: ${userObject.age}`;
    userInfoBoxCity.textContent = `City: ${userObject.city}`;
};
sendBtn.addEventListener('click', (event) => {
    event.preventDefault(); 
    userInfo.firstName = firstName.value.trim();
    userInfo.lastName = lastName.value.trim();
    userInfo.age = age.value.trim();
    userInfo.city = city.value.trim();
    if (userInfo.firstName.length !== 0 && userInfo.lastName.length !== 0 && userInfo.age.length !== 0 && userInfo.city.length !== 0) {
        userInfoBoxFun(userInfo);
        console.log(userInfo);
        alert("Registration PERFEKT 👌🏻");
        cliningInput();
    } else {
        alert("Complete all information!");
    }
});
