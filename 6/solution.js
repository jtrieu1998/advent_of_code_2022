const { Console } = require("console");
let fs = require("fs");
let text = fs.readFileSync("./input.txt").toString("utf-8");
let inputArray = text.split("\n")
let test = 'aabbccddjkl';
// takes in a message and calculates number
const messageStart = (message) => {
  let tracking = [message[3],message[2],message[1],message[0]]
  // console.log(tracking)
  let found = false
  for(let i = 4; i < message.length; i++){
    
    tracking.unshift(message[i]);
    if(tracking.length > 4){
      tracking.pop()
    }
    for(let j = 0; j < tracking.length-1; j++){
      // if(i===10) console.log(tracking,tracking[j],tracking.includes(tracking[j],j+1))
      if(tracking.includes(tracking[j],j+1)){
        found = false
        break;
      } else {
        found = true
        console.log(tracking)
      }
    }
    // console.log(tracking, i)
    if(found){
      return i+1
    }
  }
}

console.log(inputArray[0])

console.log("Part 1:", messageStart(inputArray[0]))
