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
