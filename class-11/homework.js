var getFormInfo = document.getElementById("formSubmit");

getFormInfo.addEventListener("submit", function(){
    event.preventDefault();
console.log(event);
console.log("First Name: " + event.target.firstName.value);
console.log("Last Name: " + event.target.lastName.value);
console.log("Email Address: " + event.target.emailAd.value);
console.log("Password: " + event.target.password.value);
console.log("Age: " + event.target.age.value);
console.log("Country: " + event.target.country.value);

});
