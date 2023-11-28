// Part 1 - Refactoring Old Code && // Part 2 -Expanding Functionality

const csv =
  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26\n";
let currentCell = 1;
let cell1 = [];
let cell2 = [];
let cell3 = [];
let cell4 = [];
let cells = [];

let cellsContainer = [];

for (let i = 0; i < csv.length; i++) {
  if (csv[i] === "\n") {
    ++currentCell;
  }

  if (currentCell === 1) {
    if (csv[i] !== "\n") {
      cell1.push(csv[i]);
    }
  } else if (currentCell === 2) {
    if (csv[i] !== "\n") {
      cell2.push(csv[i]);
    }
  } else if (currentCell === 3) {
    if (csv[i] !== "\n") {
      cell3.push(csv[i]);
    }
  } else if (currentCell === 4) {
    if (csv[i] !== "\n") {
      cell4.push(csv[i]);
    }
  }
}

cells[0] = cell1.join("").split(",");
cells[1] = cell2.join("").split(",");
cells[2] = cell3.join("").split(",");
cells[3] = cell4.join("").split(",");
console.log(cells);
console.table(cells);
cellsContainer.push(cells[0], cells[1], cells[2], cells[3]);
console.log(cellsContainer);

// Another solution for Part 2 - something is wrong with the first one. If I try to add another column I can't see it.

// const csv =
//  "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor's Assistant,26\n";

// let data = csv.split('\n');
//for (let i = 0; i < data.length; i++){
//  data[i] = data[i].split(',')
//}

// console.log(data);

//let columns = data[0].length;
//let arrNew = [];

//for(let i = 0; i <= data.length-1; i++){
//    let data1 = data[1]
//    arrNew[1] = data1
//}

//console.log(arrNew)


console.log("=============");

// Part 3:  Transforming Data

let csvArray = [
  ["ID", "Name", "Occupation", "Age"],
  ["42", "Bruce", "Knight", "41"],
  ["57", "Bob", "Fry Cook", "19"],
  ["63", "Blaine", "Quiz Master", "58"],
  ["98", "Bill", "Doctor's Assistant", "26"],
];

let csvNew = csvArray.flat();
console.log(csvNew);

//extract the keys
let keys = csvNew.slice(0, 4);
console.log(keys);

// Object 1
//extract the values
let value1 = csvNew.slice(4, 8);
console.log(value1);

let obj1 = {};

// loop through two arrays in one loop using the lenght of one; ! only if they have the same lenght; different lenght = > different solution

for (let i = 0; i < keys.length; i++) {
  obj1[keys[i].toLowerCase()] = value1[i];
}
console.log(obj1);

// Object 2

//extract the values
let value2 = csvNew.slice(8, 12);
console.log(value2);

let obj2 = {};

// loop through two arrays in one loop using the lenght of one; ! only if they have the same lenght; different lenght = > different solution
for (let i = 0; i < keys.length; i++) {
  obj2[keys[i].toLowerCase()] = value2[i];
}

console.log(obj2);

// Object 3

//extract the values
let value3 = csvNew.slice(12, 16);
console.log(value3);

let obj3 = {};

// loop through two arrays in one loop using the lenght of one; ! only if they have the same lenght; different lenght = > different solution
for (let i = 0; i < keys.length; i++) {
  obj3[keys[i].toLowerCase()] = value3[i];
}

console.log(obj3);

// Object 4

//extract the values
let value4 = csvNew.slice(16, 20);
console.log(value4);

let obj4 = {};

// loop through two arrays in one loop using the lenght of one; ! only if they have the same lenght; different lenght = > different solution
for (let i = 0; i < keys.length; i++) {
  obj4[keys[i].toLowerCase()] = value4[i];
}

console.log(obj4);

const arrNew = [];
arrNew.push(obj1, obj2, obj3, obj4);
console.log(arrNew);

// resources : https://www.geeksforgeeks.org/how-to-store-a-key-value-array-in-javascript/

console.log("=============");

// Part 4: Sorting and Manipulating Data

// [{ id: "42", name: "Bruce", occupation: "Knight", age: "41" },
// { id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
// { id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
// { id: "98", name: "Bill", occupation: "Doctor’s Assistant", age: "26" }]

// 1. Remove the last element from the sorted array.

arrNew.pop();
console.log(arrNew);

// 2. Insert the following object at index 1:
// { id: "48", name: "Barry", occupation: "Runner", age: "25" }

arrNew.splice(1, 0, {
  id: "48",
  name: "Barry",
  occupation: "Runner",
  age: "25",
});
console.log(arrNew);

// 3. Add the following object to the end of the array:
// { id: "7", name: "Bilbo", occupation: "None", age: "111" }

arrNew.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(arrNew);

// Use the values of each object within the array and the array’s length property to calculate the average age of the group. This calculation should be accomplished using a loop.

let averageAge = function () {
  let averageNumber = 0;

  // iterate over the arrNew to extract the age
  for (let i = 0; i < arrNew.length; i++) {
    averageNumber = averageNumber + parseInt(arrNew[i].age);
  }
  // don't use return inside the loop because the loop will end after the first iteration
  return averageNumber / 5;
};
console.log(averageAge());

// Part 5: Full Circle
// As a final task, transform the final set of data back into CSV format.

arrNew;

let arrayToString = [
  ["id", "name", "occupation", "age"],
  ...arrNew.map((item) => [item.id, item.name, item.occupation, item.age]),
]
  .map((item) => item.join(","))
  .join("\n");

console.log(arrayToString);

// resources : https://dev.to/samueldjones/convert-an-array-of-objects-to-csv-string-in-javascript-337d
