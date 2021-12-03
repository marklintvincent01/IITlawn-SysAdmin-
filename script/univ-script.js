const d = new Date();
const days = ["SUN","MON","TUE","WED","THU","FRI","SAT"];
const months = ["JAN","FEB","MAR","APR","MAY","JUN","JUL","AUG","SEP","OCT","NOV","DEC"];

let day = days[d.getDay()];
document.getElementById("day").innerHTML = day;

let month = months[d.getMonth()];
document.getElementById("month").innerHTML = month;

document.getElementById("nday").innerHTML = d.getDate();

document.getElementById("year").innerHTML = d.getFullYear();

function bellDD() {
	document.getElementById("notif-dd").classList.toggle("show");
	window.onclick = function(event) {
	 	if (!event.target.matches('.notif-circle')) {
			var dropdowns = document.getElementsByClassName("notif-content");
	    	var i;
	    	for (i = 0; i < dropdowns.length; i++) {
	      		var openDropdown = dropdowns[i];
	      		if (openDropdown.classList.contains('show')) {
	        		openDropdown.classList.remove('show');
	      		}
	    	}
		}
		if (!event.target.matches('.dd-circle')) {
			var dropdowns = document.getElementsByClassName("dd-content");
	    	var i;
	    	for (i = 0; i < dropdowns.length; i++) {
	      		var openDropdown = dropdowns[i];
	      		if (openDropdown.classList.contains('show')) {
	        		openDropdown.classList.remove('show');
	      		}
	    	}
		}
	}
}
function settingsDD() {
  	document.getElementById("settings-dd").classList.toggle("show");
  	window.onclick = function(event) {
		if (!event.target.matches('.dd-circle')) {
			var dropdowns = document.getElementsByClassName("dd-content");
	    	var i;
	    	for (i = 0; i < dropdowns.length; i++) {
	      		var openDropdown = dropdowns[i];
	      		if (openDropdown.classList.contains('show')) {
	        		openDropdown.classList.remove('show');
	      		}
	    	}
		}
		if (!event.target.matches('.notif-circle')) {
			var dropdowns = document.getElementsByClassName("notif-content");
	    	var i;
	    	for (i = 0; i < dropdowns.length; i++) {
	      		var openDropdown = dropdowns[i];
	      		if (openDropdown.classList.contains('show')) {
	        		openDropdown.classList.remove('show');
	      		}
	    	}
		}
	}
}
