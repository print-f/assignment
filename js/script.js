const form = document.querySelector("form");
const dialog = document.querySelector(".dialog");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let nameValue = form.name.value;
    let emailValue = form.email.value;
    let isEmpty = (nameValue || emailValue) === '';

    if (!isEmpty) {
        validateName(nameValue);
        validateMail(emailValue);
       
        if (validateName(nameValue) && validdateMail(emailValue))
            location.href = "./confirmation.html";
    }

    else {
        document.getElementById("name").style.borderColor = "#BF0001";
        dialog.style.display = "block";
    }

});

//name validator
function validateName(name) {
    if (/^[a-zA-Z\-]+$/.test(name)) {
        displayError("#name_error", "none");
        return true;
    } else {
        displayError("#name_error", "block");
        return false;
    }
}

//email  validator
function validateMail(mail) {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
        displayError("#email_error", "none");
        return true;
    } else {

        displayError("#email_error", "block");
        return false;
    }
}

function displayError(elementId, elementProperty) {
    return form.querySelector(elementId).style.display = elementProperty;
}