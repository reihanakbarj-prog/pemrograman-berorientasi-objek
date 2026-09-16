// Helper prompt sederhana untuk Node.js
const prompt = (question) => {
  const fs = require("fs");
  process.stdout.write(question);
  return fs.readFileSync(0, "utf8").trim();
};

const hasil = [];
let n = 1;
let tambah = 1;

for (let i = 0; i < 13; i++) {
  hasil.push(n);
  n += tambah;
  tambah = tambah === 3 ? 1 : tambah + 1;
}

console.log(hasil.join(" "));
