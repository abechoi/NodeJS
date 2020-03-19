var arrLength = function(arr){
    return `Array Length = ${arr.length}`;
};

var adder = function(a, b){
    return `Sum = ${a+b}`;
};

var pi = 3.14;

module.exports = {
    arrLength : arrLength,
    adder: adder,
    pi : pi,
};