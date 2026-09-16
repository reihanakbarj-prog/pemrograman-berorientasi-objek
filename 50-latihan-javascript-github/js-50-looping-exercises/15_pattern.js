// Helper prompt sederhana untuk Node.js
const prompt = (question) => {
  const fs = require("fs");
  process.stdout.write(question);
  return fs.readFileSync(0, "utf8").trim();
};

console.log("87654321");
console.log("7654321");
console.log("666666");
console.log("55555");
console.log("4321");
console.log("321");
console.log("22");
console.log("1");
