$("#ch3form").submit(function(e){
	var grade = $("input[name=standing]:checked").val();
	var year = $("input[name=gradDate]:checked").val();
	console.log(grade);
    console.log(year);

	if (!grade && !year) {
		alert("You must select a class standing and graduation date!");
		e.preventDefault();
	}
	else if (!grade) {
		alert("You must select a class standing!");
		e.preventDefault();
	}
	else if (!year) {
		alert("You must select a graduation date!");
		e.preventDefault();
	}
	else {
		return true;
	}
});