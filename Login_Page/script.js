function login() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    if (username === "" ){
        alert("Please enter your username.");
        return false;
    }
    if (password === "" ){
        alert("Please enter your password.");
        return false;
    }
    if (email === "" ){
        alert("Please enter your email.");
        return false;
    }
    if (phone === "" ){
        alert("Please enter your phone number.");
        return false;
    }
    if (address === "" ){
        alert("Please enter your address.");
        return false;
    }
    if (username.length < 3 || username.length > 20) {
        alert("Inavlid username");
        return false;
    }
    if (password.length < 6 || password.length > 20) {
        alert("Invalid password");
        return false;
    }
    if (!email.includes("@") || !email.includes(".")) {
        alert("Invalid email");
        return false;
    }
    if (phone.length <10 || phone.length > 10) {
        alert("Invalid phone number");
        return false;
    }
    if (address.length < 5 || address.length > 40) {
        alert("Invalid address");
        return false;
    }
    if (username === "LokeshVarma" && password === "Lokesh@123") {
        alert("Login successful!");
    }
    else {
        alert("Invalid username or password.");
    }
}