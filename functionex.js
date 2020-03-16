// FUNCTION EXPRESSIONS

// Normal Expression
function sayHi(){
    console.log('Hi');
}
sayHi();

// Function expression
var sayBye = function(){
    console.log('Bye');
};
//sayBye();

// Function as an argument
function callFunction(fun){
    fun();
}
callFunction(sayBye);