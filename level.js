// Yeh script har level-page (playgroup.html, nursery.html, lkg.html, ukg.html)
// par chalti hai. Body[data-level] se pata chalta hai kaunsa level hai,
// content.js se uska data uthate hain, aur har exercise ke "type" ke
// hisaab se ek asli, kaam karne wala activity banate hain.

(function () {
  const levelKey = document.body.getAttribute('data-level');
  const data = CONTENT[levelKey];
  if (!data) return;

  const monthStorageKey = 'selected-month-' + levelKey;
  const yearStorageKey = 'year-progress-' + levelKey;

  // ================= THEME + HEADER =================
  document.documentElement.style.setProperty('--current', data.color);
  document.querySelectorAll('.theme-color').forEach(el => el.style.background = data.color);
  document.querySelectorAll('.theme-color-soft').forEach(el => el.style.background = data.colorSoft);
  document.querySelectorAll('.theme-text').forEach(el => el.style.color = data.color);

  document.title = data.label + ' – Bachchon ki Paathshala';
  const nameEl = document.getElementById('levelName');
  if (nameEl) nameEl.textContent = data.label;
  const taglineEl = document.getElementById('levelTagline');
  if (taglineEl) taglineEl.textContent = data.tagline;
  const emojiEl = document.getElementById('levelEmoji');
  if (emojiEl) emojiEl.textContent = data.emoji;

  // ================= MONTH STATE =================
  const months = data.months || [{ name: 'Poora Course', learning: data.learning || [], exercises: data.exercises || [] }];

  function getSelectedMonth() {
    const saved = parseInt(localStorage.getItem(monthStorageKey), 10);
    return (Number.isInteger(saved) && saved >= 0 && saved < months.length) ? saved : 0;
  }
  function setSelectedMonth(i) { localStorage.setItem(monthStorageKey, String(i)); }
  let currentMonth = getSelectedMonth();

  function currentData() { return months[currentMonth]; }

  // ================= YEAR PROGRESS STORAGE (per month) =================
  function getYearProgress() {
    try { return JSON.parse(localStorage.getItem(yearStorageKey)) || {}; }
    catch (e) { return {}; }
  }
  function setYearProgress(p) { localStorage.setItem(yearStorageKey, JSON.stringify(p)); }

  function getProgress() {
    const yp = getYearProgress();
    return yp[currentMonth] || {};
  }
  function setProgress(p) {
    const yp = getYearProgress();
    yp[currentMonth] = p;
    setYearProgress(yp);
  }

  // ================= MONTH TABS =================
  const monthTabsEl = document.getElementById('monthTabs');
  function renderMonthTabs() {
    if (!monthTabsEl) return;
    monthTabsEl.innerHTML = months.map((m, i) => {
      const yp = getYearProgress();
      const doneCount = yp[i] ? Object.values(yp[i]).filter(Boolean).length : 0;
      const total = m.exercises.length;
      const complete = total && doneCount === total;
      return `<button class="month-tab ${i === currentMonth ? 'active' : ''} ${complete ? 'month-done' : ''}" data-mi="${i}">
        <span class="month-num">${i + 1}</span>
        <span class="month-label">${(m.name || ('Mahina ' + (i + 1))).replace(/^Mahina \d+ · /, '')}</span>
        ${complete ? '<span class="month-check">✅</span>' : ''}
      </button>`;
    }).join('');
    monthTabsEl.querySelectorAll('.month-tab').forEach(btn => {
      btn.addEventListener('click', () => {
        currentMonth = parseInt(btn.getAttribute('data-mi'), 10);
        setSelectedMonth(currentMonth);
        renderAll();
      });
    });
  }

  // ================= LEARNING CARDS =================
  const learningGrid = document.getElementById('learningGrid');
  function renderLearning() {
    if (!learningGrid) return;
    learningGrid.innerHTML = currentData().learning.map(item => `
      <div class="topic-card">
        <div class="emoji" style="background:${data.colorSoft}">${item.emoji}</div>
        <h3>${item.title}</h3>
        <p>${item.desc}</p>
      </div>
    `).join('');
  }
  const learningCount = document.getElementById('learningCount');

  // ================= MONTH HEADING =================
  const monthTitleEl = document.getElementById('monthTitle');

  function markComplete(idx) {
    const p = getProgress();
    if (p[idx]) return;
    p[idx] = true;
    setProgress(p);
    updateProgressBar();
    renderMonthTabs();
    const card = document.querySelector(`.ex-card[data-idx="${idx}"]`);
    if (card) {
      card.classList.add('ex-done');
      const status = card.querySelector('.ex-status');
      if (status) status.textContent = '✅ Poora hua!';
    }
  }

  function isComplete(idx) { return !!getProgress()[idx]; }

  function updateProgressBar() {
    const bar = document.getElementById('progressBar');
    const label = document.getElementById('progressLabel');
    if (!bar) return;
    const progress = getProgress();
    const done = Object.values(progress).filter(Boolean).length;
    const total = currentData().exercises.length;
    const pct = total ? Math.round((done / total) * 100) : 0;
    bar.style.width = pct + '%';
    bar.style.background = data.color;
    if (label) label.textContent = done + ' / ' + total + ' poora hua (is mahine mein)';
  }

  // ================= HELPERS =================
  function esc(s) { return String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
  function shuffle(arr) {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  // ================= CARD BUILDERS (HTML) =================
  function cardShell(idx, item, innerHtml) {
    const doneAlready = isComplete(idx) ? 'ex-done' : '';
    const statusText = isComplete(idx) ? '✅ Poora hua!' : '';
    return `
      <div class="ex-card ${doneAlready}" data-idx="${idx}" data-type="${item.type}">
        <div class="ex-head">
          <span class="emoji">${item.emoji || '🧩'}</span>
          <h3>${esc(item.title)}</h3>
          <span class="ex-status">${statusText}</span>
        </div>
        ${item.instruction ? `<p class="ex-instruction">${esc(item.instruction)}</p>` : ''}
        ${innerHtml}
      </div>
    `;
  }

  function buildQuiz(idx, item) {
    const opts = item.options.map((opt, oi) => `<button class="opt-btn" data-oi="${oi}">${esc(opt)}</button>`).join('');
    return cardShell(idx, item, `
      <p class="ex-q">${esc(item.question)}</p>
      <div class="ex-options">${opts}</div>
    `);
  }

  function buildMatch(idx, item) {
    const order = shuffle(item.pairs.map((_, pi) => pi));
    const leftHtml = item.pairs.map((p, pi) => `<button class="match-item" data-pi="${pi}">${esc(p.left)}</button>`).join('');
    const rightHtml = order.map(pi => `<button class="match-item" data-pi="${pi}">${esc(item.pairs[pi].right)}</button>`).join('');
    return cardShell(idx, item, `
      <div class="match-grid">
        <div class="match-col">${leftHtml}</div>
        <div class="match-col">${rightHtml}</div>
      </div>
    `);
  }

  function buildTrace(idx, item) {
    return cardShell(idx, item, `
      <div class="trace-wrap">
        <canvas class="trace-canvas" width="300" height="180"></canvas>
      </div>
      <div class="ex-actions">
        <button class="mini-btn act-clear">↺ Saaf karo</button>
        <button class="mini-btn act-done">✅ Ho gaya</button>
      </div>
    `);
  }

  function buildColor(idx, item) {
    const palette = ['#FF6F91', '#FFB74D', '#FFF176', '#81C784', '#4FC3F7', '#BA68C8', '#8D6E63', '#212121'];
    const swatches = palette.map((c, i) => `<button class="swatch ${i===0?'selected':''}" data-color="${c}" style="background:${c}"></button>`).join('');
    return cardShell(idx, item, `
      <div class="palette">${swatches}</div>
      <div class="color-svg-wrap">${coloringSvg(item.shape)}</div>
      <div class="ex-actions"><button class="mini-btn act-done">✅ Ho gaya</button></div>
    `);
  }

  function buildSpell(idx, item) {
    return cardShell(idx, item, `
      <div class="spell-hint">${item.hintEmoji || '⭐'}</div>
      <div class="spell-target"></div>
      <div class="spell-letters"></div>
      <div class="ex-actions"><button class="mini-btn act-reset">↺ Phir se</button></div>
    `);
  }

  function coloringSvg(shape) {
    if (shape === 'fish') {
      return `<svg viewBox="0 0 220 160" xmlns="http://www.w3.org/2000/svg">
        <ellipse class="region" data-region="body" cx="110" cy="80" rx="70" ry="42" fill="#ffffff" stroke="#2E2A3D" stroke-width="4"/>
        <polygon class="region" data-region="tail" points="180,80 220,45 220,115" fill="#ffffff" stroke="#2E2A3D" stroke-width="4"/>
        <polygon class="region" data-region="fin" points="95,50 115,20 130,55" fill="#ffffff" stroke="#2E2A3D" stroke-width="3"/>
        <circle cx="70" cy="72" r="6" fill="#2E2A3D"/>
      </svg>`;
    }
    if (shape === 'circle') {
      return `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle class="region" data-region="c1" cx="100" cy="100" r="85" fill="#ffffff" stroke="#2E2A3D" stroke-width="4"/>
      </svg>`;
    }
    if (shape === 'sun') {
      return `<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
        <circle class="region" data-region="face" cx="110" cy="110" r="55" fill="#ffffff" stroke="#2E2A3D" stroke-width="4"/>
        ${Array.from({length:8}).map((_,i)=>{
          const ang = (Math.PI/4)*i;
          const x1 = 110 + Math.cos(ang)*65, y1 = 110 + Math.sin(ang)*65;
          const x2 = 110 + Math.cos(ang)*100, y2 = 110 + Math.sin(ang)*100;
          return `<line class="region" data-region="ray${i}" x1="${x1.toFixed(1)}" y1="${y1.toFixed(1)}" x2="${x2.toFixed(1)}" y2="${y2.toFixed(1)}" stroke="#2E2A3D" stroke-width="10" stroke-linecap="round"/>`;
        }).join('')}
      </svg>`;
    }
    if (shape === 'star') {
      const cx=110, cy=110, rOuter=95, rInner=40;
      let pts = [];
      for (let i=0;i<10;i++){
        const r = i%2===0 ? rOuter : rInner;
        const ang = -Math.PI/2 + i*(Math.PI/5);
        pts.push((cx + r*Math.cos(ang)).toFixed(1) + ',' + (cy + r*Math.sin(ang)).toFixed(1));
      }
      return `<svg viewBox="0 0 220 220" xmlns="http://www.w3.org/2000/svg">
        <polygon class="region" data-region="star" points="${pts.join(' ')}" fill="#ffffff" stroke="#2E2A3D" stroke-width="4"/>
      </svg>`;
    }
    if (shape === 'apple') {
      return `<svg viewBox="0 0 200 220" xmlns="http://www.w3.org/2000/svg">
        <path class="region" data-region="body" d="M100,70 C60,50 20,80 25,130 C30,175 65,205 100,190 C135,205 170,175 175,130 C180,80 140,50 100,70 Z" fill="#ffffff" stroke="#2E2A3D" stroke-width="4"/>
        <path class="region" data-region="leaf" d="M100,70 C90,45 60,40 55,55 C50,70 80,80 100,70 Z" fill="#ffffff" stroke="#2E2A3D" stroke-width="3"/>
        <line x1="100" y1="70" x2="100" y2="45" stroke="#2E2A3D" stroke-width="4"/>
      </svg>`;
    }
    if (shape === 'umbrella') {
      return `<svg viewBox="0 0 220 200" xmlns="http://www.w3.org/2000/svg">
        <path class="region" data-region="canopy" d="M20,100 A90,80 0 0 1 200,100 Z" fill="#ffffff" stroke="#2E2A3D" stroke-width="4"/>
        <line x1="110" y1="100" x2="110" y2="175" stroke="#2E2A3D" stroke-width="5"/>
        <path d="M110,175 C110,190 130,190 130,175" fill="none" stroke="#2E2A3D" stroke-width="5"/>
      </svg>`;
    }
    // balloon (default)
    return `<svg viewBox="0 0 200 260" xmlns="http://www.w3.org/2000/svg">
      <ellipse class="region" data-region="body" cx="100" cy="105" rx="72" ry="88" fill="#ffffff" stroke="#2E2A3D" stroke-width="4"/>
      <polygon class="region" data-region="knot" points="90,188 110,188 100,206" fill="#ffffff" stroke="#2E2A3D" stroke-width="3"/>
      <line x1="100" y1="206" x2="100" y2="248" stroke="#2E2A3D" stroke-width="3"/>
    </svg>`;
  }

  // ================= RENDER ALL EXERCISES =================
  const exerciseList = document.getElementById('exerciseList');

  function renderExercises() {
    if (!exerciseList) return;
    const exercises = currentData().exercises;
    exerciseList.innerHTML = exercises.map((item, idx) => {
      switch (item.type) {
        case 'quiz':  return buildQuiz(idx, item);
        case 'match': return buildMatch(idx, item);
        case 'trace': return buildTrace(idx, item);
        case 'color': return buildColor(idx, item);
        case 'spell': return buildSpell(idx, item);
        default: return '';
      }
    }).join('');

    exercises.forEach((item, idx) => {
      const card = exerciseList.querySelector(`.ex-card[data-idx="${idx}"]`);
      if (!card) return;
      if (item.type === 'quiz')  wireQuiz(card, idx, item);
      if (item.type === 'match') wireMatch(card, idx, item);
      if (item.type === 'trace') wireTrace(card, idx, item);
      if (item.type === 'color') wireColor(card, idx, item);
      if (item.type === 'spell') wireSpell(card, idx, item);
    });
  }

  // ================= WIRE: QUIZ =================
  function wireQuiz(card, idx, item) {
    let answered = isComplete(idx);
    const btns = card.querySelectorAll('.opt-btn');
    if (answered) {
      btns.forEach((b, oi) => { if (oi === item.answer) b.classList.add('correct'); b.disabled = true; });
    }
    btns.forEach((btn, oi) => {
      btn.addEventListener('click', () => {
        if (answered) return;
        if (oi === item.answer) {
          btn.classList.add('correct');
          answered = true;
          btns.forEach(b => b.disabled = true);
          markComplete(idx);
        } else {
          btn.classList.add('wrong');
          btn.disabled = true;
          setTimeout(() => btn.classList.remove('wrong'), 600);
        }
      });
    });
  }

  // ================= WIRE: MATCH =================
  function wireMatch(card, idx, item) {
    const cols = card.querySelectorAll('.match-col');
    const leftItems = cols[0].querySelectorAll('.match-item');
    const rightItems = cols[1].querySelectorAll('.match-item');
    let selectedLeft = null;
    let matchedCount = 0;
    const total = item.pairs.length;

    if (isComplete(idx)) {
      leftItems.forEach(b => b.classList.add('matched'));
      rightItems.forEach(b => b.classList.add('matched'));
      matchedCount = total;
    }

    leftItems.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('matched')) return;
        leftItems.forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
        selectedLeft = btn;
      });
    });

    rightItems.forEach(btn => {
      btn.addEventListener('click', () => {
        if (btn.classList.contains('matched') || !selectedLeft) return;
        if (btn.getAttribute('data-pi') === selectedLeft.getAttribute('data-pi')) {
          btn.classList.add('matched');
          selectedLeft.classList.add('matched');
          selectedLeft.classList.remove('selected');
          selectedLeft = null;
          matchedCount++;
          if (matchedCount === total) markComplete(idx);
        } else {
          btn.classList.add('wrong');
          selectedLeft.classList.add('wrong');
          setTimeout(() => {
            btn.classList.remove('wrong');
            if (selectedLeft) selectedLeft.classList.remove('wrong', 'selected');
            selectedLeft = null;
          }, 500);
        }
      });
    });
  }

  // ================= WIRE: TRACE =================
  function wireTrace(card, idx, item) {
    const canvas = card.querySelector('.trace-canvas');
    const ctx = canvas.getContext('2d');
    canvas.style.touchAction = 'none';

    function drawGuide() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.fillStyle = 'rgba(46,42,61,0.16)';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      const cx = canvas.width / 2, cy = canvas.height / 2;
      if (item.letter === 'circle') {
        ctx.strokeStyle = 'rgba(46,42,61,0.16)';
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.arc(cx, cy, 65, 0, Math.PI * 2);
        ctx.stroke();
      } else if (item.letter === 'square') {
        ctx.strokeStyle = 'rgba(46,42,61,0.16)';
        ctx.lineWidth = 10;
        ctx.strokeRect(cx - 65, cy - 65, 130, 130);
      } else if (item.letter === 'triangle') {
        ctx.strokeStyle = 'rgba(46,42,61,0.16)';
        ctx.lineWidth = 10;
        ctx.beginPath();
        ctx.moveTo(cx, cy - 70);
        ctx.lineTo(cx + 70, cy + 60);
        ctx.lineTo(cx - 70, cy + 60);
        ctx.closePath();
        ctx.stroke();
      } else if (item.letter === 'star') {
        ctx.strokeStyle = 'rgba(46,42,61,0.16)';
        ctx.lineWidth = 8;
        const rOuter = 70, rInner = 30;
        ctx.beginPath();
        for (let i = 0; i < 10; i++) {
          const r = i % 2 === 0 ? rOuter : rInner;
          const ang = -Math.PI / 2 + i * (Math.PI / 5);
          const x = cx + r * Math.cos(ang), y = cy + r * Math.sin(ang);
          if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.stroke();
      } else {
        const text = String(item.letter);
        const fontSize = text.length > 1 ? Math.max(60, 130 - (text.length - 1) * 30) : 130;
        ctx.font = fontSize + 'px Baloo 2, sans-serif';
        ctx.fillText(text, cx, cy + 8);
      }
      ctx.restore();
    }
    drawGuide();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(drawGuide).catch(() => {});
    }

    let drawing = false;
    ctx.strokeStyle = data.color;
    ctx.lineWidth = 7;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    function pos(e) {
      const r = canvas.getBoundingClientRect();
      const scaleX = canvas.width / r.width;
      const scaleY = canvas.height / r.height;
      return { x: (e.clientX - r.left) * scaleX, y: (e.clientY - r.top) * scaleY };
    }
    canvas.addEventListener('pointerdown', e => {
      drawing = true;
      const p = pos(e);
      ctx.beginPath();
      ctx.moveTo(p.x, p.y);
      canvas.setPointerCapture(e.pointerId);
    });
    canvas.addEventListener('pointermove', e => {
      if (!drawing) return;
      const p = pos(e);
      ctx.lineTo(p.x, p.y);
      ctx.stroke();
    });
    ['pointerup', 'pointerleave', 'pointercancel'].forEach(ev =>
      canvas.addEventListener(ev, () => { drawing = false; })
    );

    card.querySelector('.act-clear').addEventListener('click', drawGuide);
    card.querySelector('.act-done').addEventListener('click', () => markComplete(idx));
  }

  // ================= WIRE: COLOR =================
  function wireColor(card, idx, item) {
    let selectedColor = card.querySelector('.swatch').getAttribute('data-color');
    card.querySelectorAll('.swatch').forEach(sw => {
      sw.addEventListener('click', () => {
        card.querySelectorAll('.swatch').forEach(s => s.classList.remove('selected'));
        sw.classList.add('selected');
        selectedColor = sw.getAttribute('data-color');
      });
    });
    card.querySelectorAll('.region').forEach(region => {
      region.addEventListener('click', () => { region.setAttribute('fill', selectedColor); });
    });
    card.querySelector('.act-done').addEventListener('click', () => markComplete(idx));
  }

  // ================= WIRE: SPELL =================
  function wireSpell(card, idx, item) {
    const targetEl = card.querySelector('.spell-target');
    const lettersEl = card.querySelector('.spell-letters');
    const correct = item.letters;
    let answer = [];
    let order = [];

    function setup() {
      answer = [];
      order = shuffle(correct.map((_, i) => i));
      targetEl.innerHTML = correct.map(() => `<span class="blank"></span>`).join('');
      lettersEl.innerHTML = order.map(li => `<button class="letter-btn" data-li="${li}">${esc(correct[li])}</button>`).join('');
      lettersEl.querySelectorAll('.letter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          if (btn.disabled) return;
          answer.push(btn.getAttribute('data-li'));
          btn.disabled = true;
          btn.classList.add('used');
          refreshTarget();
          if (answer.length === correct.length) checkAnswer();
        });
      });
    }

    function refreshTarget() {
      const blanks = targetEl.querySelectorAll('.blank');
      blanks.forEach((b, i) => { b.textContent = answer[i] !== undefined ? correct[answer[i]] : ''; });
    }

    function checkAnswer() {
      const isRight = answer.every((li, i) => correct[Number(li)] === correct[i]);
      if (isRight) {
        targetEl.classList.add('spell-correct');
        markComplete(idx);
      } else {
        targetEl.classList.add('spell-wrong');
        setTimeout(() => {
          targetEl.classList.remove('spell-wrong');
          setup();
        }, 700);
      }
    }

    if (isComplete(idx)) {
      answer = correct.map((_, i) => i);
      order = correct.map((_, i) => i);
      targetEl.innerHTML = correct.map(l => `<span class="blank">${esc(l)}</span>`).join('');
      targetEl.classList.add('spell-correct');
      lettersEl.innerHTML = '';
    } else {
      setup();
    }

    card.querySelector('.act-reset').addEventListener('click', setup);
  }

  // ================= RENDER ALL =================
  const exerciseCount = document.getElementById('exerciseCount');

  function renderAll() {
    if (monthTitleEl) monthTitleEl.textContent = currentData().name || '';
    renderMonthTabs();
    renderLearning();
    if (learningCount) learningCount.textContent = currentData().learning.length + ' topic';
    renderExercises();
    updateProgressBar();
    if (exerciseCount) exerciseCount.textContent = currentData().exercises.length + ' exercise';
  }

  // ================= INIT =================
  renderAll();

  const resetBtn = document.getElementById('resetBtn');
  if (resetBtn) {
    resetBtn.addEventListener('click', () => {
      const yp = getYearProgress();
      delete yp[currentMonth];
      setYearProgress(yp);
      renderAll();
    });
  }
  const resetYearBtn = document.getElementById('resetYearBtn');
  if (resetYearBtn) {
    resetYearBtn.addEventListener('click', () => {
      localStorage.removeItem(yearStorageKey);
      renderAll();
    });
  }
  const printBtn = document.getElementById('printBtn');
  if (printBtn) printBtn.addEventListener('click', () => window.print());
})();
