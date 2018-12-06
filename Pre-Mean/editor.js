function mMA(arr){
    var max = arr[0];
    var min = arr[1];
    var sum = 0;
    for(var i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        sum += arr[i];
    }
    avg = sum / arr.length;
    console.log(sum);
    return "The max value is: " + max + ". The min value is: " + min + ". And the average is: " + avg;
}
// var arr = [1, 9, -8, 12, 5];
// console.log(mMA(arr));


function fizzBuzz(n) {
    var str = "";
    if (n < 0 || isNaN(n)) {
        str += "Parameter must be a positive number";
        return str
    }
    for (i = 1; i <= n; i++) {
        if (i == n) {
            if (i % 15 == 0) {
                str += "and FizzBuzz.";
            }
            else if (i % 5 == 0) {
                str += "and Buzz";
            }
            else if (i % 3 == 0) {
                str += "and Fizz";
            }
            else {
                str += "and " + i;
            }
        }
        else {
            if (i % 15 == 0) {
                str += "FizzBuzz, ";
            }
            else if (i % 5 == 0) {
                str += "Buzz, ";
            }
            else if (i % 3 == 0) {
                str += "Fizz, ";
            }
            else {
                str += i + ", ";
            }
        }
    }
    return str;
}

// console.log(fizzBuzz(16));
// console.log(fizzBuzz(-1));
// console.log(fizzBuzz("Hi"));

function validBraces(str){

    var arr = ['(', '[', '{'];
    var stack = []; //Treating this arr like a stack

    for(var i = 0; i < str.length - 1; i++){
        console.log(stack);
        if(str[i] == '(' || str[i] == '[' || str[i] == '{'){
            stack.push(str[i]);
        }
        else if(str[i] == ')'){
            var temp = stack.pop();
            if(temp == '('){
                continue;
            }
            else{
                return false;
            }
        }
        else if(str[i] == ']'){
            var temp = stack.pop();
            if(temp == '['){
                continue;
            }
            else{
                return false;
            }
        }
        else if(str[i] == '}'){
            var temp = stack.pop();
            if(temp == '{'){
                continue;
            }
            else{
                return false;
            }
        }
       
    }
    return true;
}

// console.log(validBraces('{([()]})'));
// console.log(validBraces('(([()]))'));
// console.log(validBraces('()'));

function bubbleSort(arr){
    for(var k = 0; k < arr.length; k++){
        var count = 0; // Count will see if any changes were made, if not then the array must already be sorted
        for(var i = 0; i < arr.length - 1; i++){
            if(arr[i] > arr[i + 1]){
                var temp = arr[i];
                arr[i] = arr[i + 1];
                arr[i + 1] = temp;
                count++;
            }
        }
        console.log(count);
        if(count == 0){
            break;
        }
    }
    console.log(arr);
}

// bubbleSort([1,5,6,8,9,4,5,7,2]);
// bubbleSort([1,7,8,9]);

function coinChange(num){
    var change = {dollars: 0, quarters: 0, dimes: 0, nickles: 0, pennies: 0}
    while(num != 0){
        if(num >= 100){
            num -= 100;
            change.dollars++;
        }
        else if(num >= 25){
            num -= 25
            change.quarters++;
        }
        else if(num >= 10){
            num -= 10;
            change.dimes++;
        }
        else if(num >= 5){
            num -= 5
            change.nickles++;
        }
        else if(num >= 1){
            num -= 1
            change.pennies++;
        }

    }
    return change;
}

// console.log(coinChange(0));
// console.log(coinChange(246));
// console.log(coinChange(27));
// console.log(coinChange(75));
// console.log(coinChange(112));


function userLanguages(users){
    for(var i = 0; i < users.length; i++){
        var str = "";
        var str2 = "";
        str += users[i].fname + " ";
        str += users[i].lname + " knows";
        for (var k = 0; k < users[i].languages.length; k++){
            if(k + 1 == users[i].languages.length){
                str += " and"
            }
            str += " " + users[i].languages[k];
            
        }
        str += ".";
        str2 += users[i].fname + " is also interested in ";

        for(var category in users[i].interests){
            for(var j = 0; j < users[i].interests[category].length; j++){
                str2 += users[i].interests[category][j] + ", ";
            }
        }
        console.log(str);
        console.log(str2);
    }

}


// users = [
//     {
//         fname: "Kermit",
//         lname: "the Frog",
//         languages: ["Python", "JavaScript", "C#", "HTML", "CSS", "SQL"],
//         interests: {
//             music: ["guitar", "flute"],
//         dance: ["tap", "salsa"],
//         television: ["Black Mirror", "Stranger Things"]
//     }
// },
// {
//     fname: "Winnie",
//     lname: "the Pooh",
//     languages: ["Python", "Swift", "Java"],
//     interests: {
//         food: ["honey", "honeycomb"],
//         flowers: ["honeysuckle"],
//         mysteries: ["Heffalumps"]
//     }
//     },
//     {
//         fname: "Arthur",
//         lname: "Dent",
//         languages: ["JavaScript", "HTML", "Go"],
//         interests: {
//             space: ["stars", "planets", "improbability"],
//             home: ["tea", "yellow bulldozers"]
//         }
//     }
// ]

// userLanguages(users);

//recursively 
function binarySearch(arr, num, index = 0){
    console.log(arr);
    for(var i = 0; i < arr.length / 2; i++){
        continue;
    }
    if(arr[i] == num){
        return index + i;
    }
    if(arr.length == 1){
        return -1;
    }
    if(arr[i] > num){
        arr.splice(i, arr.length / 2);
        return binarySearch(arr, num, index += i);
    }
    else{
        arr.splice(0, arr.length / 2);
        return binarySearch(arr, num, 0);
    }
}

// var arr = [1,4,6,8,9,10,23,25,35,42,58,64]; //Length = 12
// console.log(binarySearch(arr, 25));