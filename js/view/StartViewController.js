var StartViewController = function(view, model) {
	
			
	$("#start-button").click(function(){
		$("#start-view").hide();
		$("#planning-view").show();
		
		
		
		model.addDay();

		model.addActivity(new Activity("Introduction",10,0,""),0);
		model.addActivity(new Activity("Idea 1",30,0,""),0);
		model.addActivity(new Activity("Working in groups",35,1,""),0);
		model.addActivity(new Activity("Idea 1 discussion",15,2,""),0);
		
		console.log("Activity name: " + model.parkedActivities.length);
		console.log("Day Start: " + model.days[0].getStart());
		var length = model.days.length;

	});





}
