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
