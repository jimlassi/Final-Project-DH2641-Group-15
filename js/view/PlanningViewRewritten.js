var PlanningViewRewritten = function (container, model) {

	model.addObserver(this);
	this.PlanningView = container.find("#planning-view");
	this.addActivity = container.find("#add-day");

	

	var name = "";
	var time; 
	var description; 
	var type;
	var days = 2;

	
	function getTable(){
		this.table = container.find("#activity-table-content");
		this.table.html("");
		
		// creating the ul element to contain the activities
		var table = document.createElement("ul");
		table.addClass = "parked-table";
		
		
		// looping through the activities and creating list entries for each
		for (i=0; i<model.parkedActivities.length; i++) {
			var row = document.createElement("li");
			row.setAttribute("id", "activity-row");
			row.className = "row";
			
			// creating containers for the activity information
			/*var timeContainer = document.createElement("p");
			time = model.parkedActivities[i].getLength();
			timeContainer.appendChild(document.createTextNode(time));
			row.appendChild(timeContainer);*/
			
			var nameContainer = document.createElement("p");
			name = model.parkedActivities[i].getName();
			nameContainer.appendChild(document.createTextNode(name));
			row.appendChild(nameContainer);
			
			
			time = model.parkedActivities[i].getLength();
			description = model.parkedActivities[i].getDescription();
			
			table.appendChild(row);
			
		}
		document.getElementById("activity-table-content").appendChild(table);
	}

	
	function createDays () {
		
		this.daySurround = container.find("#days");
		daySurround.html("");
		
		for (i=0; i < days ; i++) {
			var tmpDay = document.createElement("ul");
			//tempId = "day-container";
			tmpDay.setAttribute("id", "day-container"); 
			tmpDay.className = "day-rect";
			
			document.getElementById("days").appendChild(tmpDay);
		}
	}


	this.update = function(arg){
		
	
		getTable();
		createDays();
		
		
		$(function() {

			// let the parked items be draggable
			var $parked = $("#activity-table-content");
			
			$( "div", $parked ).draggable({
				//cancel: "a.ui-icon", // clicking an icon won't initiate dragging
				revert: "invalid", // when not dropped, the item will revert back to its initial position
				containment: "document",
				helper: "original",
				cursor: "move"
			});
			
			// let the parked items be droppable
			$("#activity-table-content").droppable({
				activeClass: "ui-state-highlight",
				drop: function( event, ui ) {
				// remove activity from current day
				}
			});
			
			
			
			// Let day be droppable
			var $day = $("#day-container");
			
			$day.droppable({

			drop: function( event, ui ) {
				// add activity to day in the model
				}
			});


			 
			 
		});


	}
}
