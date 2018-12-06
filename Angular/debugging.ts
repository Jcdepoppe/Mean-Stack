var myString: any;
// I can assign myString like this:copy
myString = "Bee stinger";
// Why is there a problem with this? What can I do to fix this?
//You cannot put an int value into a var that is declared to be a string. 
//So I changed the type to any, so it can be changed to any type
myString = 9;

function sayHello(name: any){
    return `Hello, ${name}!`;
 }
 // This is working great:
 console.log(sayHello("Kermit"));
 // Why isn't this working? I want it to return "Hello, 9!"
 //The sayHello function is expecting a string to be passed in, but you tried to give it an int. 
 //So I changed the param type to any, you could also just pass in "9"
 console.log(sayHello(9));

 function fullName(firstName: string, lastName: string, middleName?: string){
    let fullName = `${firstName} ${middleName} ${lastName}`;
    return fullName;
 }
 // This works:
 console.log(fullName("Mary", "Moore", "Tyler"));
 // What do I do if someone doesn't have a middle name?
 //Make the middle name an optional param by putting a '?' at the end
 console.log(fullName("Jimbo", "Jones"));

 interface Student {
    firstName: string;
    lastName: string;
    belts: number;
 }
 function graduate(ninja: Student){
    return `Congratulations, ${ninja.firstName} ${ninja.lastName}, you earned ${ninja.belts} belts!`;
 }
 const christine = {
    firstName: "Christine",
    lastName: "Yang",
    belts: 2
 }
 const jay = {
    firstName: "Jay",
    lastName: "Patel",
    //Forgot the s in "belts". Watch for typos!
    belts: 4
 }
 // This seems to work fine:
 console.log(graduate(christine));
 // This one has problems:
 //Check jay obj
 console.log(graduate(jay));


 class Ninja {
    fullName: string;
    constructor(
       public firstName: string,
       public lastName: string){
          this.fullName = `${firstName} ${lastName}`;
       }
    debug(){
       console.log("Console.log() is my friend.")
    }
 }
 // This is not making an instance of Ninja, for some reason:
 //You dont need those parenthesis! ( ... Parenthesi? ... )
 const shane = Ninja;
 // Since I'm having trouble making an instance of Ninja, I decided to do this:
 const turing = {
    fullName: "Alan Turing",
    firstName: "Alan",
    lastName: "Turing"
 }
 // Now I'll make a study function, which is a lot like our graduate function from above:
 //In the problem above, you had an interface for ninja, not a class, so if your not using an interface, you must do it like this:
 function study(programmer: {fullName: string}){
    return `Ready to whiteboard an algorithm, ${programmer.fullName}?`
 }
 // Now this has problems:
 console.log(study(turing));

var increment = x => x + 1;
// This works great:
console.log(increment(3));
var square = x => (x * x);
// This is not showing me what I want:
// Dont need curlys around your x's
console.log(square(4));
// This is not working:
//Need those parenthesis around your params! (if you have multiple)
var multiply = (x,y) => x * y;
// Nor is this working:
//Need curlys around your function logic, if your doing multiple things!
var math = (x, y) => {
    let sum = x + y;
    let product = x * y;
    let difference = Math.abs(x - y);
    return [sum, product, difference];
}

class Elephant {
    constructor(public age: number){}
    //Dont need "this" because its a public variable?
    birthday = age => age += 1;
 }
 const babar = new Elephant(8);
 setTimeout(babar.birthday, 1000)
 setTimeout(function(){
    console.log(`Babar's age is ${babar.age}.`)
    }, 2000)
 // Why didn't babar's age change? Fix this by using an arrow function in the Elephant class.