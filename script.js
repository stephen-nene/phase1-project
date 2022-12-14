print = (data)=>{
    console.log(data)
}
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    // print(e.path)
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    // if (username === "user" && password === "web_dev") {
    //     alert("You have successfully logged in.");
    //     location.reload();print(location)
    // } else {
    //     loginErrorMsg.style.opacity = 1;
    // }
})
print(document.getElementById("login-form-submit"))