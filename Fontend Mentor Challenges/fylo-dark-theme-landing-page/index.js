const emailErr = document.getElementById("email-err");
const email = document.getElementById("email");

function isEmailValid() {
    const emailValue = email.value;
    const validEmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!emailValue.match(validEmailRegex)) {
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

