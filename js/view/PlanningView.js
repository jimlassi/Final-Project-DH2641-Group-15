var PlanningView = function (container, model) {

	model.addObserver(this);
	this.PlanningView = container.find("#planning-view");
	this.addActivity = container.find("#add-day");

	var name = "";
	var time; 
	var description; 
	var type;
	
	function getActivities(){
	//Add activity to Activity table
		
		this.table = container.find(".table-parked");
		table.html("");
		
		var x = document.createElement("ul");
		x.setAttribute("class", "connectedSortable" ); 
		x.setAttribute("id", "parked" ); 
		document.getElementById("activity-table-content").appendChild(x);
		 
		for(i= 0; i< model.parkedActivities.length; i++){
			name = model.parkedActivities[i].getName();
			time = model.parkedActivities[i].getLength();
			description = model.parkedActivities[i].getDescription(); 
			
			id = i.toString();
		 
			var tableRow = document.createElement("li");
			tableRow.setAttribute("id", id);
			tableRow.setAttribute("class", "ui-state-highlight");
			//var timeString = document.createTextNode(time+" min");

			tableRow.innerHTML = "Activity: "+name ;
			x.appendChild(tableRow);

			
			//	makeDraggable("parked");
			//connectSortable();
			/*var actCol = document.createElement("td");
			var actString = document.createTextNode(name);
			actCol.appendChild(actString);
			
		 	var timeCol = document.createElement("td");
			var timeString = document.createTextNode(time+" min");
			timeCol.appendChild(timeString);
			
			document.getElementById(id).appendChild(actCol);
			document.getElementById(id).appendChild(timeCol)*/
		}
/*

					console.log(tmpTargetId + ":tmpTargetId, " + tmpTargetIndex+": tmpTargetIndex, "+tmpSourceId + ": tmpSourceId, "+ tmpSourceIndex+": tmpSourceIndex ");
					// updating the model when moving activity to another day
					model.moveActivity(tmpSourceId, tmpSourceIndex, tmpTargetId, tmpTargetIndex);
				}
				});*/
		
	}
			

	function displayDays() {
		this.dayContainer = container.find("#days");
		

		dayContainer.html("");
		
		console.log(model.days.length);
		// add the days to the main container
		for (i=0; i<model.days.length; i++) {
			
			// Setup Day container and header
			tmpDayContainer = document.createElement("div");
			tmpDayContainer.setAttribute("id", "day-rect");// i);
			tmpDayContainer.setAttribute("class", "day-rect");
			


			var dayNr = i+1;
			tmpDayHeader = document.createElement("div");
			tmpDayHeader.setAttribute("id", "activity-table-head");
			var dayText = document.createTextNode("Day "+ dayNr); 
			tmpDayHeader.appendChild(dayText);
			//tmpDayHeader.setAttribute("id", "day-header"); SÄTT IN DAY CSS FÖR HEADERN HÄR	
			
			tmpDayTable = document.createElement("ul");
			tmpDayTable.setAttribute("class", "connectedSortable");
			tmpDayTable.setAttribute("id", "day"+i); // set the id of the day table to i
			tmpDayContainer.appendChild(tmpDayHeader);
			tmpDayContainer.appendChild(tmpDayTable);
			
			document.getElementById("days").appendChild(tmpDayContainer);
			

		
			// add the activities to each day
			for (k=0; k<model.days[i]._activities.length; k++) {
				console.log(model.days[i]);
				
				name = model.days[i]._activities[k].getName();
				time = model.days[i]._activities[k].getLength();
				description = model.days[i]._activities[k].getDescription(); 
			
				id = k.toString();

				var tableRow = document.createElement("li");
				tableRow.setAttribute("id", id);
				tableRow.setAttribute("class", "ui-state-highlight");


				tableRow.innerHTML = "Activity: "+name ;
				tmpDayTable.appendChild(tableRow);
				
			

				
			}
	
		}	
		for (i=0; i<model.days.length; i++) {
		
	
}

	}

	
	function makeDraggable(){

			
		$(".connectedSortable").sortable({
		});
		//connectSortable();
	
	}	

	function connectSortable() {

    $( "#parked, #day0, #day1" ).sortable({
      connectWith: ".connectedSortable"
    }).disableSelection();
  	
  	}





	

	this.update = function(arg){
		displayDays();
		getActivities();
		makeDraggable();
		connectSortable();
	




}
}
