function login() {
    let username = document.getElementById("usename").value;
    let password = document.getElementById("password").value;

    // Check if username and password are valid (typically serverside?)

    if (username === "example"  && password === "password") {
        alert("Login successful!");

        // Other comparisons required here, if successful
    } else {
        alert("Invalid username or password. Please try again.");
    }
    
}