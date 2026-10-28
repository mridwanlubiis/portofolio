// DATA PROJECT: ubah nama, deskripsi, link demo (u), dan nama file PDF (r) di sini
var U="https://mridwanlbs233-collab.github.io/";
var projects=[
{n:"Secure Login UI",d:"Halaman login dan autentikasi (HTML/CSS/JS).",t:"Functional, Negative Testing",k:["functional","negative"],u:U+"login-ui/",r:"login-ui"},
{n:"To-Do List",d:"Aplikasi CRUD dengan penyimpanan localStorage.",t:"Functional, CRUD Testing",k:["functional"],u:U+"todo-list/",r:"todo-list"},
{n:"Katalog Buku (Library)",d:"Cari, filter, dan pinjam buku.",t:"Functional, Search dan Filter",k:["functional"],u:U+"library/",r:"library"},
{n:"Form Registrasi",d:"Form dengan validasi banyak field.",t:"Boundary Value, Equivalence Partitioning",k:["bva","ep"],u:U+"registrasi/",r:"registrasi"},
{n:"Online Shop Web App: Alur Belanja dari Produk sampai Transaksi",d:"Alur belanja lengkap dari daftar produk, keranjang, hingga transaksi.",t:"Functional, End-to-End Flow",k:["functional","e2e"],u:U+"online-shop/",r:"online-shop"}
];
var filters=[["all","Semua"],["functional","Functional"],["negative","Negative"],["bva","Boundary Value"],["ep","Equivalence Partitioning"],["e2e","End-to-End"]];
var grid=document.getElementById("grid"),fb=document.getElementById("filters");
projects.forEach(function(p){var a=document.createElement("article");a.className="card";a.dataset.k=p.k.join(" ");
a.innerHTML='<h3></h3><p></p><p class="tag"></p><div class="btns"><a class="btn" target="_blank" rel="noopener">Lihat Demo</a><a class="btn ghost" target="_blank" rel="noopener">Laporan Test (PDF)</a></div>';
a.querySelector("h3").textContent=p.n;a.children[1].textContent=p.d;a.children[2].textContent=p.t;
var l=a.querySelectorAll("a");l[0].href=p.u;l[1].href="reports/"+p.r+".pdf";grid.appendChild(a);});
filters.forEach(function(f,i){var b=document.createElement("button");b.type="button";b.className="chip"+(i?"":" on");b.textContent=f[1];
b.onclick=function(){fb.querySelectorAll(".chip").forEach(function(c){c.classList.remove("on")});b.classList.add("on");
grid.querySelectorAll(".card").forEach(function(c){c.classList.toggle("hide",f[0]!=="all"&&c.dataset.k.split(" ").indexOf(f[0])<0)});};fb.appendChild(b);});
var root=document.documentElement,tb=document.getElementById("theme");
function setTheme(t){root.dataset.theme=t;tb.textContent=t==="dark"?"Mode terang":"Mode gelap";try{localStorage.setItem("theme",t)}catch(e){}}
var saved=null;try{saved=localStorage.getItem("theme")}catch(e){}
setTheme(saved==="light"?"light":"dark");
tb.onclick=function(){setTheme(root.dataset.theme==="dark"?"light":"dark")};
var io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add("in");io.unobserve(e.target)}})},{threshold:.1});
document.querySelectorAll(".reveal").forEach(function(el){io.observe(el)});