const dll = require('ds-doubly-linked-list');

let myList = new dll();

myList.addMany([1,2,3,4,5])

console.log(myList.pretty());