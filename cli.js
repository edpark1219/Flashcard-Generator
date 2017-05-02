var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");


//Test case 1
console.log("Should show invalid:");

var test1 = new ClozeCard("Hello darkness my old friend", "Simon");
console.log("///////////");

//Test case 2
var test2 = new ClozeCard("That rug I had really tied the room together.", "rug");

console.log("Full Text:");
console.log(test2.fullText);
console.log("Cloze Test:");
console.log(test2.cloze);
console.log("Partial Test:");
console.log(test2.partial);
console.log("/////////////");

//Test case 3
var test3 = new BasicCard("Who is the GOAT?", "MJ");
console.log("Front:")
console.log(test3.front);
console.log("Back:");
console.log(test3.back);