// Remove duplicate values from an array (hint: use Set).

let Numbers = [1,2,3,6,3,8,1];

 let mySet = new Set(Numbers);

console.log(mySet);





 let numbers = [1, 2, 3, 4, 2, 1, 7];


let uniqueNumbers = [...new Set(numbers)];

console.log(uniqueNumbers);