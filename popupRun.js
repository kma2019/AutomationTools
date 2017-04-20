$(document).ready( function() {

	$("#settings").click( function() {

		window.open("https://docs.google.com/a/pingry.org/forms/d/1PQO2FnbuTezv0QVPlmqMYi2j9fgBnyMDJ4K3RHWDxhw/edit?ts=58ed195c");
	});


	$("#submit").click( function() {
	
		if(document.getElementById("email").checked) {
	
			document.getElementById("test").innerHTML = "email";
		}
	
		if(document.getElementById("text").checked) {
	
			document.getElementById("test").innerHTML = "text";
		}
		
		window.alert("Your changes have been saved");
	});
});