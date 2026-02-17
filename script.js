function validateForm() {

    
    var name = document.getElementById("name").value;
    var prn = document.getElementById("prn").value;
    var email = document.getElementById("email").value;
    var age = document.getElementById("age").value;
    var panel = document.getElementById("panel").value;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("prnError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("ageError").innerHTML = "";
    document.getElementById("panelError").innerHTML = "";

    var isValid = true;

    
    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        isValid = false;
    }

    
    if (prn === "") {
        document.getElementById("prnError").innerHTML = "PRN is required";
        isValid = false;
    }

    
    if (email === "" || email.indexOf("@") === -1) {
        document.getElementById("emailError").innerHTML = "Enter valid email";
        isValid = false;
    }

   
    if (age === "" || isNaN(age)) {
        document.getElementById("ageError").innerHTML = "Enter valid age";
        isValid = false;
    }

    
    if (panel === "") {
        document.getElementById("panelError").innerHTML = "Select a panel";
        isValid = false;
    }

   
    return isValid;
}
