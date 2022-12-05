const fs = require("fs");
const data = fs.readFileSync("Day2/day2.txt", { encoding: "utf-8" });
let totalPart1 = 0;

splittedData = data.split('\r\n')
splittedData.pop()

splittedData.map((game) => {
  let other = 0;
  let me = 0;

    switch (game[0]) {
      case "A":
        other = 1;
        break;
      case "B":
        other = 2;
        break;
      case "C":
        other = 3;
        break;
    }
    switch (game[2]) {
      case "X":
        me = 1;
        break;
      case "Y":
        me = 2;
        break;
      case "Z":
        me = 3;
        break;
    }

    if (me == 1 && other == 3) {
      //win
      totalPart1 += me + 6;
    } else if (me == 3 && other == 1) {
      //loose
      totalPart1 += me
    } else if (me > other) {
      //win
      totalPart1 += me + 6;
    } else if (me == other) {
      //draw
      totalPart1 += me + 3;
    } else {
      //loose
      totalPart1 += me;
    }
  });

  console.log('Part 1: ' + totalPart1);

  let totalPart2 = 0;
  splittedData.map((game) => {
    let other = 0;
    let gameScore = 0;
    let me = 0;

      switch (game[0]) {
        case "A":
          other = 1;
          break;
        case "B":
          other = 2;
          break;
        case "C":
          other = 3;
          break;
      }
      switch (game[2]) {
        case "X":
          gameScore = 0;
          break;
        case "Y":
          gameScore = 3;
          break;
        case "Z":
          gameScore = 6;
          break;
      }

      if (gameScore == 3) {
        me = other
      } else if (gameScore == 0) {
        if(other == 1) {
          me = 3;
        } else {
          me = other - 1;
        }
      } else {
        if(other == 3) {
          me = 1;
        } else {
          me = other + 1;
        }
      }

      totalPart2 += me + gameScore
    });

    console.log('Part 2: ' + totalPart2)
