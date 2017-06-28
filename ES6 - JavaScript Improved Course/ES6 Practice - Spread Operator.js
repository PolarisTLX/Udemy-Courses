/*
 * Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
 */

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

//const produce = [];
const produce = [...fruits, ...vegetables];

console.log(produce);

//OUTPUT:
//[ 'apples', 'bananas', 'pears', 'corn', 'potatoes', 'carrots' ]

//REST operator does the opposite but also used the ""...":
