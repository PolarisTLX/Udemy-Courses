/*
 * Programming Quiz: Destructuring Arrays (1-3)
 *
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

const [one,,,two,,,,three] = things;
//TIP: You can also ignore values when destructuring arrays.
//For example, const [x, , z] = point; ignores the y coordinate and discards it.

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);

//OUTPUT:
// List of Colors
// 1. red
// 2. green
// 3. blue
