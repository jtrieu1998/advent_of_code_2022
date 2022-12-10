let fs = require("fs");
let text = fs.readFileSync("./input.txt").toString("utf-8");
let inputArray = text.split("\n");
let grid = []

for(let i=0; i < inputArray.length; i++){
  grid[i] = inputArray[i].split('')
}

let peakSet = new Set()

let peaks = []
// find peak from left to right
for(let row = 1; row < grid.length-1; row++){
  peaks.push(grid[row][0])
  for(let col = 1; col < grid[row].length-2; col++){
    if(grid[row][col] > peaks[peaks.length-1]){
      peaks.push(grid[row][col])
      peakSet.add(`${row},${col}`)
    }
  }
}

// fidn peaks from right to left
peaks = []
for(let row = 1; row < grid.length-1; row++){
  peaks.push(grid[row][grid[0].length-1])
  for(let col = grid[row].length-2; col > 0; col--){
    if(grid[row][col] > peaks[peaks.length-1]){
      peaks.push(grid[row][col])
      peakSet.add(`${row},${col}`)
    }
  }
}

// find peaks from top down
peaks = []
for(let col = 1; col < grid.length-1; col++){
  peaks.push(grid[0][col])
  for(let row = 1; row < grid.length-1; row++){
    if(grid[row][col] > peaks[peaks.length-1]){
      peaks.push(grid[row][col])
      peakSet.add(`${row},${col}`)
    }
  }
}

// find peaks from bottom to top
peaks = []
for(let col = 1; col < grid.length-1; col++){
  peaks.push(grid[grid.length-1][col])
  for(let row = grid.length-2; row > 0; row--){
    if(grid[row][col] > peaks[peaks.length-1]){
      peaks.push(grid[row][col])
      peakSet.add(`${row},${col}`)
    }
  }
}

let peakCount = peakSet.size + (grid.length * 2) + (grid[0].length * 2) - 4

console.log("Part 1:", peakCount)

let up = left = right = down = 0;
let counts = []
let maxSight = 0
let currentSight = 0
// grid.length
// grid[row].length
for(let row = 0; row < grid.length; row++){
  for(let col = 0; col < grid[row].length; col++){
    let currentTree = grid[row][col]
    counts = []

    peaks = [currentTree]
    up = down = row;
    left = right = col;
    // move up while we are not on an edge or a tree greater than the current tree
    while(up > 0){
      if(grid[--up][col] < currentTree){
        peaks.push(grid[up][col]);
      } else {
        break
      }
    }
    counts.push(peaks.length)

    peaks = [currentTree]
    while(down < grid.length-1){
      if(grid[++down][col] < currentTree){
        peaks.push(grid[down][col]);
      } else {
        break
      }
    }
    counts.push(peaks.length)

    peaks = [currentTree]
    while(left > 0){
      if(grid[row][--left] < currentTree){
        peaks.push(grid[row][left]);
      } else {
        break
      }
    }
    counts.push(peaks.length)

    peaks = [currentTree]
    while(right < grid.length-1){
      if(grid[++right][col] < currentTree){
        peaks.push(grid[right][col]);
      } else {
        break;
      }
    }
    counts.push(peaks.length)

    currentSight = counts.reduce((a,b) => a*b,1)
    console.log(grid[row][col], counts)
    if(currentSight > maxSight){
      maxSight = currentSight
      console.log(row,col)
    }
  }
}

console.log("Part 2:", maxSight)
