// Soal 6 - Formasi bintang
// Jalankan dengan: node "Soal 6.js"

for (let i = 1; i <= 6; i++) {
  const jumlah = ((i - 1) % 3) + 1;
  console.log("*".repeat(jumlah));
}
