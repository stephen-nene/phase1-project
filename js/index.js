print = (value) => {console.log(value)}
const dummylogin = document.querySelector('main#main-holder')
print(dummylogin)
document.addEventListener("DOMContentLoaded",()=>{
    // print('mutua')
    
    dummylogin.innerHTML =`
    <h1 id="login-header">Login form</h1>
    
    <div id="login-error-msg-holder">
      <p id="login-error-msg">Invalid username <span id="error-msg-second-line">and/or password</span></p>
    </div>

    <form id="login-form">
      <input type="text" name="username" id="username-field" class="login-form-field" placeholder="Username">
      <input type="password" name="password" id="password-field" class="login-form-field" placeholder="Password">
      <input type="submit" value="Login" id="login-form-submit">
    </form>
    `

})