Object.assign(P.en, {
    s4: "Test F1 (best model)", d3: "Fine-tuned for 30 epochs each and compared on the same 438-class task. IndoBERT-p2 uses [CLS] pooling, the other two use mean pooling.",
    e_h: "Results & <span class='hl'>metrics</span>", e_s: "Three encoders, one 438-class intent task. Every number comes from the audit report of the test set and training logs.",
    kp1: "IndoBERT-p1 vs p2 (mean pooling vs [CLS] + NSP)", kp2: "NusaBERT vs IndoBERT-p1 (larger corpus)", kp3: "NusaBERT vs IndoBERT-p2 (total gap)", pts: "points of test F1",
    vw1: "Metrics", vw2: "F1 distribution", vw3: "Overfitting gap", vw4: "Loss", vw5: "Per category",
    in_m: "NusaBERT leads on all four metrics, but its margin over IndoBERT-p1 is only 0.10 points of F1. The axis starts at 85% to make small gaps visible.",
    in_d: "Number of classes per F1 band. With NusaBERT 85.4% of classes reach F1 ≥ 0.8, against 84.7% (p1) and 82.2% (p2).",
    in_g: "Train F1 minus validation F1 at the final epoch. All three sit between the 10% and 15% lines, and NusaBERT has the smallest gap.",
    in_l: "NusaBERT has the lowest test loss and validation loss of the three. The axis starts at 1.0.",
    in_c: "Recall per topic category (diagonal of the confusion matrix). Indicative only: the categories come from a keyword heuristic and still need verification.",
    ch_m: "Score (%)", ch_c: "Classes", ch_g: "Gap (%)", ch_l: "Loss", ch_r: "Recall (%)", ch_t: "mild overfit (10%)", ch_s: "significant overfit (15%)",
    tb1: "Model comparison", tb2: "Training analysis", tb3: "Per-class robustness", tb4: "Weakest classes", tb4s: "The five lowest-F1 classes per model. The same four topics appear for all three models, which hints at neighbouring intents that are hard to tell apart.",
    th_m: "Model", th_pt: "Pre-training", th_po: "Pooling", th_tl: "Test loss", th_bv: "Best val F1 (epoch)", th_ep: "Epochs", th_gp: "Final gap", th_i5: "F1 change, last 5 epochs (%/ep)", th_sd: "Val F1 std, last 10 epochs", th_vl: "Val loss min / final", th_fm: "Lowest class F1", th_b5: "Classes F1 < 0.5", th_pf: "Perfect classes (F1 = 1.0)", th_ge: "Classes F1 ≥ 0.8", th_cl: "Class", th_pr: "Precision", th_re: "Recall",
    tk_h: "Takeaways", tk_p: "Pooling mattered more than the pre-training corpus. IndoBERT-p1 (mean pooling, MLM only) beat IndoBERT-p2 ([CLS], MLM + NSP), and NusaBERT's much larger corpus added only 0.10 points on top. For short Indonesian texts across 438 intents, the extra regional-language pre-training brings little. NusaBERT-base with mean pooling is the pick for the chatbot: best F1 and only one class under 50%.", tk_n: "Numbers come from one reported run per model and the gaps are under half a point, so read them as a trend rather than proof.",
    fg_h: "Evidence: <span class='hl'>the plots</span>", fg_s: "Original figures from the audit report. Tap to zoom.", fg1: "Test metrics per model.", fg2: "Validation F1 (stars mark the best epoch) and training F1 per epoch.", fg3: "Train minus validation F1 per epoch, with 10% and 15% reference lines.", fg4: "Precision vs recall of each of the 438 classes; the weakest are labelled.", fg5: "Category confusion matrix, row-normalised. Categories come from a keyword heuristic and still need verification."
});
Object.assign(P.id, {
    s4: "F1 uji (model terbaik)", d3: "Fine-tuning 30 epoch tiap model dan dibandingkan pada tugas 438 kelas yang sama. IndoBERT-p2 memakai pooling [CLS], dua model lainnya memakai mean pooling.",
    e_h: "Hasil & <span class='hl'>metrik</span>", e_s: "Tiga encoder, satu tugas klasifikasi 438 intent. Semua angka berasal dari laporan audit data uji dan log pelatihan.",
    kp1: "IndoBERT-p1 vs p2 (mean pooling vs [CLS] + NSP)", kp2: "NusaBERT vs IndoBERT-p1 (korpus lebih besar)", kp3: "NusaBERT vs IndoBERT-p2 (selisih total)", pts: "poin F1 uji",
    vw1: "Metrik", vw2: "Distribusi F1", vw3: "Gap overfitting", vw4: "Loss", vw5: "Per kategori",
    in_m: "NusaBERT unggul di keempat metrik, tetapi selisihnya dari IndoBERT-p1 hanya 0,10 poin F1. Sumbu dimulai dari 85% agar selisih kecil terlihat.",
    in_d: "Jumlah kelas per rentang F1. Pada NusaBERT 85,4% kelas mencapai F1 ≥ 0,8, dibanding 84,7% (p1) dan 82,2% (p2).",
    in_g: "F1 latih dikurangi F1 validasi pada epoch terakhir. Ketiganya berada di antara garis 10% dan 15%, dan NusaBERT punya gap terkecil.",
    in_l: "NusaBERT punya test loss dan validation loss terendah di antara ketiganya. Sumbu dimulai dari 1,0.",
    in_c: "Recall per kategori topik (diagonal confusion matrix). Hanya indikatif: kategori berasal dari heuristik kata kunci dan masih perlu diverifikasi.",
    ch_m: "Skor (%)", ch_c: "Jumlah kelas", ch_g: "Gap (%)", ch_l: "Loss", ch_r: "Recall (%)", ch_t: "overfit ringan (10%)", ch_s: "overfit signifikan (15%)",
    tb1: "Perbandingan model", tb2: "Analisis pelatihan", tb3: "Ketahanan per kelas", tb4: "Kelas terlemah", tb4s: "Lima kelas dengan F1 terendah per model. Empat topik yang sama muncul di ketiga model, menandakan intent bertetangga yang sulit dibedakan.",
    th_m: "Model", th_pt: "Pre-training", th_po: "Pooling", th_tl: "Test loss", th_bv: "Val F1 terbaik (epoch)", th_ep: "Epoch", th_gp: "Gap akhir", th_i5: "Perubahan F1, 5 epoch terakhir (%/ep)", th_sd: "Std val F1, 10 epoch terakhir", th_vl: "Val loss min / akhir", th_fm: "F1 kelas terendah", th_b5: "Kelas F1 < 0,5", th_pf: "Kelas sempurna (F1 = 1,0)", th_ge: "Kelas F1 ≥ 0,8", th_cl: "Kelas", th_pr: "Precision", th_re: "Recall",
    tk_h: "Kesimpulan", tk_p: "Metode pooling lebih berpengaruh daripada korpus pre-training. IndoBERT-p1 (mean pooling, hanya MLM) mengalahkan IndoBERT-p2 ([CLS], MLM + NSP), dan korpus NusaBERT yang jauh lebih besar hanya menambah 0,10 poin. Untuk teks pendek berbahasa Indonesia dengan 438 intent, pre-training bahasa daerah tambahan memberi dampak kecil. NusaBERT-base dengan mean pooling dipilih untuk chatbot: F1 tertinggi dan hanya satu kelas di bawah 50%.", tk_n: "Angka berasal dari satu run yang dilaporkan per model dan selisihnya di bawah setengah poin, jadi baca sebagai tren, bukan bukti.",
    fg_h: "Bukti: <span class='hl'>plot-plotnya</span>", fg_s: "Gambar asli dari laporan audit. Ketuk untuk memperbesar.", fg1: "Metrik uji per model.", fg2: "F1 validasi (bintang menandai epoch terbaik) dan F1 latih per epoch.", fg3: "F1 latih dikurangi F1 validasi per epoch, dengan garis acuan 10% dan 15%.", fg4: "Precision vs recall tiap dari 438 kelas; yang terlemah diberi label.", fg5: "Confusion matrix per kategori, dinormalisasi per baris. Kategori berasal dari heuristik kata kunci dan masih perlu diverifikasi."
});
const SD = window.SKRIPSI_DATA, M = SD.models, CL = ['#ff4d2e', '#161513', '#8fd5b4'], T = k => P[L()][k];
let ch, cur = 'm', lm = 0;
const ds = (m, i, d) => ({ label: m.name, data: d, backgroundColor: CL[i], borderColor: '#161513', borderWidth: 2 });
function view(v) {
    cur = v; if (ch) ch.destroy(); $('#cbox')[0].style.height = v === 'c' ? '560px' : '380px';
    let type = 'bar', data, opt = {};
    if (v === 'm') { data = { labels: ['Accuracy', 'Precision', 'Recall', 'F1'], datasets: M.map((m, i) => ds(m, i, [m.acc, m.prec, m.rec, m.f1])) }; opt = { scales: { y: { min: 85, max: 90, title: { display: true, text: T('ch_m') } } } } }
    if (v === 'd') { data = { labels: SD.distLabels, datasets: M.map((m, i) => ds(m, i, m.dist)) }; opt = { scales: { x: { title: { display: true, text: 'F1' } }, y: { title: { display: true, text: T('ch_c') } } } } }
    if (v === 'g') {
        const ln = (t, y, c) => ({ type: 'line', label: t, data: M.map(() => y), borderColor: c, borderDash: [6, 4], borderWidth: 2, pointRadius: 0 });
        data = { labels: M.map(m => m.name), datasets: [{ label: T('ch_g'), data: M.map(m => m.gap), backgroundColor: CL, borderColor: '#161513', borderWidth: 2 }, ln(T('ch_t'), 10, '#e0a800'), ln(T('ch_s'), 15, '#ff4d2e')] }; opt = { scales: { y: { min: 0, max: 16, title: { display: true, text: T('ch_g') } } } }
    }
    if (v === 'l') { data = { labels: ['Test loss', 'Val loss (min)', 'Val loss (final)'], datasets: M.map((m, i) => ds(m, i, [m.testLoss, m.valLossMin, m.valLossFinal])) }; opt = { scales: { y: { min: 1, max: 1.25, title: { display: true, text: T('ch_l') } } } } }
    if (v === 'c') { data = { labels: SD.categories, datasets: M.map((m, i) => ds(m, i, m.cat.map(x => Math.round(x * 100)))) }; opt = { indexAxis: 'y', scales: { x: { min: 70, max: 100, title: { display: true, text: T('ch_r') } } } } }
    ch = new Chart($('#cv')[0], { type, data, options: Object.assign({ responsive: true, maintainAspectRatio: false, plugins: { legend: { position: 'bottom' } } }, opt) });
    $('#cins')[0].dataset.m = 'in_' + v; tr()
}
function tabs() {
    const mx = f => Math.max(...M.map(f)), b = (v, best, t) => v === best ? `<span class="hl">${t}</span>` : t, best = { a: mx(m => m.acc), p: mx(m => m.prec), r: mx(m => m.rec), f: mx(m => m.f1), l: Math.min(...M.map(m => m.testLoss)) };
    $('#t1 tbody')[0].innerHTML = M.map(m => `<tr><td><strong>${m.name}</strong></td><td>${m.pretrain}</td><td>${m.pooling}</td><td>${b(m.acc, best.a, m.acc + '%')}</td><td>${b(m.prec, best.p, m.prec + '%')}</td><td>${b(m.rec, best.r, m.rec + '%')}</td><td>${b(m.f1, best.f, m.f1 + '%')}</td><td>${b(m.testLoss, best.l, m.testLoss)}</td></tr>`).join('');
    $('#t2 tbody')[0].innerHTML = M.map(m => `<tr><td><strong>${m.name}</strong></td><td>${m.bestValF1}% (${m.bestEpoch})</td><td>${m.epochs}</td><td>${m.gap}%</td><td>${m.impr5 > 0 ? '+' : '−'}${Math.abs(m.impr5).toFixed(4)}</td><td>${m.std10}%</td><td>${m.valLossMin} / ${m.valLossFinal}</td></tr>`).join('');
    $('#t3 tbody')[0].innerHTML = M.map(m => { const tot = m.dist.reduce((a, c) => a + c, 0), g = m.dist.slice(4).reduce((a, c) => a + c, 0); return `<tr><td><strong>${m.name}</strong></td><td>${m.f1min}</td><td>${m.below50}</td><td>${m.perfect}</td><td>${g} (${(g / tot * 100).toFixed(1)}%)</td></tr>` }).join('')
}
function low() { const m = M[lm]; $('#t4 tbody')[0].innerHTML = m.low.map(r => `<tr><td>${r[0]}</td><td>${r[1].toFixed(3)}</td><td>${r[2].toFixed(3)}</td><td>${r[3].toFixed(4)}<div style="height:8px;width:90px;border:2px solid #161513;margin-top:4px"><div style="height:100%;width:${r[3] * 100}%;background:${CL[lm]}"></div></div></td></tr>`).join('') }
document.addEventListener('DOMContentLoaded', () => {
    Chart.defaults.font.family = "'DM Mono',monospace"; Chart.defaults.color = '#161513'; Chart.defaults.borderColor = 'rgba(22,21,19,.15)';
    $('.chip[data-v]').forEach(c => c.onclick = () => { $('.chip[data-v]').forEach(x => x.classList.remove('on')); c.classList.add('on'); view(c.dataset.v) });
    const lc = $('#lmc')[0]; M.forEach((m, i) => { const b = document.createElement('button'); b.className = 'chip' + (i ? '' : ' on'); b.dataset.lm = i; b.textContent = m.name; b.onclick = () => { $('.chip[data-lm]').forEach(x => x.classList.remove('on')); b.classList.add('on'); lm = i; low() }; lc.appendChild(b) });
    new MutationObserver(() => view(cur)).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
    view('m'); tabs(); low();
});
