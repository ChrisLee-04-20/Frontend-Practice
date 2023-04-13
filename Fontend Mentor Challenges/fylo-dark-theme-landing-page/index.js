const emailErr = document.getElementById("email-err");
const email = document.getElementById("email");

function isEmailValid() {
    const emailValue = email.value;

    if (!emailValue.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        displayErrorMessage()
    } else {
        noErrorMessage();
    }

    if(!emailValue){
        noErrorMessage();
    }
}

function noErrorMessage() {
    emailErr.style.display = "none";
}

function displayErrorMessage() {
    emailErr.style.display = "block";
}

