    
var checkbox = document.getElementById("sameAddress");
var billing = document.getElementById("bill");
var home = document.getElementById("home");

checkbox.addEventListener('change', (event) => {
	if(event.target.checked) {
		home.value = billing.value;
		home.disabled = true;
	} else {
		home.value = "";
		home.disabled = false;

	}
});