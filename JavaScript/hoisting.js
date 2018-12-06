// 1
//Given --------------------------
// console.log(hello);                                   
// var hello = 'world';    
//After Hoisting ------------------
// var hello;
// console.log(hello); //hello undefined
// hello = 'world';

// 2
// Given ------------------------
// var needle = 'haystack';
// test();
// function test(){
// 	var needle = 'magnet';
// 	console.log(needle);
// }
// After Hoisting -------------------
// var needle;
// function test(){
//     var needle;
//     needle = 'magnet';
//     console.log(needle); 
// }
// needle = 'haystack';
// test(); //Logs magnet


// 3
//Given -----------------------------
// var brendan = 'super cool';
// function print(){
// 	brendan = 'only okay';
// 	console.log(brendan);
// }
// console.log(brendan);
// After Hoisting -------------------
// var brendan;
// function print(){ //Is never called
//     brendan = 'only okay';
//     console.log(brendan);
// }
// brendan = 'super cool';
// console.log(brendan) // logs 'super cool'

// 4
//Given -------------------------------
// var food = 'chicken';
// console.log(food);
// eat();
// function eat(){
// 	food = 'half-chicken';
// 	console.log(food);
// 	var food = 'gone';
// }
//After Hoisting ----------------------
// var food;
// function eat(){
//     food = 'half-chicken';
//     console.log(food); //logs half-chicken
//     var food = 'gone';
// }
// food = 'chicken';
// console.log(food); //logs 'chicken'
// eat();


// 5
//Given -------------------------------
// mean();
// console.log(food);
// var mean = function() {
// 	food = "chicken";
// 	console.log(food);
// 	var food = "fish";
// 	console.log(food);
// }
// console.log(food);
//After Hoisting ----------------------
// mean(); //Throws error, mean is not a function
// var mean = function(){
//     var food;
//     food = "chicken";
//     console.log(food);
//     food = "fish";
//     console.log(food);
// }
// console.log(food);
// console.log(food);


// 6
//Given -------------------------------
// console.log(genre);
// var genre = "disco";
// rewind();
// function rewind() {
// 	genre = "rock";
// 	console.log(genre);
// 	var genre = "r&b";
// 	console.log(genre);
// }
// console.log(genre);
//After Hoisting ----------------------
// var genre;
// function rewind(){
//     var genre;
//     genre = "rock";
//     console.log(genre); //logs "rock"
//     genre = "r&b";
//     console.log(genre); // logs "r&b"
// }
// console.log(genre); //undefined
// genre = "disco";
// rewind();
// console.log(genre);


// 7
//Given -------------------------------
// dojo = "san jose";
// console.log(dojo);
// learn();
// function learn() {
// 	dojo = "seattle";
// 	console.log(dojo);
// 	var dojo = "burbank";
// 	console.log(dojo);
// }
// console.log(dojo);
//After Hoisting ----------------------
function learn(){
    var dojo;
    dojo = "seattle";
    console.log(dojo);
    dojo = "burbank";
    console.log(dojo);
}
dojo = "san jose"; //Throw error dojo not declared
console.log(dojo);
learn();
console.log(dojo);

