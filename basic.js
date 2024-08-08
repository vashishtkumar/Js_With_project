/*console.log(a); // will give undefined as because only declration is hosted not the intialization;
var a=10;
*/





// FUNCTION
/*
// Normal function
var result=add(5,6);
console.log(result);

function add(a,b){
    return a+b;
}

var result=add(5,6);
console.log(result);

// anonymous functoin
//console.log(adda(5,7)); // cant use this like that in case of var it will say it is not a function and if it let then it will get get get without intitalization

var add=function(a,b){
    return a+b;
}
console.log(add(5,7));

// arrow function 
console.log(a(4,5)); // it will alse give error  cant access before intialization
let a=(a,b)=>a+b;
console.log(a(4,5));

*/





//ARGUMENTS

/*let a=function(){
    return arguments[0]+arguments[1];
}
console.log(a(4,5));

/// arguments are not alowed in arrow function.
*/





// FUNCTION AS ARGUMENTS

/*
function print(){
    console.log("Argument function has been called succesfully");
}

function first(t){
    console.log("1st function is executed an di am going to call another one");
    arguments[0]();
    t();
}


first(print);
*/





// ARRAY
/*
let arr=[];
let arr1=new Array();

arr1.push(89);
arr1.push("vashisht","890","chitkara","university"); // return length of Array;
console.log(arr1);
arr1.pop();// remove last element and returns its value;
arr1.unshift("90","kumar"); // returns the new length of the array
console.log(arr1);
arr1.shift();// remove the first element;

console.log(arr1.slice(1,3));
console.log(arr1);
arr1.splice(2,1);
console.log(arr1);

for(let x in arr1){
    console.log(arr1[x]);
    arr1[x]+="js";
}                           /// can used for modification;
console.log(arr1);

for(let x of arr1){
    console.log(x);   // can't be modified;
}
    // Array is also a objectt having key as 0,1,2,3 etc i.e index
*/






// OBJECTS
/*
let obj={
    name:"vashisht",
    id:2211981457,
    batch:"BE CSE",
}
let id=obj.id;
obj["name"]="vashsiht kumar";
obj[id]=22119814577;
obj.role="student";

for(let x in obj){
    console.log(obj[x]);
}

console.log(obj.hasOwnProperty("role"));
*/



