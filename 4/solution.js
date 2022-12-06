let fs = require("fs");
let text = fs.readFileSync("./input.txt").toString("utf-8");
let inputArray = text.split("\n")

let first = []
let second = []
let test = "12,34"
// test = test.split(",")
// console.log(test)
let fullCotains = 0
inputArray.forEach((pairs, index) => {
  pairs = pairs.split(",")
  first = pairs[0].split("-").map(Number)
  second = pairs[1].split("-").map(Number)

  if(first[0]<=second[0] && first[1]>=second[1]){
    fullCotains++
  } else if(second[0]<=first[0] && second[1]>=first[1]){
    fullCotains++
  }
})

console.log("Part 1:",fullCotains)

let a,b,c,d = 0
fullCotains = 0
inputArray.forEach((pairs, index) => {
  pairs = pairs.split(",")
  first = pairs[0].split("-").map(Number)
  second = pairs[1].split("-").map(Number)
  // [ a, b ] = first
  // [ c, d ] = second

  a = first[0]
  b = first[1]
  c = second[0]
  d = second[1]
  if(a<=c && b >= d){
    fullCotains++
    // console.log(first,second)
  } else if(c<=a && d>=b){
    fullCotains++
    // console.log(first,second)
  } else if(a <= c && b >= c){
    fullCotains++
  } else if(c <= a && d >= a){
    fullCotains++
  }
})

console.log("Part 2:",fullCotains)
