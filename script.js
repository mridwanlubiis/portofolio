// 1. FILTER PROJECT: klik tombol, tampilkan hanya kartu yang cocok
var tombolFilter = document.querySelectorAll(".chip");
var semuaKartu = document.querySelectorAll(".card");
tombolFilter.forEach(function (tombol) {
  tombol.onclick = function () {
    tombolFilter.forEach(function (t) { t.classList.remove("on"); });
    tombol.classList.add("on");
    var pilihan = tombol.dataset.filter;
    semuaKartu.forEach(function (kartu) {
      var cocok = pilihan === "all" || kartu.dataset.k.split(" ").indexOf(pilihan) >= 0;
      kartu.classList.toggle("hide", !cocok);
    });
  };
});

// 2. MODE GELAP / TERANG (pilihan disimpan di browser)
var root = document.documentElement;
var tombolTema = document.getElementById("theme");
function setTema(tema) {
  root.dataset.theme = tema;
  // Ikon menunjukkan mode yang sedang aktif: bulan = gelap (malam), matahari = terang
  tombolTema.textContent = tema === "dark" ? "🌙" : "☀️";
  var tujuan = tema === "dark" ? "Ganti ke mode terang" : "Ganti ke mode gelap";
  tombolTema.setAttribute("aria-label", tujuan);
  tombolTema.title = tujuan;
  try { localStorage.setItem("theme", tema); } catch (e) {}
}
var tersimpan = null;
try { tersimpan = localStorage.getItem("theme"); } catch (e) {}
setTema(tersimpan === "light" ? "light" : "dark");
tombolTema.onclick = function () {
  setTema(root.dataset.theme === "dark" ? "light" : "dark");
};

// 3. ANIMASI MUNCUL SAAT DI-SCROLL
var pengamat = new IntersectionObserver(function (daftar) {
  daftar.forEach(function (e) {
    if (e.isIntersecting) { e.target.classList.add("in"); pengamat.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach(function (el) { pengamat.observe(el); });
