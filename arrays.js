var students = ["Tristan", "Stanley", "Stan", "Pan"];
var numberAccidents = ["1", "2", "3", "4"];
var favoriteColor = ["pink", "blue", "green", "orange"];
students.pop()
console.log (students);
// pop function will remove the last element from the array and return that element... thus pan was removed and returned
numberAccidents.shift()
console.log(numberAccidents);
// shift function will remove the first element from the array and return that element... thus 1 was removed
favoriteColor.push("Brown");
console.log(favoriteColor)
// push function adds one or more elements to the end of the array, thus brown was added and will create a new length of the array

// In order to save the computer time and energy, index positions start at 0-- for example, when looking at var students we can assign Tristan to 0 and Pan to 3, the students inbetween represent numerical positions 1 and 2. If we started at 1, the computer would work harder by adding 1 to those positions using N+1
