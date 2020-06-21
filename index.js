// var nationals = "country vn";
// let splitString = nationals.split("");
// console.log(splitString,'[splitString]');

// let reverseString = splitString.reverse();
// console.log(reverseString,'[reverseString]');

// let unsplitString = reverseString.slice(0,2);
// console.log(unsplitString,'[unsplitString]');

// let vnString = unsplitString.reverse().join("");
// console.log(vnString,'[vnString]');



// const obj = {
//     name: 'doshi',
//     age: 20,
//     parent: {
//         father: 'ba',
//         mother: 'me'
//     }
// }

// function getFM({parent: {father : dad, mother:mom}}) {
//     return `${dad} ${mom}`;
// }
// console.log(getFM(obj));
// const myArray = ['truong', 'chung', 'tien', 'dung'];

// const myObj = {
//     name: "truong",
//     age : 21 
// };

// console.log(...myObj);
// console.log(...myArray);


const myFn = (name = "tien") => console.log(name);
myFn();