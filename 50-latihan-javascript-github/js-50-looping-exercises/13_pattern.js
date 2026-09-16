// Helper prompt sederhana untuk Node.js
const prompt = (question) => {
  const fs = require("fs");
  process.stdout.write(question);
  return fs.readFileSync(0, "utf8").trim();
};

let hasil = "";
for (let i = 1; i <= 9; i++) {
  hasil += String(i).repeat(i);
}
console.log(hasil + "...");
