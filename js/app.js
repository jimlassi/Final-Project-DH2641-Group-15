$(function() {
	//We instantiate our model
	var model = new Model();

	startView = new StartView($("#total"), model);
	startViewController = new StartViewController(startView, model);
	planningView = new PlanningView($("#planning-view"), model);
	planningViewController = new PlanningViewController(planningView, model);
	
	//planningViewRewritten = new PlanningViewRewritten($("#planning-view"), model);
	//planningViewControllerRewritten = new PlanningViewControllerRewritten(planningViewRewritten, model);
	
	});
