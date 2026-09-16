// Helper prompt sederhana untuk Node.js
const prompt = (question) => {
  const fs = require("fs");
  process.stdout.write(question);
  return fs.readFileSync(0, "utf8").trim();
};

for (let i = 1; i <= 5; i++) {
  let baris = "";
  for (let j = 1; j <= i; j++) baris += j;
  console.log(baris);
}
