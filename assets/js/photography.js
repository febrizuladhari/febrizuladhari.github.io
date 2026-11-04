const P = {
    en: {
        back: "← All hobbies", ph_k: "Hobby · Photography", ph_t: "Frames I <span class='hl'>kept</span>", ph_s: "Night markets, dark gardens and cameras that move on purpose. Open any frame to step inside.", ph_c: "{n} frames · {s} series",
        v_wall: "Wall", v_strip: "Film strip", f_all: "All", ph_hint: "Tap a frame to open it. Arrow keys or swipe to move on.",
        wl_h: "What I <span class='hl'>look for</span>", w1t: "Low light", w1d: "Warm lamps, dark backgrounds, and one thing glowing.", w2t: "People at work", w2d: "The quiet focus of someone absorbed in their craft.", w3t: "Movement", w3d: "Moving the camera on purpose to see what the flowers do.",
        o1: "Back to hobbies", o2: "Say hello", cl: "Close", pv: "Previous", nx: "Next"
    },
    id: {
        back: "← Semua hobi", ph_k: "Hobi · Fotografi", ph_t: "Bingkai yang <span class='hl'>kusimpan</span>", ph_s: "Pasar malam, taman yang gelap, dan kamera yang sengaja digerakkan. Buka bingkai mana saja untuk masuk lebih dalam.", ph_c: "{n} bingkai · {s} seri",
        v_wall: "Dinding", v_strip: "Rol film", f_all: "Semua", ph_hint: "Ketuk bingkai untuk membukanya. Panah keyboard atau geser untuk lanjut.",
        wl_h: "Yang saya <span class='hl'>cari</span>", w1t: "Cahaya minim", w1d: "Lampu hangat, latar gelap, dan satu hal yang bersinar.", w2t: "Orang yang bekerja", w2d: "Fokus tenang seseorang yang tenggelam dalam pekerjaannya.", w3t: "Gerak", w3d: "Sengaja menggerakkan kamera untuk melihat apa yang terjadi pada bunga.",
        o1: "Kembali ke hobi", o2: "Sapa saya", cl: "Tutup", pv: "Sebelumnya", nx: "Berikutnya"
    }
};
const SER = { night: { en: "Night market", id: "Pasar malam" }, flora: { en: "Flowers in the dark", id: "Bunga dalam gelap" }, street: { en: "Street", id: "Jalanan" }, motion: { en: "Motion & blur", id: "Gerak & blur" } };
const PH = window.PHOTOS, $ = (s, r = document) => [...r.querySelectorAll(s)], L = () => document.documentElement.lang === 'id' ? 'id' : 'en';
let flt = 'all', vis = PH.map((_, i) => i), pos = 0, last = null;
const T = k => P[L()][k];
function tr() {
    const l = L(); $('[data-m]').forEach(e => { const v = P[l][e.dataset.m]; if (typeof v === 'string') e.innerHTML = v });
    $('#stat')[0].textContent = T('ph_c').replace('{n}', PH.length).replace('{s}', Object.keys(SER).length);
    $('.print').forEach(b => { const p = PH[b.dataset.i]; $('img', b)[0].alt = p.t[l]; $('b', b)[0].textContent = p.t[l]; $('.cap .mono', b)[0].textContent = SER[p.s][l] });
    $('#chips button').forEach(b => b.textContent = b.dataset.f === 'all' ? T('f_all') : SER[b.dataset.f][l]);
    $('.hc').forEach(b => $('img', b)[0].alt = PH[b.dataset.i].t[l]);
    $('#lbx-x')[0].setAttribute('aria-label', T('cl')); $('#lbx-p')[0].setAttribute('aria-label', T('pv')); $('#lbx-n')[0].setAttribute('aria-label', T('nx'));
    if ($('#lbx')[0].classList.contains('show')) info()
}
function info() {
    const p = PH[vis[pos]], l = L(), e = p.x;
    $('#lbn')[0].textContent = String(pos + 1).padStart(2, '0') + ' / ' + String(vis.length).padStart(2, '0') + ' · ' + SER[p.s][l];
    $('#lbt')[0].textContent = p.t[l]; $('#lbd')[0].textContent = p.d[l];
    const x = $('#lbe')[0]; x.classList.toggle('d-none', !e); if (e) x.innerHTML = [e.cam, e.lens, [e.fl, e.f, e.ss, e.iso].filter(Boolean).join(' · ')].filter(Boolean).join('<br>');
    const im = $('#lbi')[0]; im.alt = p.t[l]
}
function show() {
    const p = PH[vis[pos]], im = $('#lbi')[0]; im.src = 'assets/img/photo/' + p.f + '-l.webp'; im.width = p.lw; im.height = p.lh; $('#lbx')[0].style.setProperty('--tint', p.c); info();
    const n = PH[vis[(pos + 1) % vis.length]]; new Image().src = 'assets/img/photo/' + n.f + '-l.webp'
}
function open(i) { if (!vis.includes(i)) { flt = 'all'; filter('all') } pos = vis.indexOf(i); last = document.activeElement; const b = $('#lbx')[0]; b.classList.add('show'); document.body.style.overflow = 'hidden'; show(); $('#lbx-x')[0].focus() }
function close() { $('#lbx')[0].classList.remove('show'); document.body.style.overflow = ''; if (last) last.focus() }
function go(d) { pos = (pos + d + vis.length) % vis.length; show() }
function filter(f) {
    flt = f; vis = PH.map((p, i) => i).filter(i => f === 'all' || PH[i].s === f);
    $('.print').forEach(b => b.classList.toggle('d-none', !vis.includes(+b.dataset.i)));
    $('#chips button').forEach(b => b.classList.toggle('on', b.dataset.f === f)); $('#cnt')[0].textContent = vis.length + ' / ' + PH.length
}
document.addEventListener('DOMContentLoaded', () => {
    $('#wall')[0].innerHTML = PH.map((p, i) => `<button class="print" data-i="${i}" style="--bg:${p.c}"><span class="no">${String(i + 1).padStart(2, '0')}</span><img src="assets/img/photo/${p.f}-s.webp" width="${p.tw}" height="${p.th}" alt="" loading="lazy" decoding="async"><span class="cap"><b></b><span class="mono"></span></span></button>`).join('');
    $('#chips')[0].innerHTML = ['all', ...Object.keys(SER)].map(f => `<button class="pchip${f === 'all' ? ' on' : ''}" data-f="${f}"></button>`).join('');
    $('#chips button').forEach(b => b.onclick = () => filter(b.dataset.f));
    $('.print').forEach(b => b.onclick = () => open(+b.dataset.i)); $('.hc').forEach(b => b.onclick = () => open(+b.dataset.i));
    $('[data-v]').forEach(b => b.onclick = () => { $('[data-v]').forEach(x => x.classList.remove('on')); b.classList.add('on'); const w = $('#wall')[0]; w.className = b.dataset.v; w.scrollLeft = 0 });
    $('#lbx-x')[0].onclick = close; $('#lbx-p')[0].onclick = () => go(-1); $('#lbx-n')[0].onclick = () => go(1);
    $('#lbx')[0].onclick = e => { if (e.target.classList.contains('lbx-st')) close() };
    document.addEventListener('keydown', e => { if (!$('#lbx')[0].classList.contains('show')) return; if (e.key === 'Escape') close(); if (e.key === 'ArrowRight') go(1); if (e.key === 'ArrowLeft') go(-1) });
    let sx = 0; const st = $('.lbx-st')[0]; st.addEventListener('touchstart', e => { sx = e.changedTouches[0].clientX }, { passive: true }); st.addEventListener('touchend', e => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 50) go(d < 0 ? 1 : -1) });
    filter('all'); tr(); new MutationObserver(tr).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
});
