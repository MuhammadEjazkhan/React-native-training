///if Else and Equation sign values

// const a=5;
// const b=5;
// const c=10;

// if (typeof a == typeof b && typeof a == typeof c && typeof b == typeof c) {
//   console.log("Type  are equal");
// } else if( a==b && b==c && a==c) {
//   console.log('Values are not equal');
// }
// else if(a===b && b===c && c==a){
// console.log("type and values both are equal")
// }

// import data from "./data.json"

// const data =[
//   {
//     name: 'Ejaz',
//     color: 'red',
//     address: 123,
//     object:{
//       abc:111222
//     }
//   },
//   {
//     name: 'Ali',
//     color: 'black',
//     address: 333,
//   },
//   {
//     name: 'Nouman',
//     color: 'white',
//     address: 444,
//   },
// ];
// console.log(data[2].name)
function findGreatest(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }
}

let num1 = 10, num2 = 20, num3 = 15; // Example values
let greatest = findGreatest(num1, num2, num3);
console.log('The greatest number is'[greatest]);