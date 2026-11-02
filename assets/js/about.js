const P = {
  en: {
    k: "About me", p1: "Information Technology fresh graduate of Universitas Sumatera Utara. As a Data Analyst intern at Dinas Sosial Kota Medan I built a disaster information system and a scholarship portal, and for my thesis I built a NusaBERT chatbot for maternal and infant health.", p2: "I work with SQL, Python and Excel, and balance the numbers with UI/UX and multimedia design in Figma, Adobe Creative Suite and Blender.", cv: "Download CV", li: "LinkedIn profile",
    j_h: "Journey", j1k: "08/2021", j1t: "Started at Universitas Sumatera Utara", j1d: "Bachelor's in Information Technology.", j2k: "02–06/2024", j2t: "Data Analyst Intern, Dinas Sosial Kota Medan", j2d: "Disaster information system, scholarship data and aid distribution.", j2l: "See the project →", j3k: "2021–2026", j3t: "Learning on the side", j3d: "From Huawei HCIA Big Data in 2023 to three Anthropic AI Fluency credentials in 2026.", j4k: "Now", j4t: "Growing and still learning", j4d: "Developing myself and keeping up with new skills.", jtk: "2026", jtt: "Thesis: Bunda Chatbot", jtd: "A NusaBERT chatbot for maternal and infant health: 87.40% test F1 and 95.41% black-box conformity.", jtl: "See the thesis →", jgk: "10/2026", jgt: "Graduated", jgd: "Bachelor's in Information Technology, Universitas Sumatera Utara.", wk_h: "Selected <span class='hl'>work</span>", wk1t: "Dinas Sosial Kota Medan", wk1d: "Disaster information system, scholarship portal and fieldwork across five villages.", wk2t: "Bunda Chatbot (thesis)", wk2d: "NusaBERT chatbot for maternal and infant health, 87.40% test F1.", wk_all: "See all work →", n4: "Test F1 of my thesis chatbot",
    n1: "Certifications", n2: "Students' scholarship data handled", n3: "Urban villages reached",
    s_h: "Toolbox", sk1: "Programming", sk2: "Data & analytics", sk3: "Network & security", sk4: "Design & multimedia", sk5: "Management & soft skills",
    lg_h: "Languages", lg1: "Indonesian · native", lg2: "English · limited working (IELTS Preparation Course, Aug 2026)",
    ce_h: "Certifi<span class='hl'>cations</span>", ce_s: "A selection of the ones that matter most. All 40 live on LinkedIn.", f_all: "All", f_ai: "AI", f_data: "Data", f_dev: "Code & network", f_design: "Design",
    mo_t: "+31 more", mo_d: "See every credential, with dates and IDs, on my LinkedIn.", mo_b: "Open LinkedIn →"
  },
  id: {
    k: "Tentang saya", p1: "Lulusan S1 Teknologi Informasi Universitas Sumatera Utara. Sebagai magang Data Analyst di Dinas Sosial Kota Medan saya membangun sistem informasi bencana dan portal beasiswa, lalu untuk skripsi saya membangun chatbot NusaBERT untuk kesehatan ibu dan bayi.", p2: "Saya bekerja dengan SQL, Python, dan Excel, dan menyeimbangkan angka dengan desain UI/UX dan multimedia di Figma, Adobe Creative Suite, dan Blender.", cv: "Unduh CV", li: "Profil LinkedIn",
    j_h: "Perjalanan", j1k: "08/2021", j1t: "Mulai kuliah di Universitas Sumatera Utara", j1d: "S1 Teknologi Informasi.", j2k: "02–06/2024", j2t: "Magang Data Analyst, Dinas Sosial Kota Medan", j2d: "Sistem informasi bencana, data beasiswa, dan penyaluran bantuan.", j2l: "Lihat proyeknya →", j3k: "2021–2026", j3t: "Belajar di sela kuliah", j3d: "Dari Huawei HCIA Big Data tahun 2023 hingga tiga kredensial Anthropic AI Fluency tahun 2026.", j4k: "Sekarang", j4t: "Terus berkembang dan tetap belajar", j4d: "Mengembangkan diri dan mengikuti keterampilan baru.", jtk: "2026", jtt: "Skripsi: Bunda Chatbot", jtd: "Chatbot NusaBERT untuk kesehatan ibu dan bayi: F1 uji 87,40% dan kesesuaian black-box 95,41%.", jtl: "Lihat skripsinya →", jgk: "10/2026", jgt: "Lulus", jgd: "S1 Teknologi Informasi, Universitas Sumatera Utara.", wk_h: "Karya <span class='hl'>pilihan</span>", wk1t: "Dinas Sosial Kota Medan", wk1d: "Sistem informasi bencana, portal beasiswa, dan kerja lapangan di lima kelurahan.", wk2t: "Bunda Chatbot (skripsi)", wk2d: "Chatbot NusaBERT untuk kesehatan ibu dan bayi, F1 uji 87,40%.", wk_all: "Lihat semua karya →", n4: "F1 uji chatbot skripsi saya",
    n1: "Sertifikasi", n2: "Data beasiswa mahasiswa dikelola", n3: "Kelurahan dijangkau",
    s_h: "Perangkat", sk1: "Pemrograman", sk2: "Data & analitik", sk3: "Jaringan & keamanan", sk4: "Desain & multimedia", sk5: "Manajemen & soft skills",
    lg_h: "Bahasa", lg1: "Indonesia · bahasa ibu", lg2: "Inggris · limited working (IELTS Preparation Course, Agt 2026)",
    ce_h: "Sertifi<span class='hl'>kasi</span>", ce_s: "Pilihan yang paling penting. Ke-40 sertifikat ada di LinkedIn.", f_all: "Semua", f_ai: "AI", f_data: "Data", f_dev: "Kode & jaringan", f_design: "Desain",
    mo_t: "+31 lainnya", mo_d: "Lihat semua kredensial, lengkap dengan tanggal dan ID, di LinkedIn saya.", mo_b: "Buka LinkedIn →"
  }
};
const $ = (s, r = document) => [...r.querySelectorAll(s)], L = () => document.documentElement.lang === 'id' ? 'id' : 'en';
function tr() { const l = L(); $('[data-m]').forEach(e => { const v = P[l][e.dataset.m]; if (v) e.innerHTML = v }) }
document.addEventListener('DOMContentLoaded', () => {
  tr(); new MutationObserver(tr).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  const co = new IntersectionObserver(es => es.forEach(x => {
    if (!x.isIntersecting) return; co.unobserve(x.target); const e = x.target, n = +e.dataset.count, d = +e.dataset.dec || 0, t0 = performance.now();
    (function f(t) { const k = Math.min((t - t0) / 1200, 1); e.textContent = (n * (1 - Math.pow(1 - k, 3))).toFixed(d) + (e.dataset.suf || ''); if (k < 1) requestAnimationFrame(f) })(t0)
  }), { threshold: .6 });
  $('[data-count]').forEach(e => co.observe(e));
  $('.chip').forEach(c => c.onclick = () => {
    $('.chip').forEach(x => x.classList.remove('on')); c.classList.add('on');
    $('[data-c]').forEach(e => e.classList.toggle('d-none', c.dataset.f !== 'all' && e.dataset.c !== c.dataset.f))
  });
});
