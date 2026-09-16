// Helper prompt sederhana untuk Node.js
const prompt = (question) => {
  const fs = require("fs");
  process.stdout.write(question);
  return fs.readFileSync(0, "utf8").trim();
};

const n = Number(prompt("Masukkan n: "));
let hasil = 1;
let bentuk = [];

for (let i = n; i >= 1; i--) {
  hasil *= i;
  bentuk.push(i);
}

console.log(`${n}! = ${bentuk.join(" x ")} = ${hasil}`);
