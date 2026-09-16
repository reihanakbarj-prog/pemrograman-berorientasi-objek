// Helper prompt sederhana untuk Node.js
const prompt = (question) => {
  const fs = require("fs");
  process.stdout.write(question);
  return fs.readFileSync(0, "utf8").trim();
};

const awal = Number(prompt("Nilai awal: "));
const akhir = Number(prompt("Nilai akhir: "));

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }
  return true;
}

let total = 0;
for (let n = awal; n <= akhir; n++) {
  if (isPrime(n)) total++;
}

console.log("Jumlah bilangan prima:", total);
