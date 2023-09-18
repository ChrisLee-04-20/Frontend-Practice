const email = document.getElementById("email");
const error_icon = document.getElementById("error-icon");
const error_message = document.getElementById("error-message");

function isEmailValid() {
    const emailValue = email.value;
    console.log(emailValue)

    if (!emailValue || emailValue == ""){
        noErrorMessage();
        return
    }

    if (!emailValue.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)) {
        displayErrorMessage();
    } else {
        noErrorMessage();
    }

}

function noErrorMessage() {
    error_icon.style.display = "none";
    error_message.style.visibility = "hidden";
}

function displayErrorMessage() {
    error_icon.style.display = "block";
    error_message.style.visibility = "visible";
}
