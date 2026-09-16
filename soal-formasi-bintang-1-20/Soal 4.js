// Soal 4 - Formasi bintang
// Jalankan dengan: node "Soal 4.js"

for (let i = 1; i <= 5; i++) {
  const spasi = 11 - (2 * i);
  console.log("*".repeat(i) + " ".repeat(spasi) + "*".repeat(i));
}
console.log("*".repeat(11));
