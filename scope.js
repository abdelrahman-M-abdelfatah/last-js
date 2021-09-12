// // // // // // // // const message = 'hello';
// // // // // // // // console.log(message) //hello
// // // // // // // //     //1.the scope
// // // // // // // if (true) {
// // // // // // //     const message = 'hello';
// // // // // // //     console.log(message); //hello
// // // // // // // }
// // // // // // // console.log(message); //error
// // // // // // if (true) {
// // // // // //     const message = 'hello';
// // // // // //     console.log((message)); //hello
// // // // // // }
// // // // // // console.log(message); //referance error
// // // // // for (const color of['green', 'red', 'black']) {

// // // // //     const message = 'hello ';
// // // // //     console.log(color); //['green', 'red', 'black']
// // // // //     console.log(message); //hello, hello, hello
// // // // // }
// // // // // console.log(color); //error
// // // // // console.log(message); //error
// // // // {
// // // //     const message = 'hello';
// // // //     console.log(message); //hello
// // // // }
// // // // console.log(message); //error
// // // if (true) {
// // //     var count = 0;
// // //     console.log(count); //0
// // // }
// // // console.log(count); //0
// // function run() {
// //     var message = 'welcome to your house';
// //     console.log(message);
// // }
// // run(); //welcome to your house
// // console.log(message); //error
// function run() {
//     const two = 2;
//     let count = 0;

//     function run2() {
//         console.log(two);
//         console.log(count);
//         console.log(run2);
//     }
//     console.log(20);
// }
// run();
// // console.log(two);
// // console.log(count);
// // console.log(run2);