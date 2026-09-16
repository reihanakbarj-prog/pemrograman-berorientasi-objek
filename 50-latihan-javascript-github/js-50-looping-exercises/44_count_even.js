// Helper prompt sederhana untuk Node.js
const prompt = (question) => {
  const fs = require("fs");
  process.stdout.write(question);
  return fs.readFileSync(0, "utf8").trim();
};

const jumlah = Math.max(10, Number(prompt("Berapa angka yang dimasukkan? ")));
let jumlahGenap = 0;

for (let i = 1; i <= jumlah; i++) {
  const angka = Number(prompt(`Angka ke-${i}: `));
  if (angka % 2 === 0) jumlahGenap++;
}

console.log("Jumlah bilangan genap:", jumlahGenap);
