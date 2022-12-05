const fs = require("fs");
const data = fs.readFileSync("Day1/day1.txt", { encoding: "utf-8" });

let elfs = data.split('\n\n');

let [first, second, third] = elfs
  .map((elf) => elf.split("\n").reduce((a, b) => Number(a) + Number(b), 0))
  .sort((a, b) => b - a);

console.log('Part 1: ' + first);
console.log('Part 2: ' + (first + second + third));
