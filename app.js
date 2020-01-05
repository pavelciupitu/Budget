//!Budget Controller
var budgetController = (function() {
    
    // Make 2 function construction for expenses and incomes.
    var Expense = function(id, description, value){
        this.id = id;
        this.description =  description;
        this.value = value;
    };
    var Income = function(id, description, value){
        this.id = id;
        this.description =  description;
        this.value = value;
    };
    
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
    };

    return {
        addItem: function(type, des, val) {
            var newItem;
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            }
            else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

        }
    }

})();

//!UI Controller
var UIController = (function() {

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
    };



    //private code
    return {
        getInput: function() {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // will be inc for + and exp for -
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };

        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
})();

//! GLOBAL APP Controller
var controller = (function(budgetCtrl, UICtrl) {
    
    var setupEventListeners = function(){

        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click', ctrlAddItem) //Click with the mouse on the UI

        document.addEventListener('keypress', function(event) {
            if(event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
                //console.log ('Sum to the total')
            } 
            else //console.log ('You havent\'t press enter, so press enter');
        });
    };

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {

        //TODO:

        // 1. Get the filed input data

        var input = UICtrl.getInput();

        // console.log(input);

        // 2.  Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('Sombody wants to add something')

    };

    return {
        init: function() {
            console.log('Aplication has started')
            setupEventListeners();
        }
    }

})(budgetController, UIController);

controller.init();

function newFunction() {
        var ;
    }
