let fs = require("fs");
let text = fs.readFileSync("./input.txt").toString("utf-8");
let inputArray = text.split("\n");

const letterScoringMap = new Map();

for(let i = 0; i < 26; i++){
  letterScoringMap.set(String.fromCharCode(i+97),i+1)
}

for(let i = 27; i < 53; i++){
  // console.log(String.fromCharCode(i))
  letterScoringMap.set(String.fromCharCode(i+38),i)
}
console.log(inputArray[0])
console.log(inputArray[0].substr(0,12), inputArray[0].substr(12,24))
// console.log(inputArray[4].length)

let half = 0
inputArray.forEach((line, index)=>{
  half = line.length/2
})
