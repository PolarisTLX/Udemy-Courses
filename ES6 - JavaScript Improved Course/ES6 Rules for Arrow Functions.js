//Convert a function to an arrow function
const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(function(name) {
  return name.toUpperCase();
});
// With the function above, there are only a few steps for converting the
//existing "normal" function into an arrow function.
//
// remove the function keyword
// remove the parentheses
// remove the opening and closing curly braces
// remove the return keyword
// remove the semicolon
// add an arrow ( => ) between the parameter list and the function body

const upperizedNames = ['Farrin', 'Kagure', 'Asser'].map(name => name.toUpperCase());
