// Helper prompt sederhana untuk Node.js
const prompt = (question) => {
  const fs = require("fs");
  process.stdout.write(question);
  return fs.readFileSync(0, "utf8").trim();
};

const awal = Number(prompt("Nilai awal: "));
const akhir = Number(prompt("Nilai akhir: "));

for (let n = awal; n <= akhir; n++) {
  if (n % 3 === 0) console.log(n);
}
