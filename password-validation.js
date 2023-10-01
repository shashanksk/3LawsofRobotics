// password-validation.js

document.getElementById("submitBtn").addEventListener("click", function () {
    // Get the entered password
    var enteredPassword = document.getElementById("password").value;

    // Replace "foundation" with the correct password
    var correctPassword = "foundation";

    if (enteredPassword === correctPassword) {
        // Password is correct, open the link
        window.location.href = "https://www.google.com"; // Replace with your desired link
    } else {
        // Password is incorrect, display an error message
        document.getElementById("errorMessage").textContent = "Incorrect password. Please try again.";
    }
});
