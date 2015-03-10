var PlanningViewController = function(view, model ) {
	
	//Function To Display Popup		
	$("#add-activity").click(function(){
		$("#popupAddActivity").show();
			

	});

	//Confirm activity and hide popup
	$("#confirm-activity").click(function(){
			$("#popupAddActivity").hide();
		});
		
	}







