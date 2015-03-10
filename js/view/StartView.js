//ExampleView Object constructor
var StartView = function (container, model) {
	
	//håkan
	model.addObserver(this);
	// Get all the relevant elements of the view (ones that show data
  	// and/or ones that responed to interaction)

	this.StartView = container.find("#start-view");
	//dosomething();
	//sadaf
	this.StartView.html("testing");
	




	this.update = function(arg){


		
		//dosomething();
	}

}
 
