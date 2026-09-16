// Helper prompt sederhana untuk Node.js
const prompt = (question) => {
  const fs = require("fs");
  process.stdout.write(question);
  return fs.readFileSync(0, "utf8").trim();
};

const maksimum = Number(prompt("Masukkan nilai maksimum: "));
let a = 0;
let b = 1;
const hasil = [];

while (a <= maksimum) {
  hasil.push(a);
  [a, b] = [b, a + b];
}

console.log(hasil.join(", "));
