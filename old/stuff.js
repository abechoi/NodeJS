//----------
// VERSION 1
//----------
/*
module.exports.counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array.';
};
module.exports.adder = function(a,b){
    return `The sum = ${a+b}`;
};
module.exports.pi = 3.142;
*/
//----------
// VERSION 2
//----------
var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array.';
};
var adder = function(a,b){
    return `The sum = ${a+b}`;
};
var pi = 3.142;
// VERSION 2.1
// exports the function named counter
/*
module.exports.counter = counter; 
module.exports.adder = adder; 
module.exports.pi = pi; 
*/
// VERSION 2.2
// 
module.exports = {
    counter : counter,
    adder : adder,
    pi : pi,
};