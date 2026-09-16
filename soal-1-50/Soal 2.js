// Helper prompt sederhana untuk Node.js
const prompt = (question) => {
  const fs = require("fs");
  process.stdout.write(question);
  return fs.readFileSync(0, "utf8").trim();
};

const kalimat = prompt("Masukkan kalimat: ");
const huruf = prompt("Masukkan huruf yang dicari: ");

let jumlah = 0;
for (const karakter of kalimat) {
  if (karakter === huruf) jumlah++;
}

console.log(`Jumlah "${huruf}" = ${jumlah}`);
