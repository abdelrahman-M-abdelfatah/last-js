// // if (true) {
// //     let month;
// //     console.log(month);
// //     let year = 1999;
// //     console.log(year);

const { Double } = require("typeorm")

// // }
// // // console.log(year);
// function anything(value) {
//     var myvar = 'abdo';
//     console.log(myvar);
//     if (value) {
//         let myvar = 'ali';
//         console.log(myvar);
//     }
// }
// anything(true);
Double(5);

function Double(x) {
    return x * 2;

}
var num;
console.log(num);
var str = 'hello world';
console.log(str);

function Double(num) {
    console.log(myvariable);
    var myvariable;
    return num * 2;
}

function double(num) {
    var myVariable; // moved to the top
    console.log(myVariable); // => undefined
    return num * 2;
}
double(3);

function sum(a, b) {
    console.log(myString); // => undefined
    var myString = 'Hello World';
    console.log(myString); // => 'Hello World'
    return a + b;
}
sum(16, 10);

function sum(a, b) {
    var myString; // moved to the top
    console.log(myString); // => undefined
    myString = 'Hello World'; // remains
    console.log(myString); // => 'Hello World'
    return a + b;
}
sum(16, 10); // => 26
if (true) {
    let month;
    console.log(month); // => undefined  
    let year = 1994;
    console.log(year); // => 1994
}
console.log(year);

function isTruthy(value) {
    var myVariable = 'Value 1';
    if (value) {

        console.log(myVariable);
        let myVariable = 'Value 2';
        console.log(myVariable); // => 'Value 2'
        return true;
    }
    return false;
}
isTruthy(1)