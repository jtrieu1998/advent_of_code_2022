let fs = require("fs");
let text = fs.readFileSync("./input.txt").toString("utf-8");
let inputArray = text.split("\n");

const letterScoringMap = new Map();

for(let i = 0; i < 26; i++){
  letterScoringMap.set(String.fromCharCode(i+97),i+1)
}

for(let i = 27; i < 53; i++){
  letterScoringMap.set(String.fromCharCode(i+38),i)
}

let half = 0
let prioritiesSum = 0
inputArray.forEach((line, index)=>{
  half = line.length/2
  for(let i = 0; i < half; i++){
    if(line.includes(line[i],half)){
      prioritiesSum += letterScoringMap.get(line[i])
      break;
    }
  }
})

console.log('Part 1:', prioritiesSum)

let sacks = []
prioritiesSum = 0
inputArray.forEach((line, index)=>{
  sacks.push(line)
  if(sacks.length === 3){
    for(let i = 0; i < line.length; i++){
      if(sacks[0].includes(line[i]) && sacks[1].includes(line[i])){
        prioritiesSum += letterScoringMap.get(line[i])
        sacks = []
        break;
      }
    }
    sacks = []
  }
})

console.log('Part 2:', prioritiesSum)
