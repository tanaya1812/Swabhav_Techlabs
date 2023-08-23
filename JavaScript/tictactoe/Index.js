var Game = require('./Game.js');

let [msg,g1] = Game.newGame("ABC","XYZ");
// console.log(g1)

// ABC win
console.log(g1.play(1))
console.log(g1.play(3))
console.log(g1.play(4))
console.log(g1.play(6))
console.log(g1.play(7))

//draw
// console.log(g1.play(1));
// console.log(g1.play(2));
// console.log(g1.play(4));
// console.log(g1.play(7));
// console.log(g1.play(6));
// console.log(g1.play(0));
// console.log(g1.play(3));
// console.log(g1.play(5));
// console.log(g1.play(8));