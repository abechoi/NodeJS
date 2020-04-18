// ! Timers and Events

// TODO: Import and utilize 3 vars from stuff.
var stuff = require('./stuff');
console.log(stuff.adder(2,3));
console.log(stuff.pi);
console.log(stuff.arrayLength([2,3,4]));


// TODO: Utilize the set timeout function.

setTimeout(() => console.log("1 second has passed."), 1000);

// TODO: Utilize the set interval function.

var time = 0;
var timerID = setInterval(() => {
    time += 2;
    console.log(`${time} seconds have passed.`);
    time > 5 && clearInterval(timerID);
}, 2000);

// TODO: Event Handling...
// Create a Person object that takes a 
// name, have this object take on an event
// emitter. Then create an array with 3
// people of the Person objects and have
// each of them emit a message.

var events = require('events');
var util = require('util');

function Person(name){
    this.name = name;
}
util.inherits(Person, events.EventEmitter);
var choi = new Person('choi');
var jong = new Person('jong');
var hae = new Person('hae');
var people = [choi,jong,hae];

people.forEach((person) => {
    person.on('speak', (msg) => {
        console.log(`${person.name}: ${msg}`);
    });
});

choi.emit('speak', "Hello everyone!");
jong.emit('speak', "I'm hungry.");
hae.emit('speak', "I'm eating yogurt.");