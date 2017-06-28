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
//feel like this can be made smaller

/*
 * Programming Quiz: Using the Rest Parameter (1-5)
 */

// your code goes here


function average(...nums) {
  let total = 0;
  for (const num of nums){
    total += num;
  }
  return nums.length === 0 ? 0 : total / nums.length;

}

console.log(average(2, 6));                 //should return 4
console.log(average(2, 3, 3, 5, 7, 10));    //should return 5
console.log(average(7, 1432, 12, 13, 100)); //should return 312.8
console.log(average());                     //should return 0
