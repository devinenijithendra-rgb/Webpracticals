const themeKey="jithendra-theme";
if(localStorage.getItem(themeKey)==="light")document.body.classList.add("light");
function toggleTheme(){document.body.classList.toggle("light");localStorage.setItem(themeKey,document.body.classList.contains("light")?"light":"dark")}
function toggleMenu(){const m=document.getElementById("mobileNav");if(m)m.classList.toggle("open")}
function filterPrograms(){const q=(document.getElementById("search")?.value||"").toLowerCase();let n=0;document.querySelectorAll(".program").forEach(c=>{const ok=c.textContent.toLowerCase().includes(q);c.style.display=ok?"flex":"none";if(ok)n++});const e=document.getElementById("empty");if(e)e.style.display=n?"none":"block"}
document.addEventListener("DOMContentLoaded",()=>document.querySelectorAll("[data-year]").forEach(e=>e.textContent=new Date().getFullYear()));
