// Helper prompt sederhana untuk Node.js
const prompt = (question) => {
  const fs = require("fs");
  process.stdout.write(question);
  return fs.readFileSync(0, "utf8").trim();
};

const awal = Number(prompt("Tahun awal: "));
const akhir = Number(prompt("Tahun akhir: "));

for (let tahun = awal; tahun <= akhir; tahun++) {
  if (tahun % 10 === 2 && (tahun % 400 === 0 || tahun % 4 === 0)) {
    console.log(tahun);
  }
}
