// Imports the function named counter from count.js to var counter.
var stuff = require('./stuff');
// Used for the Node Event Emitter
var events = require('events');
var util = require('util');

/*
setTimeout( // takes 2 parameters
    // parameter 1: a callback function that logs a message.
    () => console.log('3 seconds have passed'),
    // parameter 2: 3000 milliseconds = 3 seconds.
    3000
);
*/
var time = 0;
var timer = setInterval(() => 
    (
    time+=2, 
    console.log(time + ' seconds have passed'),
    time > 5 && clearInterval(timer)
    ),
    2000
);

//console.log(__dirname);
//console.log(__filename);

/*
console.log(stuff.counter(['Choi','Jong','Hae']));
console.log(stuff.adder(2,3));
console.log(stuff.pi);
*/

// Node Event Emitter
/*
// Example 1
var myEmitter = new events.EventEmitter();

myEmitter.on('someEvent', function(msg){
    console.log(msg);
});
// 1st arg is the name of the event.
// 2nd arg is the message.
myEmitter.emit('someEvent', 'The event was emitted.'); 
*/

var Person = function(name){
    this.name = name;
}
util.inherits(Person, events.EventEmitter);

var choi = new Person('choi');
var jong = new Person('jong');
var hae = new Person('hae');
var people = [choi, jong, hae];
/*
people.forEach(function(person){

    person.on('speak', function(msg){

        console.log(person.name + ' said: '+msg);

    });

});
*/
people.forEach(person =>
    person.on('speak', msg =>
        console.log(person.name + ' said: '+msg)
    )
);

choi.emit('speak', "hello everyone.");
jong.emit('speak', "I'm hungry.");