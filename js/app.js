$(function() {
	//We instantiate our model
	var model = new Model();

	startView = new StartView($("#start-view"), model);
	startViewController = new startViewController(startView, model);

	});
