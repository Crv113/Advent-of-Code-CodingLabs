const fs = require("fs");
const data = fs.readFileSync("Day3/day3.txt", { encoding: "utf-8" });
const score = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let totalPart1 = 0;

const splittedData = data.split('\n')
splittedData.pop()

splittedData.map(backpack => {

  let firstPart = backpack.slice(0, backpack.length / 2)
  let secondPart = backpack.slice(firstPart.length, backpack.length)

  let commonItemFound = false

  Array.from(firstPart).map(item1 => {
    if (!commonItemFound && Array.from(secondPart).indexOf(item1) > -1)
    {
        totalPart1 += Array.from(score).indexOf(item1) + 1
        commonItemFound = true
    }
  })
})

console.log('Part 1: ' + totalPart1)

let totalPart2 = 0

const chunks = [];
let index = 0;
let sizeSlice = 3
while (index < splittedData.length) {
  chunks.push(splittedData.slice(index, index + sizeSlice));
  index += sizeSlice;
}

chunks.map(chunk => {
  let badgeFound = false;

  chunk.map(backpack => {

      Array.from(backpack).map(item => {
        if ( !badgeFound && Array.from(chunk)[1].indexOf(item) > -1 && Array.from(chunk)[2].indexOf(item) > -1) {
          totalPart2 += score.indexOf(item) + 1
          badgeFound = true
        }
      })

  })

})
console.log('Part 2: ' + totalPart2)
