// Data project dan filter ada di file projects.js (dimuat lebih dulu).
// File ini berisi logikanya: membuat kartu, filter, mode gelap/terang, animasi.

var grid = document.getElementById("grid");
var fb = document.getElementById("filters");

// 1. Membuat kartu untuk setiap project
projects.forEach(function (p) {
  var kartu = document.createElement("article");
  kartu.className = "card";
  kartu.dataset.k = p.kategori.join(" ");
  kartu.innerHTML =
    '<h3></h3><p></p><p class="tag"></p>' +
    '<div class="btns">' +
    '<a class="btn" target="_blank" rel="noopener">Lihat Demo</a>' +
    '<a class="btn ghost" target="_blank" rel="noopener">Laporan Test (PDF)</a>' +
    '</div>';
  kartu.querySelector("h3").textContent = p.nama;
  kartu.children[1].textContent = p.deskripsi;
  kartu.children[2].textContent = p.teknik;
  var tombol = kartu.querySelectorAll("a");
  tombol[0].href = p.linkDemo;
  tombol[1].href = "reports/" + p.namaPdf + ".pdf";
  grid.appendChild(kartu);
});

// 2. Tombol filter
daftarFilter.forEach(function (f, i) {
  var b = document.createElement("button");
  b.type = "button";
  b.className = "chip" + (i ? "" : " on");
  b.textContent = f[1];
  b.onclick = function () {
    fb.querySelectorAll(".chip").forEach(function (c) { c.classList.remove("on"); });
    b.classList.add("on");
    grid.querySelectorAll(".card").forEach(function (c) {
      var cocok = f[0] === "all" || c.dataset.k.split(" ").indexOf(f[0]) >= 0;
      c.classList.toggle("hide", !cocok);
    });
  };
  fb.appendChild(b);
});

// 3. Mode gelap / terang (pilihan disimpan di browser)
var root = document.documentElement;
var tb = document.getElementById("theme");
function setTheme(t) {
  root.dataset.theme = t;
  tb.textContent = t === "dark" ? "Mode terang" : "Mode gelap";
  try { localStorage.setItem("theme", t); } catch (e) {}
}
var saved = null;
try { saved = localStorage.getItem("theme"); } catch (e) {}
setTheme(saved === "light" ? "light" : "dark");
tb.onclick = function () { setTheme(root.dataset.theme === "dark" ? "light" : "dark"); };

// 4. Animasi muncul saat di-scroll
var io = new IntersectionObserver(function (es) {
  es.forEach(function (e) {
    if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
  });
}, { threshold: 0.1 });
document.querySelectorAll(".reveal").forEach(function (el) { io.observe(el); });
