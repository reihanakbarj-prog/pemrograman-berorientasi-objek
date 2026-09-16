// Soal 3 - Formasi bintang
// Jalankan dengan: node "Soal 3.js"

for (let i = 1; i <= 5; i++) {
  const jumlah = i <= 3 ? i : 6 - i;
  console.log(" ".repeat(3 - jumlah) + "*".repeat(jumlah));
}
