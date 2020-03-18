// Import and utilize 3 vars from stuff.
var stuff = require('./stuff');
console.log(stuff.arrLength([1,2,3]));
console.log(stuff.adder(3,4));
console.log(stuff.pi);

// Utilize the set timeout function that
// times out at 3 seconds.
//setTimeout( ()=> console.log('3 seconds have passed'), 3000);

// Utilize the set interval function that 
// prints out time every 2 seconds and
// stops after 5.
var time = 0;
var timerID = setInterval( () => (
    time+=2,
    console.log(`${time} seconds have passed.`),
    time > 5 && clearInterval(timerID)
), 2000);

// Create a Person object that takes a 
// name, have this object inherit event
// emitter. Then create an array with 3
// people of the Person objects and have
// ech of them emit a message.
var events = require('events');
var util = require('util');
var Person = function(name){
    this.name = name;
};
util.inherits(Person, events.EventEmitter);

var choi = new Person('choi');
var jong = new Person('jong');
var hae = new Person('hae');

var people = [choi, jong, hae];
people.forEach((person) => (
    person.on('speak', (msg) => 
        console.log(`${person.name}: ${msg}`)
    )
));
choi.emit('speak', "Hello everyone.");
jong.emit('speak', "I'm hungry.");
hae.emit('speak', "I'm eating yogurt");