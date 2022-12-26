document.querySelector('#login-form-submit').addEventListener('click', (event) => {
event.preventDefault();})
createMainContent=()=>{
    document.body.innerHTML = `
	<form class="example" >
		<input id="entacity" type="text" placeholder="Enter city's name...." >
		<!-- <button id="sach" type="submit"><i class="fa fa-search"></i></button> -->
	  </form>
	<div class="page-content page-container" id="page-content">
		<div class="padding">
			<div class="row container d-flex justify-content-center">
	<div class="col-lg-8 grid-margin stretch-card">
				  <!--weather card-->
				  <div class="card card-weather">
					<div class="card-body">
					  <div class="weather-date-location">
						<h3 id="day">Friday</h3>
						<p class="text-gray">
						  <span class="weather-date"> </span>
						  <span class="weather-location">Sydney, Australia</span>
						</p>
					  </div>
					  <div class="weather-data d-flex">
						<div class="mr-auto">
						  <h4 class="display-3">32
							<span class="symbol">&deg;</span>C</h4>
						  <p id="sky">Cloudy</p>
						  <p id="snow">snow</p>
						  <p id="Time-zone"></p>
						</div></div></div></div>
				  <!--weather card ends-->
				</div></div></div></div>    
    `    
    // print('working')
    // print(createMainContent)
}
// createMainContent()





