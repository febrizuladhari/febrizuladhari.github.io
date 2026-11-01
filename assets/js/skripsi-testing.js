Object.assign(P.en, {
    ts_h: "Does it <span class='hl'>work</span>?", ts_s: "Two rounds of system testing: functional black-box tests, and a usability questionnaire with real users.",
    t1: "Test cases", t2: "Black-box conformity", t3: "SUS score (average)", t4: "Real users (SUS)",
    bb_h: "Black-box testing", bb_p: "Test cases from experts and real users, checked against the expected chatbot behaviour.", bb_ok: "Conforming", bb_no: "Non-conforming",
    su_h: "Usability (SUS)", su_p: "System Usability Scale questionnaire with five real users. The average of 63.5 sits in the marginal “OK” band.", su_z1: "Not acceptable", su_z2: "Marginal", su_z3: "Acceptable", su_avg: "Dashed line: commonly cited SUS average (68)", su_n: "Indicative only, with five respondents. Zone limits are approximate reference ranges.",
    cn_h: "Conclusions", cn1: "Black-box testing of 109 test cases from experts and real users showed 95.41% conformity, so the chatbot works as designed overall.", cn2: "The SUS questionnaire with five real users gave an average of 63.5, the marginal “OK” category. The system is acceptable to users, but ease of use still depends on digital literacy and has not reached good or excellent. The score is indicative because there were few respondents.",
    lm_h: "Known <span class='hl'>limitations</span>", lm1t: "438-intent classification", lm1d: "Separating 438 close intents remains hard; the weakest classes above show where.", lm2t: "Confidence threshold", lm2d: "The confidence threshold settings still need work.", lm3t: "Language normalisation", lm3d: "The normalisation does not yet cover every spelling and abbreviation variant.", lm4t: "Dataset diversity", lm4d: "The dataset does not yet capture the full variety of phrasings and maternal and infant health topics."
});
Object.assign(P.id, {
    ts_h: "Apakah sudah <span class='hl'>berfungsi</span>?", ts_s: "Dua putaran pengujian sistem: pengujian fungsional black-box, dan kuesioner usability dengan pengguna nyata.",
    t1: "Kasus uji", t2: "Kesesuaian black-box", t3: "Skor SUS (rata-rata)", t4: "Pengguna nyata (SUS)",
    bb_h: "Pengujian black-box", bb_p: "Kasus uji dari pakar dan pengguna nyata, dicek terhadap perilaku chatbot yang diharapkan.", bb_ok: "Sesuai", bb_no: "Tidak sesuai",
    su_h: "Usability (SUS)", su_p: "Kuesioner System Usability Scale dengan lima pengguna nyata. Rata-rata 63,5 berada di kategori marginal “OK”.", su_z1: "Tidak dapat diterima", su_z2: "Marginal", su_z3: "Dapat diterima", su_avg: "Garis putus-putus: rata-rata SUS yang umum dikutip (68)", su_n: "Hanya indikatif karena responden lima orang. Batas zona adalah rentang acuan perkiraan.",
    cn_h: "Kesimpulan", cn1: "Pengujian fungsionalitas secara black-box terhadap 109 kasus uji dari pakar dan pengguna nyata menunjukkan tingkat kesesuaian 95,41%, sehingga chatbot secara umum telah berfungsi sesuai rancangan.", cn2: "Pengujian usability dengan kuesioner SUS terhadap lima pengguna nyata menghasilkan skor rata-rata 63,5, kategori marginal “OK”. Sistem sudah dapat diterima pengguna, namun kemudahan penggunaannya masih dipengaruhi tingkat literasi digital dan belum mencapai kategori good/excellent. Skor bersifat indikatif karena jumlah responden terbatas.",
    lm_h: "Keterbatasan yang <span class='hl'>ditemukan</span>", lm1t: "Klasifikasi 438 intent", lm1d: "Membedakan 438 intent yang berdekatan masih sulit; kelas terlemah di atas menunjukkan letaknya.", lm2t: "Confidence threshold", lm2d: "Pengaturan confidence threshold masih perlu dibenahi.", lm3t: "Normalisasi bahasa", lm3d: "Cakupan normalisasi belum menjangkau semua variasi ejaan dan singkatan.", lm4t: "Keberagaman dataset", lm4d: "Dataset belum merepresentasikan seluruh variasi frasa dan topik kesehatan ibu dan bayi."
});
const TS = window.SKRIPSI_DATA.testing; let bch;
function bb() {
    if (bch) bch.destroy(); const b = TS.blackbox, t = P[L()];
    bch = new Chart($('#bbc')[0], { type: 'doughnut', data: { labels: [t.bb_ok + ' (' + b.passed + ')', t.bb_no + ' (' + (b.cases - b.passed) + ')'], datasets: [{ data: [b.passed, b.cases - b.passed], backgroundColor: ['#8fd5b4', '#ff4d2e'], borderColor: '#161513', borderWidth: 3 }] }, options: { responsive: true, maintainAspectRatio: false, cutout: '58%', plugins: { legend: { position: 'bottom' } } } })
}
document.addEventListener('DOMContentLoaded', () => {
    const set = (id, n) => { $('#' + id)[0].dataset.count = n }; set('tn1', TS.blackbox.cases); set('tn2', TS.blackbox.rate); set('tn3', TS.sus.mean); set('tn4', TS.sus.n);
    bb(); new MutationObserver(bb).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { $('#susm')[0].style.left = TS.sus.mean + '%'; io.disconnect() } }), { threshold: .5 }); io.observe($('.sus')[0]);
});
