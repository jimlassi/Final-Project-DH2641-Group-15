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
		
		var x = document.createElement("table");
		x.setAttribute("id", "content-table" ); 
		document.getElementById("activity-table-content").appendChild(x);
		 
		for(i= 0; i< model.parkedActivities.length; i++){
			name = model.parkedActivities[i].getName();
			time = model.parkedActivities[i].getLength();
			description = model.parkedActivities[i].getDescription(); 
			
			id = "draggable"+i.toString();
		 
			var tableRow = document.createElement("div");
			tableRow.setAttribute("id", id);
			tableRow.setAttribute("class", "row");
			document.getElementById("content-table").appendChild(tableRow);

			var x = document.createElement("table");
			x.setAttribute("id", "content-table" ); 
			document.getElementById("activity-table-content").appendChild(x);
			
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
		dayContainer.html("");
		
		console.log(model.days.length);
		// add the days to the main container
		for (i=0; i<model.days.length; i++) {
			
			// Setup Day container and header
			tmpDayContainer = document.createElement("div");
			tmpDayContainer.setAttribute("id", "day"+i.toString());
			tmpDayContainer.setAttribute("class", "day-rect");
			

			tmpDayHeader = document.createElement("div");
			tmpDayHeader.setAttribute("id", "activity-table-head");
			//tmpDayHeader.setAttribute("id", "day-header"); SÄTT IN DAY CSS FÖR HEADERN HÄR	
			
			tmpDayTable = document.createElement("table");
			tmpDayTable.setAttribute("id", "content-table");
			
			// add table to the day	
			tmpDayContainer.appendChild(tmpDayHeader);
			tmpDayContainer.appendChild(tmpDayTable);
			document.getElementById("days").appendChild(tmpDayContainer);
			
			// add the activities to each day
			for (k=0; k<model.days[i]._activities.length; k++) {
				
				name = model.days[i].actvities[k].getName();
				time = model.days[i].actvities[k].getLength();
				description = model.days[i].actvities[k].getDescription(); 
			
				id = "draggable"+i.toString();
			
				var tableRow = document.createElement("div");
				tableRow.setAttribute("id", id);
				tableRow.setAttribute("class", "row");
			
				var timeCol = document.createElement("td");
				var timeString = document.createTextNode(time+" min");
				timeCol.appendChile(timeString);
			
				var actCol = document.createElement("td");
				var actString = document.createTextNode(name);
				actCol.appendChild(actString);
				
				tableRow.appendChild(timeCol);
				tableRow.appendChild(actCol);
				
				// add row to table
				tmpDayTable.appendChild(tableRow);
			}
		}
	}


	this.update = function(arg){
		getActivities();
		displayDays();
		
		$(function() {
			var $parked = $( "#activity-table-content" ),
			$day = $( "#content-table" );
			
			$( "div", $parked ).draggable({
				cancel: "a.ui-icon", // clicking an icon won't initiate dragging
				revert: "invalid", // when not dropped, the item will revert back to its initial position
				containment: "document",
				cursor: "move",
				helper: "original"
				});
 
			// let the activities be droppable
			$day.droppable({
				//accept: "#activity-table-content > div",
				//activeClass: "ui-state-highlight",
				drop: function( event, ui ) {
					//deleteImage( ui.draggable );
					}
				});
			});
		}
}
