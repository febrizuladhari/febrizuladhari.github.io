const P = {
  en: {
    pf_s: "Two case studies so far, with a third on the way. Click a card to open the full story.",
    c1g: "Internship", c1t: "Dinas Sosial Kota Medan", c1d: "A disaster information system (SIMBA), a scholarship portal and fieldwork across five villages, as a Data Analyst intern.", c1a: "5 months", c1b: "125 students", c1c: "2 websites",
    c2g: "Thesis", c2t: "Bunda Chatbot", c2d: "A NusaBERT chatbot for maternal and infant health at midwife practices: 438 intents, three models compared, black-box and SUS tested.", c2a: "87.40% F1", c2b: "438 intents", c2c: "SUS 63.5",
    cta: "Read the case study", c3g: "Soon", c3t: "Next project", c3d: "Something new is being built. Peek at what's coming.", c3c: "See what's coming",
    cs_k: "Work 03", cs_t: "Coming <span class='hl'>soon</span>", cs_s: "This case study is still being built. Come back soon, or say hello in the meantime.", cs_p: "Work in progress", cs_b1: "← Back to all work", cs_b2: "Say hello",
    tk: ["Writing the story…", "Fixing the layout…", "Resizing screenshots…", "Brewing coffee…"]
  },
  id: {
    pf_s: "Dua studi kasus sejauh ini, dan yang ketiga segera menyusul. Klik kartu untuk membuka cerita lengkapnya.",
    c1g: "Magang", c1t: "Dinas Sosial Kota Medan", c1d: "Sistem informasi bencana (SIMBA), portal beasiswa, dan kerja lapangan di lima kelurahan, sebagai magang Data Analyst.", c1a: "5 bulan", c1b: "125 mahasiswa", c1c: "2 website",
    c2g: "Skripsi", c2t: "Bunda Chatbot", c2d: "Chatbot NusaBERT untuk kesehatan ibu dan bayi di praktik bidan: 438 intent, tiga model dibandingkan, diuji black-box dan SUS.", c2a: "F1 87,40%", c2b: "438 intent", c2c: "SUS 63,5",
    cta: "Baca studi kasusnya", c3g: "Segera", c3t: "Proyek berikutnya", c3d: "Ada yang sedang dibangun. Intip apa yang akan datang.", c3c: "Lihat yang akan datang",
    cs_k: "Karya 03", cs_t: "Segera <span class='hl'>hadir</span>", cs_s: "Studi kasus ini masih dikerjakan. Mampir lagi nanti, atau sapa saya dulu.", cs_p: "Sedang dikerjakan", cs_b1: "← Kembali ke semua karya", cs_b2: "Sapa saya",
    tk: ["Menulis ceritanya…", "Merapikan tampilan…", "Mengecilkan screenshot…", "Menyeduh kopi…"]
  }
};
const $ = (s, r = document) => [...r.querySelectorAll(s)], L = () => document.documentElement.lang === 'id' ? 'id' : 'en';
function tr() { const l = L(); $('[data-m]').forEach(e => { const v = P[l][e.dataset.m]; if (typeof v === 'string') e.innerHTML = v }) }
document.addEventListener('DOMContentLoaded', () => {
  tr(); new MutationObserver(tr).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  const t = $('#tick')[0]; if (t) {
    let i = 0; const W = () => P[L()].tk; t.textContent = W()[0];
    setInterval(() => { i = (i + 1) % W().length; t.style.opacity = 0; setTimeout(() => { t.textContent = W()[i]; t.style.opacity = 1 }, 250) }, 2000)
  }
});
