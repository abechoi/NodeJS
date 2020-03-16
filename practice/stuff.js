var arrayLength = function(arr){
    return `array length =  ${arr.length}`;
};

var adder = function(a,b){
    return `The sum = ${a+b}`;
};

var pi = 3.14;

module.exports = {
    arrayLength : arrayLength,
    adder : adder,
    pi : pi,
};