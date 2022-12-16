print = (value) => {console.log(value)}

document.addEventListener("DOMContentLoaded",()=>{
   
const submitBtn = document.querySelector('#login-form-submit')
print(submitBtn)
submitBtn.addEventListener('click',()=>{
    createMainContent()   
})})


createMainContent=()=>{
    document.body.innerHTML = `
    `    
    print('working')
}






