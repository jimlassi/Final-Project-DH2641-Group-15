var StartViewController = function(view, model) {
	
			
	$("#start-button").click(function(){
		$("#start-view").hide();
		$("#planning-view").show();
		
		
		
		model.addDay();
	
	  
    
		//create parked activities
		model.addActivity(new Activity("Introduction",10,0,"Introduction for this day"),0);
		model.addActivity(new Activity("Breaktime biznezz",20,0,"Boboddy"));


		console.log("Activity name: " + model.parkedActivities.length);
		var length = model.days.length;

	});




}
