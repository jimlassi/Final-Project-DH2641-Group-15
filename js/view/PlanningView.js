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
		
//<<<<<<< Updated upstream
		var x = document.createElement("ol");
		x.setAttribute("class", "con" ); 
		x.setAttribute("id", "parked" ); 
		document.getElementById("activity-table-content").appendChild(x);
		 
		for(i= 0; i< model.parkedActivities.length; i++){
			name = model.parkedActivities[i].getName();
			time = model.parkedActivities[i].getLength();
			description = model.parkedActivities[i].getDescription(); 
			
			id = i.toString();
		 
			var tableRow = document.createElement("li");
			tableRow.setAttribute("id", id);
			tableRow.setAttribute("class", "row");
			x.appendChild(tableRow);
			
			var actCol = document.createElement("td");
			var actString = document.createTextNode(name);
			actCol.appendChild(actString);
			
		 	var timeCol = document.createElement("td");
			var timeString = document.createTextNode(time+" min");
			timeCol.appendChild(timeString);
			
			document.getElementById(id).appendChild(actCol);
			document.getElementById(id).appendChild(timeCol)
		}
		
	}
			

	function displayDays() {
		this.dayContainer = container.find("#days");
		//document.getElementById("days").removeChild(i);
		//document.getElementById("day-rect").remove();
		dayContainer.html("");
		
		console.log(model.days.length);
		// add the days to the main container
		for (i=0; i<model.days.length; i++) {
			
			// Setup Day container and header
			tmpDayContainer = document.createElement("div");
			tmpDayContainer.setAttribute("id", "day-rect");// i);
			//tmpDayContainer.setAttribute("class", "day-rect");
			
			var dayNr = i+1;
			tmpDayHeader = document.createElement("div");
			tmpDayHeader.setAttribute("id", "activity-table-head");
			var dayText = document.createTextNode("Day "+ dayNr); 
			tmpDayHeader.appendChild(dayText);
			//tmpDayHeader.setAttribute("id", "day-header"); SÄTT IN DAY CSS FÖR HEADERN HÄR	
			
			tmpDayTable = document.createElement("ol");
			tmpDayTable.setAttribute("class", "con");
			tmpDayTable.setAttribute("id", i); // set the id of the day table to i

			tmpDayContainer.appendChild(tmpDayHeader);
			tmpDayContainer.appendChild(tmpDayTable);
			document.getElementById("days").appendChild(tmpDayContainer);
			$("#0").sortable({
			//$(".content-table", ".day-content-table").sortable({
				connectWith: ".con",
				//placeholder: "ui-state-highlight",
			// add table to the day	
		}).disableSelection();
			// add the activities to each day
			for (k=0; k<model.days[i]._activities.length; k++) {
				console.log(model.days[i]);
				
				name = model.days[i]._activities[k].getName();
				time = model.days[i]._activities[k].getLength();
				description = model.days[i]._activities[k].getDescription(); 
			
				id = k.toString();
			
				var tableRow = document.createElement("li");
				tableRow.setAttribute("id", id);
				tableRow.setAttribute("class", "row");
			
				var timeCol = document.createElement("td");
				var timeString = document.createTextNode(time+" min");
				timeCol.appendChild(timeString);
			
				var actCol = document.createElement("td");
				var actString = document.createTextNode(name);
				actCol.appendChild(actString);
				
				tableRow.appendChild(timeCol);
				tableRow.appendChild(actCol);
				
				// add row to table
				tmpDayTable.appendChild(tableRow);

			}

		/*	var idz = "#"+i.toString();
		$("#0").sortable({
    	connectWith: ".con"
		}).disableSelection();
*/
		}	

	}

	
		


	

	this.update = function(arg){
		
		getActivities();
		displayDays();
		
		

		

	
			$("ol").sortable({
			//$(".content-table", ".day-content-table").sortable({
				connectWith: ".con",
				//placeholder: "ui-state-highlight",
			
				
				start: function(event, ui) {
					// vars from the source to be passed to model
					tmpSourceIndex = ui.item.index();
					tmpSourceId = event.target.id;
					console.log(tmpSourceIndex);
					console.log(tmpSourceId);

					if (tmpSourceId =="parked") {
						tmpSourceId = null;
					}

				},
				
					// INTE KLAR!!
					// when moving within day/parked
			/*	stop: function(event,ui) {
					// target vars when moving intra-day
					console.log("KÖRS DEN HÄR NÄR MAN FLYTTAR TILL ANNAN DAG?");
					tmpTargetIndex = ui.item.index();
					tmpTargetId = event.target.id;
					

					
					if (tmpSourceId ==="") {
						tmpSourceId = null;
					}
					
					// updating the model when moving intra-day
				//	model.moveActivity(tmpSourceId, tmpSourceIndex, tmpTargetId, tmpTargetIndex);
					
				},*/
					
				receive: function(event, ui) {
					//console.log(event);
					//console.log(ui);
					console.log("VART E VI PÅ VÄG")
					
					// vars to be passed to the model
					tmpTargetId = event.target.id;
					tmpTargetIndex = ui.item.index();

					console.log(tmpTargetId + "AAA");
					
					if (tmpSourceId ==="parked") {
						tmpSourceId = null;
					}
					

					console.log(tmpTargetId + ":tmpTargetId, " + tmpTargetIndex+": tmpTargetIndex, "+tmpSourceId + ": tmpSourceId, "+ tmpSourceIndex+": tmpSourceIndex ");
					// updating the model when moving activity to another day
					model.moveActivity(tmpSourceId, tmpSourceIndex, tmpTargetId, tmpTargetIndex);
				}

	

		}).disableSelection();


	
			
	
	

}

}
