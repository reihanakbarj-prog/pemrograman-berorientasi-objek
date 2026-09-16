// Helper prompt sederhana untuk Node.js
const prompt = (question) => {
  const fs = require("fs");
  process.stdout.write(question);
  return fs.readFileSync(0, "utf8").trim();
};

const kalimat = prompt("Masukkan kalimat: ");
console.log("Jumlah karakter:", kalimat.length);
