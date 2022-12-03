let fs = require("fs");
let text = fs.readFileSync("./input.txt").toString('utf-8')
let inputArray = text.split("\n")
// A B C
// X Y Z
const LOSE = 0
const DRAW = 3
const WIN = 6

const ROCK = 1
const PAPER = 2
const SCISSORS = 3

const calcScore = (a,b) => {
	let sum = 0
	switch(b){
		case 'X':
			sum += ROCK
			switch(a){
				case 'A':
					sum += DRAW
					break;
				case 'B':
					sum += LOSE
					break;
				case 'C':
					sum += WIN
					break;
			}
			break;
		case 'Y':
			sum += PAPER
			switch(a){
				case 'A':
					sum += WIN
					break;
				case 'B':
					sum += DRAW
					break;
				case 'C':
					sum += LOSE
					break;
			}
			break;
		case 'Z':
			sum += SCISSORS
			switch(a){
				case 'A':
					sum += LOSE
					break;
				case 'B':
					sum += WIN
					break;
				case 'C':
					sum += DRAW
					break;
			}
			break;
	}
	return sum
}

let totalScore = 0
inputArray.forEach((pair,index) => {
	totalScore += calcScore(pair[0],pair[2])
})

console.log("Part 1:", totalScore)

const calcScore2 = (a,b) => {
	let sum = 0
	switch(a){
		case 'A':
			switch(b){
				case 'X':
					sum += SCISSORS + LOSE
					break;
				case 'Y':
					sum += ROCK + DRAW
					break;
				case 'Z':
					sum += PAPER + WIN
					break;
			}
			break;
		case 'B':
			switch(b){
				case 'X':
					sum += ROCK + LOSE
					break;
				case 'Y':
					sum += PAPER + DRAW
					break;
				case 'Z':
					sum += SCISSORS + WIN
					break;
			}
			break;
		case 'C':
			switch(b){
				case 'X':
					sum += PAPER + LOSE
					break;
				case 'Y':
					sum += SCISSORS + DRAW
					break;
				case 'Z':
					sum += ROCK + WIN
					break;
			}
			break;
	}
	return sum
}

console.log(calcScore2('A','Y'))
console.log(calcScore2('B','X'))
console.log(calcScore2('C','Z'))
totalScore = 0
inputArray.forEach((pair,index) => {
	totalScore += calcScore2(pair[0],pair[2])
})

console.log("Part 2:", totalScore)


