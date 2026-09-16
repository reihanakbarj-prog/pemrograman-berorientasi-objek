// Helper prompt sederhana untuk Node.js
const prompt = (question) => {
  const fs = require("fs");
  process.stdout.write(question);
  return fs.readFileSync(0, "utf8").trim();
};

let hasil = [];
let n = 5;
for (let i = 0; i < 12; i++) {
  hasil.push(n);
  n = i % 2 === 0 ? n - 3 : n + 5;
}
console.log(hasil.join(" "));
