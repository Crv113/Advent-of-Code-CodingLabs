const fs = require("fs");
const data = fs.readFileSync("Day2/day2.txt", { encoding: "utf-8" });

let games = data.split("\n");
let total = 0;

games.map((game) => {
  console.log(game);
  switch (game) {
    case "B X":
      total += 1; //Loose
    case "C Y":
      total += 2;
    case "A Z":
      total += 3;
    case "A X":
      total += 4; // Draw
    case "B Y":
      total += 5;
    case "C Z":
      total += 6;
    case "C X":
      total += 7; // Win
    case "A Y":
      total += 8;
    case "B Z":
      total += 9;
  }
});

console.log(total);

// games.map((game) => play(game[0], game[2]));
// games.pop();
// games.map((game) => {
//   console.log(game[0]);
//   switch (game[0]) {
//     case "A":
//       other = 1;
//       break;
//     case "B":
//       other = 2;
//       break;
//     case "C":
//       other = 3;
//       break;
//   }
//   switch (game[2]) {
//     case "X":
//       me = 1;
//       break;
//     case "Y":
//       me = 2;
//       break;
//     case "Z":
//       me = 3;
//       break;
//   }

//   if (me == 1 && other == 3) {
//     //win
//     console.log("A");
//     console.log(me + "+" + other);
//     total += me + 6;
//   } else if (me > other) {
//     //win
//     console.log("B");
//     console.log(me + "+" + other);
//     total += me + 6;
//   } else if (me == other) {
//     //draw
//     console.log("C");
//     console.log(me + "+" + other);
//     total += me + 3;
//   } else {
//     //loose
//     console.log("D");
//     console.log(me + "+" + other);
//     total += me;
//   }
//   console.log(total);
// });
