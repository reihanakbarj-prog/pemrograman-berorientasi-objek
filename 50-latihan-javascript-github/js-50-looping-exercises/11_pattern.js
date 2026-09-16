// Helper prompt sederhana untuk Node.js
const prompt = (question) => {
  const fs = require("fs");
  process.stdout.write(question);
  return fs.readFileSync(0, "utf8").trim();
};

console.log("666666");
console.log("12345");
console.log("4444");
console.log("123");
console.log("22");
console.log("1");
