const D={
en:{n_home:"Home",n_about:"About",n_work:"Work",n_hobby:"Hobbies",n_contact:"Contact",
h_k:"Hello, I'm",h_t:"I build for the <span class='hl'>web</span> & make data <span class='ac'>talk</span>.",h_s:"Student, developer and tinkerer. I enjoy turning messy ideas into clean, working things.",h_c1:"See my work",h_c2:"Say hello",h_st:"Open to collab",
i_h:"Explore the site",i1t:"About me",i1d:"Who I am, what I studied and the tools I use.",i2t:"Selected work",i2d:"Projects I built, from web apps to ML experiments.",i3t:"Hobbies",i3d:"What I do when the laptop is closed.",i4t:"Contact",i4d:"Got an idea? Let's talk.",
a_h:"About <span class='hl'>me</span>",a_p1:"I'm Febri, an undergraduate student who loves building useful things on the web and exploring machine learning.",a_p2:"Replace this text with your own story: where you're from, what drives you and what you want to do next.",a_ed:"Journey",a_e1t:"Undergraduate Student",a_e1d:"Informatics / Computer Science. Currently working on my thesis.",a_e2t:"Self-taught Builder",a_e2d:"Web apps with Laravel and Bootstrap, and ML workflows in Python.",a_e3t:"What's next",a_e3d:"Add your next goal or an internship you're looking for.",a_sk:"Toolbox",a_cv:"Download CV",
w_h:"Selected <span class='hl'>work</span>",w_s:"Four sample projects. Edit the titles, descriptions and links.",w1t:"Project One",w1d:"A short description: what problem it solves and what you did.",w2t:"Project Two",w2d:"Describe the outcome, a number or the main lesson learned.",w3t:"Project Three",w3d:"Mention the stack and your role in the project.",w4t:"Project Four",w4d:"Tell visitors why this one matters to you.",w_c:"View code",
b_h:"Off the <span class='hl'>clock</span>",b_s:"Swap these for your real hobbies.",b1t:"Photography",b1d:"Chasing good light and small details.",b2t:"Music",b2d:"Always a playlist running while I code.",b3t:"Gaming",b3d:"Strategy games and co-op nights.",b4t:"Running",b4d:"Slow miles, clear head.",
c_h:"Let's <span class='hl'>talk</span>",c_s:"Open to internships, freelance and friendly chats.",c_n:"Your name",c_e:"Your email",c_m:"Your message",c_b:"Send message",c_f:"Find me",
f_t:"Built by hand with HTML, Bootstrap and too much coffee."},
id:{n_home:"Beranda",n_about:"Tentang",n_work:"Karya",n_hobby:"Hobi",n_contact:"Kontak",
h_k:"Halo, saya",h_t:"Saya membangun <span class='hl'>web</span> & membuat data <span class='ac'>bicara</span>.",h_s:"Mahasiswa, developer, dan suka mengutak-atik. Saya senang mengubah ide berantakan menjadi sesuatu yang rapi dan berfungsi.",h_c1:"Lihat karya",h_c2:"Sapa saya",h_st:"Terbuka kolaborasi",
i_h:"Jelajahi situs",i1t:"Tentang saya",i1d:"Siapa saya, apa yang saya pelajari, dan tools yang saya pakai.",i2t:"Karya pilihan",i2d:"Proyek buatan saya, dari aplikasi web hingga eksperimen ML.",i3t:"Hobi",i3d:"Apa yang saya lakukan saat laptop ditutup.",i4t:"Kontak",i4d:"Punya ide? Ayo ngobrol.",
a_h:"Tentang <span class='hl'>saya</span>",a_p1:"Saya Febri, mahasiswa S1 yang suka membuat hal bermanfaat di web dan mendalami machine learning.",a_p2:"Ganti teks ini dengan ceritamu sendiri: asalmu, apa yang menggerakkanmu, dan rencana selanjutnya.",a_ed:"Perjalanan",a_e1t:"Mahasiswa S1",a_e1d:"Informatika / Ilmu Komputer. Sedang mengerjakan skripsi.",a_e2t:"Pembelajar Mandiri",a_e2d:"Aplikasi web dengan Laravel dan Bootstrap, serta alur kerja ML dengan Python.",a_e3t:"Selanjutnya",a_e3d:"Tambahkan target berikutnya atau magang yang kamu cari.",a_sk:"Perangkat",a_cv:"Unduh CV",
w_h:"Karya <span class='hl'>pilihan</span>",w_s:"Empat contoh proyek. Ubah judul, deskripsi, dan tautannya.",w1t:"Proyek Satu",w1d:"Deskripsi singkat: masalah yang diselesaikan dan peranmu.",w2t:"Proyek Dua",w2d:"Jelaskan hasilnya, sebuah angka, atau pelajaran utama.",w3t:"Proyek Tiga",w3d:"Sebutkan teknologi dan perananmu di proyek ini.",w4t:"Proyek Empat",w4d:"Ceritakan kenapa proyek ini berarti bagimu.",w_c:"Lihat kode",
b_h:"Di luar <span class='hl'>jam kerja</span>",b_s:"Ganti dengan hobi aslimu.",b1t:"Fotografi",b1d:"Memburu cahaya bagus dan detail kecil.",b2t:"Musik",b2d:"Selalu ada playlist saat saya ngoding.",b3t:"Gaming",b3d:"Game strategi dan malam co-op.",b4t:"Lari",b4d:"Pelan-pelan, kepala jernih.",
c_h:"Ayo <span class='hl'>ngobrol</span>",c_s:"Terbuka untuk magang, freelance, dan obrolan santai.",c_n:"Nama kamu",c_e:"Email kamu",c_m:"Pesan kamu",c_b:"Kirim pesan",c_f:"Temukan saya",
f_t:"Dibuat manual dengan HTML, Bootstrap, dan kopi berlebihan."}};
function setLang(l){
 document.documentElement.lang=l;
 try{localStorage.setItem('lang',l)}catch(e){}
 document.querySelectorAll('[data-i18n]').forEach(e=>{const v=D[l][e.dataset.i18n];if(v)e.innerHTML=v});
 document.querySelectorAll('[data-ph]').forEach(e=>{e.placeholder=D[l][e.dataset.ph]||''});
 document.querySelectorAll('.lang-btn').forEach(b=>b.textContent=l==='en'?'ID':'EN');
}
document.addEventListener('DOMContentLoaded',()=>{
 let l='en';try{l=localStorage.getItem('lang')||(navigator.language||'').startsWith('id')?'id':'en';const s=localStorage.getItem('lang');if(s)l=s}catch(e){}
 setLang(l);
 document.querySelectorAll('.lang-btn').forEach(b=>b.onclick=()=>setLang(document.documentElement.lang==='en'?'id':'en'));
 const p=location.pathname.split('/').pop()||'index.html';
 document.querySelectorAll('.nav-b .nav-link').forEach(a=>{if(a.getAttribute('href')===p)a.classList.add('active')});
 const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target)}}),{threshold:.1});
 document.querySelectorAll('.rv').forEach(e=>io.observe(e));
 const f=document.getElementById('mailform');
 if(f)f.onsubmit=e=>{e.preventDefault();const d=new FormData(f);location.href='mailto:you@example.com?subject='+encodeURIComponent('Hello from '+d.get('name'))+'&body='+encodeURIComponent(d.get('msg')+'\n\n'+d.get('email'))};
});
