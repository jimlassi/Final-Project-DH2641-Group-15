var PlanningViewController = function(view, model ) {
	
	//Function To Display Popup		
	$("#add-activity").click(function(){
		$("#popupAddActivity").show();
			

/*			alert("activity box");	
		

		
		function check_empty() {
			if (document.getElementById('name').value == "" || document.getElementById('email').value == "" || document.getElementById('msg').value == "") {
				alert("Fill All Fields !");
			} 

			else {
				document.getElementById('form').submit();
					alert("Form Submitted Successfully...");
			}
			}

	*/});
	$("#confirm-activity").click(function(){
			$("#popupAddActivity").hide();
		});

		var activityName = prompt("activity name");
		var description = prompt("description");
		
	});






}
