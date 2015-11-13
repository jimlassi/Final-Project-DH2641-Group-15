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
			
				var timeCol = document.createElement("td");
				var timeString = document.createTextNode(time+" min");
				timeCol.appendChild(timeString);
			
				var actCol = document.createElement("td");
				var actString = document.createTextNode(name);
				actCol.appendChild(actString);
				
				tableRow.appendChild(timeCol);
				tableRow.appendChild(actCol);
				
				//add row to table
				tmpDayTable.appendChild(tableRow);
		

				
			}

		}	


	}

	
		


	

	this.update = function(arg){
			displayDays();
		getActivities();
	
YUI().use('dd-constrain', 'dd-proxy', 'dd-drop', function(Y) {
    //Listen for all drop:over events
    Y.DD.DDM.on('drop:over', function(e) {
        //Get a reference to our drag and drop nodes
        var drag = e.drag.get('node'),
            drop = e.drop.get('node');

        //Are we dropping on a li node?
        if (drop.get('tagName').toLowerCase() === 'li') {
            //Are we not going up?
            if (!goingUp) {
                drop = drop.get('nextSibling');
            }
            //Add the node to this list
            e.drop.get('node').get('parentNode').insertBefore(drag, drop);
            //Resize this nodes shim, so we can drop on it later.
            e.drop.sizeShim();
        }
    });
    //Listen for all drag:drag events
    Y.DD.DDM.on('drag:drag', function(e) {
        //Get the last y point
        var y = e.target.lastXY[1];
        //is it greater than the lastY var?
        if (y < lastY) {
            //We are going up
            goingUp = true;
        } else {
            //We are going down.
            goingUp = false;
        }
        //Cache for next check
        lastY = y;
    });
    //Listen for all drag:start events
    Y.DD.DDM.on('drag:start', function(e) {
        //Get our drag object
        var drag = e.target;
        //Set some styles here
        drag.get('node').setStyle('opacity', '.25');
        drag.get('dragNode').set('innerHTML', drag.get('node').get('innerHTML'));
        drag.get('dragNode').setStyles({
            opacity: '.5',
            borderColor: drag.get('node').getStyle('borderColor'),
            backgroundColor: drag.get('node').getStyle('backgroundColor')
        });
    });
    //Listen for a drag:end events
    Y.DD.DDM.on('drag:end', function(e) {
        var drag = e.target;
        //Put our styles back
        drag.get('node').setStyles({
            visibility: '',
            opacity: '1'
        });
    });
    //Listen for all drag:drophit events
    Y.DD.DDM.on('drag:drophit', function(e) {
        var drop = e.drop.get('node'),
            drag = e.drag.get('node');

        //if we are not on an li, we must have been dropped on a ul
        if (drop.get('tagName').toLowerCase() !== 'li') {
            if (!drop.contains(drag)) {
                drop.appendChild(drag);
            }
        }
    });

    //Static Vars
    var goingUp = false, lastY = 0;

    //Get the list of li's in the lists and make them draggable
    var lis = Y.Node.all('.con ol li');
    lis.each(function(v, k) {
        var dd = new Y.DD.Drag({
            node: v,
            target: {
                padding: '0 0 0 20'
            }
        }).plug(Y.Plugin.DDProxy, {
            moveOnEnd: false
        }).plug(Y.Plugin.DDConstrained, {
            constrain2node: '.con'
        });
    });

    //Create simple targets for the 2 lists.
    var uls = Y.Node.all('.con ol');
    uls.each(function(v, k) {
        var tar = new Y.DD.Drop({
            node: v
        });
    });

});



}
}
