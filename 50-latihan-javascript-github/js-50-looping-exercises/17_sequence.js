// Helper prompt sederhana untuk Node.js
const prompt = (question) => {
  const fs = require("fs");
  process.stdout.write(question);
  return fs.readFileSync(0, "utf8").trim();
};

let hasil = [];
let n = 2;
for (let i = 0; i < 10; i++) {
  hasil.push(n);
  n = i % 2 === 0 ? n + 10 : n - 5;
}
console.log(hasil.join(" "));
