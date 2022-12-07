const { clear } = require("console")
const fs = require("fs")
const data = fs.readFileSync("Day4/day4.txt", { encoding: "utf-8" })
const score = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
let totalPart1 = 0

const splittedData = data.split('\r\n')
splittedData.pop()


splittedData.map(pairOfZones => {
  const zones = pairOfZones.split(',')

  let min1 = Number(zones[0].split('-')[0])
  let max1 = Number(zones[0].split('-')[1])
  let min2 = Number(zones[1].split('-')[0])
  let max2 = Number(zones[1].split('-')[1])

  if((min1 >= min2 && max1 <= max2) || (min2 >= min1 && max2 <= max1)) {
    totalPart1++
  }

})
console.log('Part 1: ' + totalPart1)


let totalPart2 = 0

splittedData.map(pairOfZones => {
  const zones = pairOfZones.split(',')

  let min1 = Number(zones[0].split('-')[0])
  let max1 = Number(zones[0].split('-')[1])
  let min2 = Number(zones[1].split('-')[0])
  let max2 = Number(zones[1].split('-')[1])

  console.log({min1, max1, min2, max2})
  console.log((min1 >= min2 && max1 <= max2) ||
  (min2 >= min1 && max2 <= max1) ||
  (min2 < max1) ||
  (min1 > max2)
  )
  //test commit

  if(
    (min1 >= min2 && max1 <= max2) ||
    (min2 >= min1 && max2 <= max1) ||
    (min2 < max1) ||
    (min1 > max2)
  ) {
    totalPart2++
  }

})

console.log('Part 2: ' + totalPart2)
