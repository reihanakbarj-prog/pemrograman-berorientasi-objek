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

const prima = [];
for (let n = awal; n <= akhir; n++) {
  if (isPrime(n)) prima.push(n);
}

console.log("Bilangan prima:", prima.join(", "));
