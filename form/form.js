(function() {
    "use strict";
    window.addEventListener(
        "load",
        function() {
            // Fetch all the forms we want to apply custom Bootstrap validation styles to
            var forms = document.getElementsByClassName("needs-validation");
            // Loop over them and prevent submission
            var validation = Array.prototype.filter.call(forms, function(form) {
                form.addEventListener(
                    "submit",
                    function(event) {
                        if (form.checkValidity() === false) {
                            event.preventDefault();
                            event.stopPropagation();
                        }
                        form.classList.add("was-validated");
                    },
                    false
                );
            });
        },
        false
    );
})();

function checkbutton() {
    var getSelectedValue = document.querySelector(
        'input[name="inlineRadioOptions"]:checked');

    if (getSelectedValue != null) {
        document.getElementById("Error").innerHTML = "";
        document.getElementById("disp").innerHTML = getSelectedValue.value +
            " season is selected";
    } else {
        document.getElementById("Error").innerHTML = "*You have not selected any Option";
    }
}

function checkbutton() {
    var getSelectedValue = document.querySelector(
        'input[name="gender"]:checked');

    if (getSelectedValue != null) {
        document.getElementById("error").innerHTML = "";
        document.getElementById("disp").innerHTML = getSelectedValue.value +
            " season is selected";
    } else {
        document.getElementById("error").innerHTML = "*You have not selected any Option";
    }
}