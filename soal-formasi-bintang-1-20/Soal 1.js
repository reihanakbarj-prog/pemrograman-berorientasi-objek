// Soal 1 - Formasi bintang
// Jalankan dengan: node "Soal 1.js"

for (let i = 0; i < 5; i++) {
  const sisi = 4 - i;
  const jarak = 2 * i;
  console.log("*".repeat(sisi) + " ".repeat(jarak) + "*".repeat(sisi));
}
