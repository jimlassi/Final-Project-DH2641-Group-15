var PlanningViewController = function(view, model ) {
	
	//Function To Display Popup		
	$("#add-activity").click(function(){
		$("#popupAddActivity").show();
			

	});

	//Confirm activity and hide popup
	$("#confirm-activity").click(function(){
		
				if (document.getElementById('name').value == "" || document.getElementById('description').value == "") {
					alert("Fill All Fields !");
					
				} 
				else if (isNaN(parseInt(document.getElementById('length').value)))   {
					alert("Must be a number");
				}
				else {
					//document.getElementById('form').submit();
					model.addActivity(new Activity(document.getElementById('name').value, document.getElementById('length').value, document.getElementById('type').value, document.getElementById('description').value));
					/*tezt
					console.log(model.parkedActivities[0].getName());
					console.log(model.parkedActivities[0].getLength());
					console.log(model.parkedActivities[0].getTypeId());
					console.log(model.parkedActivities[0].getDescription());
					*/
					$("#popupAddActivity").hide();
					document.getElementById('name').value ="";
					document.getElementById('length').value="";
					document.getElementById('type').value="0"; 
					document.getElementById('description').value="";
			}
					
			
		});
	//Exit add activity to hide popup
	$("#exit-activity").click(function(){
				$("#popupAddActivity").hide();
	
	});
	
	
	
	//Drag and drop
	$(function() {
		$( ".row" ).draggable();
		$( "#day-rect" ).droppable();
	});
	
	
	
	
}







