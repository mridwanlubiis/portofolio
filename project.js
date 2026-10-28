// ============================================================
// FILE INI KHUSUS UNTUK DAFTAR PROJECT. Hanya file ini yang
// perlu kamu ubah kalau mau mengedit atau menambah project.
// ============================================================
//
// Satu project = satu blok { ... }. Aturannya:
//  - Semua teks ditulis di dalam tanda kutip "..."
//  - Setiap baris diakhiri koma, KECUALI baris terakhir di blok
//  - Antar blok project diberi koma, KECUALI blok paling terakhir
//
// Arti isi tiap baris:
//  nama      : judul kartu
//  deskripsi : penjelasan singkat
//  teknik    : tulisan teknik testing di kartu
//  kategori  : untuk tombol filter (lihat daftarFilter di bawah)
//  linkDemo  : LINK TOMBOL "Lihat Demo" (tempel link Pages di sini)
//  namaPdf   : nama file PDF di folder reports (tanpa .pdf)

var projects = [
    {
      nama: "Secure Login UI",
      deskripsi: "Halaman login dan autentikasi (HTML/CSS/JS).",
      teknik: "Functional, Negative Testing",
      kategori: ["functional", "negative"],
      linkDemo: "https://mridwanlubiis.github.io/login-ui/",
      namaPdf: "login-ui"
    },
    {
      nama: "To-Do List",
      deskripsi: "Aplikasi CRUD dengan penyimpanan localStorage.",
      teknik: "Functional, CRUD Testing",
      kategori: ["functional"],
      linkDemo: "https://mridwanlbs233-collab.github.io/todo-list/",
      namaPdf: "todo-list"
    },
    {
      nama: "Katalog Buku (Library)",
      deskripsi: "Cari, filter, dan pinjam buku.",
      teknik: "Functional, Search dan Filter",
      kategori: ["functional"],
      linkDemo: "https://mridwanlbs233-collab.github.io/library/",
      namaPdf: "library"
    },
    {
      nama: "Form Registrasi",
      deskripsi: "Form dengan validasi banyak field.",
      teknik: "Boundary Value, Equivalence Partitioning",
      kategori: ["bva", "ep"],
      linkDemo: "https://mridwanlbs233-collab.github.io/registrasi/",
      namaPdf: "registrasi"
    },
    {
      nama: "Online Shop Web App: Alur Belanja dari Produk sampai Transaksi",
      deskripsi: "Alur belanja lengkap dari daftar produk, keranjang, hingga transaksi.",
      teknik: "Functional, End-to-End Flow",
      kategori: ["functional", "e2e"],
      linkDemo: "https://mridwanlbs233-collab.github.io/online-shop/",
      namaPdf: "online-shop"
    }
  ];
  
  // Tombol filter: ["kode", "teks di tombol"]
  // Kode harus sama dengan isi "kategori" di project di atas.
  var daftarFilter = [
    ["all", "Semua"],
    ["functional", "Functional"],
    ["negative", "Negative"],
    ["bva", "Boundary Value"],
    ["ep", "Equivalence Partitioning"],
    ["e2e", "End-to-End"]
  ];