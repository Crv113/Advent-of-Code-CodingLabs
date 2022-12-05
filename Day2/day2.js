const fs = require("fs");
const data = fs.readFileSync("Day2/day2.txt", { encoding: "utf-8" });
let total = 0;

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
      total += me + 6;
    } else if (me == 3 && other == 1) {
      //loose
      total += me
    } else if (me > other) {
      //win
      total += me + 6;
    } else if (me == other) {
      //draw
      total += me + 3;
    } else {
      //loose
      total += me;
    }
  });

  console.log(total);
