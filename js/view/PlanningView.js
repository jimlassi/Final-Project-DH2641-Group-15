var PlanningView = function (container, model) {

	model.addObserver(this);
	this.PlanningView = container.find("#planning-view");
	this.addActivity = container.find("#add-day");

	

	var name = "";
	var time; 
	var description; 
	var type;

	
	function getTable(){

		this.table = container.find("#activity-table-content");
		this.table.html("");

		for(i= 0; i< model.parkedActivities.length; i++){


		 name = model.parkedActivities[i].getName();
		 time = model.parkedActivities[i].getLength();
		 description = model.parkedActivities[i].getDescription();
		 

		 this.table.append("<tr>");

		
		 this.table.append("<td>"+ time+"min         </td>");
	  	this.table.append("<td>"+name+"</td>");
	
		this.table.append("</tr>");
		 


}
		this.table.append("</table>")
}


	this.update = function(arg){
		

		getTable();
		//dosomething();


	}



}
