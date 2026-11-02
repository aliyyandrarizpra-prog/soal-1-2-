// Data nilai siswa
const namaSiswa = "Ali";
const tugas = 80;
const uts = 75;
const uas = 90;

// Fungsi menghitung nilai akhir
function hitungNilai(tugas, uts, uas) {
    return (tugas * 0.30) +
           (uts * 0.30) +
           (uas * 0.40);
}

// Memanggil fungsi
const nilaiAkhir = hitungNilai(tugas, uts, uas);

// Menentukan status kelulusan
let keterangan;

if (nilaiAkhir >= 75) {
    keterangan = "LULUS";
} else {
    keterangan = "TIDAK LULUS";
}

// Menampilkan hasil
const output = `
    <p>Nama Siswa : ${namaSiswa}</p>
    <p>Nilai Tugas : ${tugas}</p>
    <p>Nilai UTS : ${uts}</p>
    <p>Nilai UAS : ${uas}</p>
    <hr>
    <h3>Nilai Akhir : ${nilaiAkhir}</h3>
    <h2>Status : ${keterangan}</h2>
`;

document.getElementById("hasil").innerHTML = output;

// Menampilkan hasil di console
console.log("Nama Siswa :", namaSiswa);
console.log("Nilai Akhir :", nilaiAkhir);
console.log("Status :", keterangan);