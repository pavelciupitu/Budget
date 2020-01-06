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
            var newItem, ID;

            //Create new ID
            // ID = last ID +1
            if(data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else{
                ID = 0;
            }

            //Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            }
            else if (type === 'inc') {
                newItem = new Income(ID, des, val);
            }

            //Push it into our data structure
            data.allItems[type].push(newItem);

            //Return the new element
            return newItem;
        },
        testing: function() {
        console.log(data);
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
        incomeContainer: '.income__list',
        incomeContainer: '.expenses__list'
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

        addListItem: function(obj, type) {
            var html, newHtml, element;
            //Create HTML string with placeholder text
            if(type === 'inc'){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="income-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
            } else if(type === 'exp') {
                element = DOMstrings.expensesContainer;
                html = '<div class="item clearfix" id="expense-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';          
            }
            //Replace the placeholdertext with some actual data
            
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description);
            newHtml = newHtml.replace('%value%',obj.value);

            //Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)

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
            //console.log ('You havent\'t press enter, so press enter');
        });
    };

    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {

        var input, newItem;

        //TODO:

        // 1. Get the filed input data

        input = UICtrl.getInput();

        // console.log(input);

        // 2.  Add the item to the budget controller

        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add the item to the UI

        UICtrl.addListItem(newItem, input.type);

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

// function newFunction() {
//         var ;
//     }
