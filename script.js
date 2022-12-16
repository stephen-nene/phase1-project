print = (data)=>{
    console.log(data)
}
addEventListener('DOMContentLoaded',()=>{
    const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    // print(e.path)
    const username = loginForm.username.value;
    const password = loginForm.password.value;
    
    if (username === "user" && password === "web_dev") {
        // alert("You have successfully logged in.");
        loginButton.addEventListener('click',()=>{
            createMainContent()  
            fetchData() 
        })
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})})


function fetchData(){
    //search button 
// const searchBtn = document.querySelector('#sach')
const city_name = document.querySelector('#entacity');

	const search = document.getElementById('entacity')
	// print(search);
	print('hhhh')
	let city = "kiambu"
	print(city)

city_name.addEventListener('keyup',()=>{
print(search.value);
	// search()
	// preventDefault()
let city = search.value


print (city)

fetch(`https://api.weatherbit.io/v2.0/current?&&city=${city}&key=194ad562a0824a6183de7f72d23a6c8e`)
	.then(response => response.json())
	.then(response =>{
		const data = response.data[0]
// print(data);
// print(data.app_temp)
const todayDate = document.querySelector('span.weather-date')
todayDate.innerHTML = data.datetime;
// Get the current date
const today = new Date();
// Get the day of the week (0 = Sunday, 1 = Monday, etc.)
const day = today.getDay();
// Get the name of the day of the week
const dayName = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'][day];
// Get the element where the day name will be inserted
const dayElement = document.querySelector('#day');
// Set the element's innerHTML to the day name
dayElement.innerHTML = dayName;

//put fetched data into our html page
const temp = document.querySelector('h4.display-3')
const sky = document.querySelector('#sky')
const place = document.querySelector('.weather-location')
const snow = document.querySelector('#snow')
const timeZone = document.querySelector('#Time-zone')
const windSpeed = document.createElement('p')
print(windSpeed)



temp.innerHTML=`<h4 class="display-3">${data.app_temp}
<span class="symbol">&deg;</span>C</h4>`
sky.textContent = data.weather.description
place.textContent = data.city_name + "  " + data.country_code
snow.textContent =  "Snowfall is "+data.snow
timeZone.textContent = "Timezone: " + data.timezone
windSpeed.textContent = "Wind speed: " + data.wind_spd +" m/s"

document.querySelector('div.mr-auto').appendChild(windSpeed)
})})


}
