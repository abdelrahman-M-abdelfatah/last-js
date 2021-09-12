// alert("hello bro");
// //for loops
// for (let i = 0; i < 5; i++) {
//     console.log(`in loop num ${i}`);
// }
// const names = ['shaun', 'abdo', 'ali'];
// for (let i = 0; i < names.length; i++) {
//     // console.log(names[i]);
//     let html = `<div>${names[i]}</div>`;
//     console.log(html);
// }
// //while loops
// let i = 0;
// while (i < 5) {
//     console.log('in loop ' + i);
//     i++;
// }
// i = 0;
// do {
//     console.log('this is ' + i);
//     i++;
// }
// while (i < 5);
// const age = 25;
// if (age > 20) {
//     console.log('you are over 20');
// }
// const ninjas = ['abdo', 'amr', 'mahmoud'];
// if (ninjas.length > 2) {
//     console.log(`that is a lot of ninjas`);
// }
// const password = 'pass';
// if (password.length >= 8) {
//     console.log('that is long enough password');
// } else if (password.length != 8) {
//     console.log('not long enough');
// }

// function callback() {
//     console.log('tomeout compleated');
// }
// setTimeout(callback, 5000);

// function greet() {
//     console.log('hello mother fucker');
// }
// const speak = function() {
//     console.log('it\'s a good day');

// }
// speak();
// greet();
// //if you want to make adefault value in a function do this:
// function test(name = 'abdo') {
//     console.log(name);
// }
// test('ali');
// //arrow function
// const calcarea = redias => 3.14 * redias ** 2;
// const greet = () => 'hello world';
// const bill = (products, tax) => {
//     let total = 0;
//     for (let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
//ToDO objects
// let user = {
//     name: 'abdelrahamn',
//     age: 22,
//     email: 'abdo.mohamed7891@gmail.com',
//     location: 'shoubra',
//     blogs: ['first thing', 'second thing'],
//     login: () => {
//         console.log('the user is login')
//     }
// };
// console.log(user);
// let x = user;
// console.log(x.name);
// x.name = 'ali';
// console.log(user.name);
// console.log(user.name);
// user.login();



// const para = document.querySelector('div.error');
// const paras = document.querySelectorAll('.error');
// const element = document.getElementById('new');
// const elements = document.getElementsByClassName('error');
// console.log(para);
// const elements = document.getElementsByTagName('p');
//there is a problem with class and tag names it can't be treated an arrayusing foreach
// const para = document.querySelector('P');
// // para.innetText = ;
// para.innerText = 'anything';
// console.log(para);
// para.setAttribute('color', 'red');
// para.style.color = 'blue';
// const str = para.getAttribute('style');
// const request = new XMLHttpRequest();
// request.addEventListener('readystatechange', () => {
//     // console.log(request, request.readyState);
//     if (request.readyState === 4) {
//         console.log(request.responseText)
//     }
// });
// request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
// request.send();

// const gettodos = (callback) => {
//     const request = new XMLHttpRequest();
//     setTimeout(3000);
//     request.addEventListener('readystatechange', () => {
//         if (request.readyState === 4 && request.status === 200) {
//             callback(undefined, request.responseText);
//         } else if (request.readyState === 4) {
//             callback('error', undefined);
//         }
//     });
//     request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');
//     request.send();
// };
// console.log(1);
// console.log(2);
// gettodos((err, data) => {
//     console.log('callback fires');
//     console.log(err, data);
// });
// console.log(3);
// console.log(4);
const gettodos = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        } else if (request.readyState === 4) {
            callback('error msg' + request.status, undefined);
        }
    });
    request.open('GET', 'todos.json');
    request.send();
};
gettodos((error, data) => {
    if (error !== undefined) {

        console.log(data);
    } else {
        console.log(error);
    }
});