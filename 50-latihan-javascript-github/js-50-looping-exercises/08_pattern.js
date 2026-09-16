// Helper prompt sederhana untuk Node.js
const prompt = (question) => {
  const fs = require("fs");
  process.stdout.write(question);
  return fs.readFileSync(0, "utf8").trim();
};

for (let i = 1; i <= 5; i++) {
  console.log(String(i).repeat(i));
}
console.log("123456");
