//.add() and .delete() methods:

const games = new Set(['Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart', 'Super Mario Bros.']);

games.add('Banjo-Tooie');
games.add('Age of Empires');
games.delete('Super Mario Bros.');

console.log(games);
//Set {'Banjo-Kazooie', 'Mario Kart', 'Banjo-Tooie', 'Age of Empires'}


//On the other hand, if you want to delete all the items from a Set, you can use the .clear() method.

games.clear()
console.log(games);
//Set {}

const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);


//Use the .size property to return the number of items in a Set:

console.log(months.size);
//12


//Use the .has() method to check if an item exists in a Set. If the item is in the Set, then .has() will return true. If the item doesn’t exist in the Set, then .has() will return false.

console.log(months.has('September'));
//true

console.log(months.values());
//SetIterator {'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'}


//WeakSets:

const uniqueFlavors = new WeakSet();
const flavor1 = {flavor: 'chocolate'};
const flavor2 = {flavor: 'mocha'};

console.log(uniqueFlavors);

uniqueFlavors.add(flavor1);
console.log(uniqueFlavors);

uniqueFlavors.add(flavor2);
console.log(uniqueFlavors);

uniqueFlavors.add(flavor1);
console.log(uniqueFlavors);


//Maps and WekaMaps
//Note:  Sets are to arrays, as Sets have only unique values
//as Maps are to Objects, as Maps have unique Key: Value pairs.

//Unlike Sets, you can’t create Maps from a list of values; instead,
//you add key-values by using the Map’s .set() method.

//THAT IS FUCIKNG STUPID!!!!  XP  XP  XP

//TIP: If you .set() a key-value pair to a Map that already uses the same key,
//you won’t receive an error, but the key-value pair will overwrite
//what currently exists in the Map.
//Also, if you try to .delete() a key-value that is not in a Map,
//you won’t receive an error, and the Map will remain unchanged.

//Both methods return true if a key-value pair is successfully added
// or deleted from the Map and false if unsuccessful.

//After you’ve built your Map, you can use the .has() method
//to check if a key-value pair exists in your Map by passing it a key.



//And you can also retrieve values from a Map, by passing a key to the .get() method.

const members = new Map();

members.set('Evelyn', 75.68);

console.log(members.get('Evelyn'));
//75.68

//MAYBE THIS BELOW IS WHAT EXPLAINS the [Symbol.iterator]()
//Using both the .keys() and .values() methods on a Map
//will return a new iterator object called MapIterator.
//You can store that iterator object in a new variable and use .next()
//to loop through each key or value. Depending on which method you use,
//will determine if your iterator has access to the Map’s keys or the Map’s values.
