// 1. Create our Dummy Data (The "Correct" credentials)
const VALID_USER = "admin";
const VALID_PASS = "12345";

// 2. Grab the elements from the page
const loginBtn = document.getElementById('loginBtn');
const userInput = document.getElementById('username');
const passInput = document.getElementById('password');
const message = document.getElementById('message');

// 3. The Logic: What happens when they click Login?
loginBtn.addEventListener('click', function() {
    const enteredUser = userInput.value;
    const enteredPass = passInput.value;

    // Check if the input matches our dummy data
    if (enteredUser === VALID_USER && enteredPass === VALID_PASS) {
        // Success! Send them to the next page
        alert("Login Successful!");
        window.location.href = "./page2.html"; 
    } else {
        // Failure! Show an error message
        message.textContent = "Invalid username or password. Try again!";
        
        // Optional: Clear the password field for them
        passInput.value = "";
    }
});
function signIn(inputUsername, inputPassword) {
    // Retrieve the stored data
    const storedData = localStorage.getItem('userAccount');

    if (storedData) {
        const user = JSON.parse(storedData);

        // Compare input with stored data
        if (inputUsername === user.username && inputPassword === user.password) {
            alert("Login successful! Welcome back.");
            // Redirect to dashboard or home page
        } else {
            alert("Invalid username or password.");
        }
    } else {
        alert("No account found. Please sign up first.");
    }
}
