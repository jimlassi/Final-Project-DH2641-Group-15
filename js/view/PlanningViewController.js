var PlanningViewController = function(view, model ) {
	
	var x =1;
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
					console.log(model.parkedActivities[0].getName());
					console.log(model.parkedActivities[0].getLength());
					console.log(model.parkedActivities[0].getTypeId());
					console.log(model.parkedActivities[0].getDescription());
					$("#popupAddActivity").hide();
					$("#start-view").hide();
					$("#planning-view").show();
			}

			
		});
		
	}







