// Helper prompt sederhana untuk Node.js
const prompt = (question) => {
  const fs = require("fs");
  process.stdout.write(question);
  return fs.readFileSync(0, "utf8").trim();
};

const awal = Number(prompt("Nilai awal: "));
const akhir = Number(prompt("Nilai akhir: "));
let total = 0;

for (let n = awal; n <= akhir; n++) {
  if (n % 2 === 0) total += n;
}

console.log("Total bilangan genap:", total);
