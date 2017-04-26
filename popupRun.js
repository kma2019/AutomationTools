$(document).ready( function() {

	$("#settings").click( function() {

		window.open("https://docs.google.com/a/pingry.org/forms/d/1PQO2FnbuTezv0QVPlmqMYi2j9fgBnyMDJ4K3RHWDxhw/edit?ts=58ed195c");
	});


	$("#submit").click( function() {
	
		if(document.getElementById("email").checked) {
			
			var a = "a";
			var b = "b";
			
			localStorage.setItem(a, b);
			console.log(localStorage[a]);
		}
	
		if(document.getElementById("text").checked) {
	
			
		}
		
		document.getElementById("test").innerHTML = "-";
		pausecomp(300);
		document.getElementById("test").innerHTML = "Your changes have been saved";
	});
});

function pausecomp(millis)
{
    var date = new Date();
    var curDate = null;
    do { curDate = new Date(); }
    while(curDate-date < millis);
}