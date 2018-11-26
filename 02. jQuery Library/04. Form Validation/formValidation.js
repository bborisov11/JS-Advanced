function validate() {

    let checkBox = $("#company");
    checkBox.on("click",function () {
        if(checkBox.is(":checked")) {
            $("#companyInfo").css("display", "block");
        } else {
            $("#companyInfo").css("display", "none");
        }
    });

    $("#submit").on("click", function (event) {
        let username = $("#username");
        let usernameRegex = /^[a-zA-Z0-9]{3,20}$/;
        let validUsername = checkIfFieldIsValid(usernameRegex, username);

        let password = $("#password");
        let passwordRegex = /^[a-zA-Z0-9_]{5,15}$/;
        let validPassword = checkIfFieldIsValid(passwordRegex, password);

        let confirmPassword = $("#confirm-password");
        let validConfirmPassword;
        if(validPassword) {
            if (confirmPassword.val() !== password.val()) {
                confirmPassword.css("border-color", "red");
                password.css("border-color", "red");
                validConfirmPassword = false;
            } else {
                confirmPassword.css("border", "none");
                validConfirmPassword = true;
            }
        } else {
            confirmPassword.css("border-color", "red");
        }

        let email = $("#email");
        let emailRegex = /^.*@.*\..*$/;
        let validEmail = checkIfFieldIsValid(emailRegex, email);

        let validCheckbox = true;
        if(checkBox.is(":checked")) {
            let companyNumber = $("#companyNumber");
            if(companyNumber.val() === "" || companyNumber.val() < 1000 || companyNumber.val() > 9999) {
                companyNumber.css("border-color", "red");
                validCheckbox = false;
            } else {
                companyNumber.css("border", "none");
            }
        }

        if(validUsername && validPassword && validConfirmPassword && validEmail && validCheckbox) {
            $("#valid").css("display", "block");
        } else {
            $("#valid").css("display", "none");
        }

        event.preventDefault();
        event.stopPropagation();

        function checkIfFieldIsValid(regex, field) {
            if (!regex.test(field.val())) {
                field.css("border-color", "red");
                return false;
            } else {
                field.css("border", "none");
                return true;
            }
        }
    });
}
