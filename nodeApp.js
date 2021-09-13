// // // console.log('hello abdo');
// // // setTimeout(function() {
// // //     console.log('5 seconds have passed');
// // // }, 5000);
// // // let time = 0;
// // // let timer = setInterval(() => {
// // //     time += 2;
// // //     console.log(time + ' seconds has based');
// // //     if (time > 10) {
// // //         clearInterval(timer);
// // //     }
// // // }, 2000);
// // // console.log(__dirname);
// // // console.log(__filename);
// // //normal function
// // function sayhi() {
// //     console.log('hi');
// // }
// // sayhi();
// // let x = function sayhitooo() {
// //     console.log('hi');
// // };
// // x();


// // function callfunction(x = () => {
// //     console.log('hi');
// // }) {
// //     x();
// // }
// // callfunction(x);
// const stuff = require("../stuff");
// console.log(stuff.counter(['abdo', 'ali', 'mohamed']));
// console.log(stuff.adder(5, 6));
// console.log(stuff.pi);
// const events = require('events');
// const myemmitter = new events.EventEmitter();
// myemmitter.on('click', function(msg) {
//     console.log(msg);
// });
// myemmitter.emit('click', 'this event was emmitted');
var events = require('events');
var util = require('util');
var person = function(name) {
    this.name = name;
}
util.inherits(person, events.EventEmitter);
var jams = new person('jams');
var ali = new person('ali');
var abdo = new person('abdo');
var people = [jams, ali, abdo];
people.forEach(function(person) {
    person.on('speak', function(msg) {
        console.log(msg + person.name);
    })
})
jams.emit('speak', 'hello');