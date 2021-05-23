const form = document.querySelector("#contactForm");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const subject = document.querySelector("#subject");
const subjectError = document.querySelector("#subjectError");
const adress = document.querySelector("#adress");
const adressError = document.querySelector("#adressError");
const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
const message = document.querySelector(".message");


function validateForm(e){
	var isValidated = true;
	e.preventDefault();

	if (checkLength(name.value, 2) === true) {
		nameError.style.display = "none";
	} else {
		nameError.style.display = "block";
		isValidated = false;
	}
	if (checkLength(subject.value, 3) === true) {
		subjectError.style.display = "none";
	} else {
		subjectError.style.display = "block";
		isValidated = false;
	}
	if (checkLength(adress.value, 10) === true) {
		adressError.style.display = "none";
	} else {
		adressError.style.display = "block";
		isValidated = false;
	}
	if (validateEmail(email.value) === true){
		emailError.style.display = "none";
	} else {
		emailError.style.display = "block";
		isValidated = false;
	}
	//this part for message
	if (isValidated) {
		
		message.style.display = "block";
		form.style.display = "none";
	} else {
		form.false();
	}
	
}

function validateEmail(email) {
	const regEx = /\S+@\S+\.\S+/;
	const patternMatches = regEx.test(email);
	return patternMatches;
}

function checkLength(value, len) {
	if (value.trim().length > len) {
	 return true;
	} else {
		return false;
	}
}


form.addEventListener("submit", validateForm);