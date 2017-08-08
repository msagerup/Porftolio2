
 // BUDEGET CONTROLLER 
var budgetController = (function () {
	
	//some code

})();



	// UI CONTROLLER
var UIController = (function () {
	
	return {
		getinput: function () {
			return {
				 type: document.querySelector('.add__type').value, // will be either inc or exp(
				 description: document.querySelector('.add__description').value,	
				 value: document.querySelector('.add__value').value
			};
		}
	};

})();

	//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtr) {


	var ctrlAddItem = function () {

		// 1. Get field input data
		var input = UICtr.getinput();
		console.log(input);


		// 2. Add item to the budget controller

		//3. Add the new item to UI

		// 4. Calculate the budget

		//5. Display the budget
		console.log('it works');

	}
	
	document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

	document.addEventListener('keypress', function (event) {
		
		if (event.keyCode === 13) {
			ctrlAddItem();
		}
	});

})(budgetController, UIController);




