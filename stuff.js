var counter = function(arr) {
    return 'there is ' + arr.length + 'elements is this array';
}
var adder = function(a, b) {
    return `the result is ${a+b}`;
}
var pi = Math.PI;

// module.exports.counter = counter;
// module.exports.adder = adder;
// module.exports.pi = pi;
//بص بقا يا رايق انته ممكن تختصرالهري ده عن طريق انك تشيلسطر الmodule.exports.anythingوتحطه بدل تعريف الvariableاشطااشطا
module.exports = {
    counter: counter,
    adder: adder,
    pi: pi
}