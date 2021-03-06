
 // BUDEGET CONTROLLER 
var budgetController = (function () {
	
	var Expense = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};

	var Income = function(id, description, value) {
		this.id = id;
		this.description = description;
		this.value = value;
	};


	var data = {
		allItems: {
			exp: [],
			inc: [],
		},
		totals: {
			exp: 0,
			inc: 0
		}
	};

	return {
		addItem: function (type, des, val) {
			var newItem, ID;

			ID = data.allItemItems[type][data.allItems[type].length -1].id +1;


			if(type === 'exp') {
				newItem = new Expense(ID, des, val);
			} else if (type === 'inc') {
				newItem = new Income(ID, des, val)
			}
			
			data.allItems[type].push(newItem)
			return newItem;
		}
	};

})();



	// UI CONTROLLER
var UIController = (function () {

	var DOMstrings = {
		inputType: '.add__type',
		inputDescription: '.add__description',
		inputValue: '.add__value',
		inputBtn: '.add__btn'
	};
	
	return {
		getinput: function () {
			return {
				 type: document.querySelector(DOMstrings.inputType).value, // will be either inc or exp(
				 description: document.querySelector(DOMstrings.inputDescription).value,	
				 value: document.querySelector(DOMstrings.inputValue).value
			};
		},

		getDOMstrings: function() {
			return DOMstrings;
		}
	};

})();

	//GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtr) {

	var setupEventListeners = function () {
		var DOM = UICtr.getDOMstrings();
		
		document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem);

		document.addEventListener('keypress', function (event) {
			if (event.keyCode === 13) {
				ctrlAddItem();
			}
		});

	};


	

	var ctrlAddItem = function () {
		var input, newItem;
		// 1. Get field input data
		var input = UICtr.getinput();
		console.log(input);


		// 2. Add item to the budget controller
		var newItem = budgetCtrl.addItem(input.type, input.description, input.description);
		//3. Add the new item to UI

		// 4. Calculate the budget

		//5. Display the budget
		console.log('it works');

	};
	
	return {
		init: function () {
			console.log('application started');
			setupEventListeners();
		}
	};
	

})(budgetController, UIController);


controller.init();

