const { greet } = require("./forever-package");

console.log(greet("Alex"));
console.log(greet("Alex", { uppercase: true }));
console.log(greet("Alex", { punctuation: "!!!" }));
