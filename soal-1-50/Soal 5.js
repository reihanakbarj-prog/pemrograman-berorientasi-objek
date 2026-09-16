// Helper prompt sederhana untuk Node.js
const prompt = (question) => {
  const fs = require("fs");
  process.stdout.write(question);
  return fs.readFileSync(0, "utf8").trim();
};

for (let i = 6; i >= 1; i--) {
  console.log(String(i).repeat(i));
}
