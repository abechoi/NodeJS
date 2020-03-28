var arrayLength = (arr) => {
    return `array length = ${arr.length}`;
};

var adder = function(a,b){
    return `sum = ${a+b}`;
};

var pi = 3.14;

module.exports = {
    arrayLength: arrayLength,
    adder : adder,
    pi : pi,
};