//DinnerModel Object constructor
var DinnerModel = function() {
 
	
	
	
	this.setAgendaItem = function(string){




	}

	this.addObserver = function(observer) {
		
		observers.push(observer);
		
		}
		
		
	var notifyObservers = function(obj) {
		for(var i=0; i<observers.length; i++) 
		{
			observers[i].update(obj);
		}	
			
			}

	this.setFilter = function(f){
		
		filter = f;
		notifyObservers();
	}
	this.getFilter = function(){
		
		return filter 
		}
		
		
	this.setNumberOfHours = function(num) {
		if(num>0) {
			guests = num;
			notifyObservers();
		}
	}

	// should return 
	this.getNumberOfHours= function() {
		return guests;
	}
	
	
	this.getType = function() {
		return type;
	}

	this.setType = function(t) {
		
		type = t;
		notifyObservers();
	}
	
	this.setTempID = function(id){
		
		tempId = id;
		notifyObservers();
		
	}
	this.getTempID = function(){
		
		return tempId;
	}
	//Returns the dish that is on the menu for selected type 
	this.getSelectedDish = function(type) {
		return menu[type];
	}

	//Returns all the dishes on the menu.
	this.getFullMenu = function() {
		var fullMenu = [];
		for(key in menu) {
			fullMenu.push(this.getDish(menu[key]));
		}
		return fullMenu;
	}

	//Returns all ingredients for all the dishes on the menu.
	this.getAllIngredients = function() {
		var ingredients = [];
		for(key in menu) {
			var dish = this.getDish(menu[key]);
			ingredients = ingredients.concat(dish.ingredients);
		}
		return ingredients;
	}

	//Returns the total price of the menu (all the ingredients multiplied by number of guests).
	this.getTotalMenuPrice = function() {
		var ingredients = this.getAllIngredients();
		var sum = 0.;
		for(key in ingredients) {
			sum += parseFloat(ingredients[key].price) * this.getNumberOfGuests();
		}
		return sum;
	}

	//Adds the passed dish to the menu. If the dish of that type already exists on the menu
	//it is removed from the menu and the new one added.
	this.addDishToMenu = function(id) {
		menu[this.getDish(id).type] = id; 
		
		notifyObservers();
	}

	//Removes dish from menu
	this.removeDishFromMenu = function(id) {
		var type = this.getDish(id).type;
		if(menu[type] == id) {
			delete menu[type];
		}
		notifyObservers();
	}

	//function that returns all dishes of specific type (i.e. "starter", "main dish" or "dessert")
	//you can use the filter argument to filter out the dish by name or ingredient (use for search)
	//if you don't pass any filter all the dishes will be returned
	this.getAllDishes = function (type,filter) {
	  return $(dishes).filter(function(index,dish) {
		var found = true;
		if(filter){
			found = false;
			$.each(dish.ingredients,function(index,ingredient) {
				if(ingredient.name.indexOf(filter)!=-1) {
					found = true;
				}
			});
			if(dish.name.indexOf(filter) != -1)
			{
				found = true;
			}
		}
	  	return dish.type == type && found;
	  });	
	}


}
