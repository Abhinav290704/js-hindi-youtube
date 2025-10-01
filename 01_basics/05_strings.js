//String is an Object!!
const name = "Abhinav"
const repoCount = 50

//console.log(name + repoCount + " value"); //outdated type to add strings
//Here is the modern type: 
console.log(`Hello, my name is ${name} and my repo count is ${repoCount}`);

const gameName = "abhinavGaur";
console.log(gameName.length); // 11
console.log(gameName.charAt(2)); // h
console.log(gameName.indexOf("G")); // 7

const newString = gameName.substring(0, 4)
console.log(newString); // abhi
