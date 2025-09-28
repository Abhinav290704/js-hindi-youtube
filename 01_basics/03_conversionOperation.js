let score = "33abc";


let valueInNumber = Number(score)
console.log(typeof valueInNumber); //number
console.log(valueInNumber); //Nan

//33 => 33
// "33abc" => Nan (Not a number)
// true => 1; false => 0;

let abc = "Abhinav";
let valueNumber = Number(abc)
console.log(valueNumber); //output =.Nan
//If we convert a string into a number then the output will be Nan

let isLoggedIn = "Abhinav";
let convert = Boolean(isLoggedIn);
console.log(convert); //true
console.log(typeof convert); //Boolean

//If we convert an empty string into boolean then it will give us false
//If we convert an string into boolean then it will give us true

let num = 290704;
let newNum = String(num);
console.log(newNum); //290704
console.log(typeof newNum); //string

//We can easily convert a number into a string!