// ===== TCS NQT Exam Prediction Tool — Main Engine =====

// ===== HEATMAP DATA =====
const HEATMAPS = {
  numerical: [
    {topic:"Percentages",heat:5,freq:"~4-5 Qs"},{topic:"Profit & Loss",heat:5,freq:"~3-4 Qs"},
    {topic:"Time & Work",heat:5,freq:"~3-4 Qs"},{topic:"Ratio & Proportion",heat:4,freq:"~2-3 Qs"},
    {topic:"Number System/LCM/HCF",heat:4,freq:"~2-3 Qs"},{topic:"Speed/Distance/Time",heat:4,freq:"~2-3 Qs"},
    {topic:"Averages",heat:3,freq:"~1-2 Qs"},{topic:"Data Interpretation",heat:4,freq:"~2-3 Qs"},
    {topic:"SI & CI",heat:3,freq:"~1-2 Qs"},{topic:"Geometry",heat:3,freq:"~1-2 Qs"},
    {topic:"Ages",heat:3,freq:"~1-2 Qs"},{topic:"Divisibility",heat:2,freq:"~1 Q"},
    {topic:"Mixtures",heat:2,freq:"~1 Q"}
  ],
  verbal: [
    {topic:"Reading Comprehension",heat:5,freq:"~6-8 Qs"},{topic:"Error Spotting",heat:5,freq:"~4-5 Qs"},
    {topic:"Synonyms",heat:4,freq:"~3-4 Qs"},{topic:"Antonyms",heat:4,freq:"~2-3 Qs"},
    {topic:"Sentence Completion",heat:4,freq:"~3-4 Qs"},{topic:"Para Jumbles",heat:3,freq:"~2-3 Qs"},
    {topic:"Word Completion",heat:3,freq:"~2-3 Qs"}
  ],
  reasoning: [
    {topic:"Coding-Decoding",heat:5,freq:"~3-4 Qs"},{topic:"Blood Relations",heat:5,freq:"~2-3 Qs"},
    {topic:"Number Series",heat:5,freq:"~2-3 Qs"},{topic:"Seating Arrangement",heat:4,freq:"~2-3 Qs"},
    {topic:"Syllogisms",heat:4,freq:"~2 Qs"},{topic:"Direction Sense",heat:4,freq:"~1-2 Qs"},
    {topic:"Analogy",heat:3,freq:"~1-2 Qs"},{topic:"Odd One Out",heat:3,freq:"~1 Q"},
    {topic:"Letter Series",heat:3,freq:"~1-2 Qs"},{topic:"Data Sufficiency",heat:2,freq:"~1 Q"},
    {topic:"Cube & Dice",heat:2,freq:"~1 Q"},{topic:"Clock",heat:2,freq:"~1 Q"},
    {topic:"Calendar",heat:1,freq:"~0-1 Q"}
  ],
  advanced: [
    {topic:"Permutations & Combinations",heat:5,freq:"~3-4 Qs"},{topic:"Probability",heat:5,freq:"~3-4 Qs"},
    {topic:"Advanced DI",heat:5,freq:"~2-3 Qs"},{topic:"Geometry",heat:4,freq:"~2 Qs"},
    {topic:"Equations",heat:3,freq:"~1-2 Qs"},{topic:"Series & Progressions",heat:3,freq:"~1-2 Qs"},
    {topic:"Clocks & Calendars",heat:2,freq:"~1 Q"},{topic:"Advanced Reasoning",heat:3,freq:"~1-2 Qs"}
  ],
  coding: [
    {topic:"Array Problems",heat:5,freq:"Very Common"},{topic:"String Manipulation",heat:5,freq:"Very Common"},
    {topic:"Number Problems",heat:5,freq:"Very Common"},{topic:"Pattern Printing",heat:3,freq:"Common"},
    {topic:"Sorting",heat:3,freq:"Common"},{topic:"Searching",heat:2,freq:"Moderate"}
  ]
};

// ===== QUESTION MAPPING =====
const SECTION_MAP = {
  numerical: () => typeof NUMERICAL_QUESTIONS !== 'undefined' ? NUMERICAL_QUESTIONS : [],
  verbal: () => typeof VERBAL_QUESTIONS !== 'undefined' ? VERBAL_QUESTIONS : [],
  reasoning: () => typeof REASONING_QUESTIONS !== 'undefined' ? REASONING_QUESTIONS : [],
  advanced: () => typeof ADVANCED_QUESTIONS !== 'undefined' ? ADVANCED_QUESTIONS : [],
  coding: () => typeof CODING_QUESTIONS !== 'undefined' ? CODING_QUESTIONS : []
};

const PROB_LABELS = {
  'certain': {text:'🔥 Almost Certain', class:'certain'},
  'very-high': {text:'⭐ Very High', class:'very-high'},
  'high': {text:'✦ High', class:'high'}
};

const DIFF_LABELS = {
  'easy': {text:'Easy', class:'badge-easy'},
  'medium': {text:'Medium', class:'badge-medium'},
  'hard': {text:'Hard', class:'badge-hard'}
};

// ===== STATE =====
let currentTab = 'numerical';
let currentProb = 'all';
let currentDiff = 'all';

// ===== COUNTDOWN TIMER =====
function updateCountdown() {
  const target = new Date('2026-04-03T09:00:00+05:30').getTime();
  const now = Date.now();
  const diff = target - now;
  if (diff <= 0) {
    document.getElementById('cd-days').textContent = '00';
    document.getElementById('cd-hours').textContent = '00';
    document.getElementById('cd-mins').textContent = '00';
    document.getElementById('cd-secs').textContent = '00';
    return;
  }
  const d = Math.floor(diff / 86400000);
  const h = Math.floor((diff % 86400000) / 3600000);
  const m = Math.floor((diff % 3600000) / 60000);
  const s = Math.floor((diff % 60000) / 1000);
  document.getElementById('cd-days').textContent = String(d).padStart(2, '0');
  document.getElementById('cd-hours').textContent = String(h).padStart(2, '0');
  document.getElementById('cd-mins').textContent = String(m).padStart(2, '0');
  document.getElementById('cd-secs').textContent = String(s).padStart(2, '0');
}

// ===== RENDER HEATMAP =====
function renderHeatmap(section) {
  const container = document.getElementById(`heatmap-${section}`);
  if (!container || !HEATMAPS[section]) return;
  container.innerHTML = HEATMAPS[section].map(h =>
    `<div class="heatmap-cell hot-${h.heat}" title="${h.freq}">
      ${h.topic} <span class="cell-freq">${h.freq}</span>
    </div>`
  ).join('');
}

// ===== RENDER QUESTIONS =====
function renderQuestions(section) {
  const container = document.getElementById(`questions-${section}`);
  if (!container) return;
  let questions = SECTION_MAP[section]();
  
  // Sort by probability
  const probOrder = {certain: 0, 'very-high': 1, high: 2};
  questions.sort((a, b) => (probOrder[a.prob] || 9) - (probOrder[b.prob] || 9));

  // Filter
  if (currentProb !== 'all') questions = questions.filter(q => q.prob === currentProb);
  if (currentDiff !== 'all') questions = questions.filter(q => q.diff === currentDiff);

  if (questions.length === 0) {
    container.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted);">No questions match the current filters. Try changing filters above.</div>';
    return;
  }

  container.innerHTML = questions.map((q, i) => {
    const prob = PROB_LABELS[q.prob] || PROB_LABELS.high;
    const diff = DIFF_LABELS[q.diff] || DIFF_LABELS.medium;
    const isCoding = section === 'coding';
    
    let optionsHTML = '';
    if (!isCoding && q.options) {
      const labels = ['A','B','C','D'];
      optionsHTML = `<div class="q-options">
        ${q.options.map((opt, oi) =>
          `<div class="q-option" data-correct="${oi === q.answer}">
            <span class="option-label">${labels[oi]})</span> ${opt}
          </div>`
        ).join('')}
      </div>`;
    } else if (isCoding && q.options) {
      const labels = ['A','B','C','D'];
      optionsHTML = `<div class="q-options">
        ${q.options.map((opt, oi) =>
          `<div class="q-option" data-correct="${oi === q.answer}">
            <span class="option-label">${labels[oi]})</span> ${opt}
          </div>`
        ).join('')}
      </div>`;
    }

    const explanationHTML = q.explanation ? 
      `<button class="solution-toggle" onclick="toggleSolution(this)">
        <span class="arrow">▼</span> View Solution & Explanation
      </button>
      <div class="solution-content">
        <div class="solution-box">
          <h4>✅ Solution</h4>
          <pre>${escapeHTML(q.explanation)}</pre>
        </div>
      </div>` : '';

    return `<div class="question-card prob-${q.prob}">
      <div class="q-header">
        <span class="q-number">Q${i+1} • ${q.id}</span>
        <div class="q-badges">
          <span class="badge badge-topic">${q.topic}</span>
          <span class="badge ${diff.class}">${diff.text}</span>
          <span class="badge badge-prob ${prob.class}">${prob.text}</span>
        </div>
      </div>
      <div class="q-text">${escapeHTML(q.q)}</div>
      ${optionsHTML}
      ${explanationHTML}
    </div>`;
  }).join('');
}

function escapeHTML(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
}

function toggleSolution(btn) {
  btn.classList.toggle('open');
  const content = btn.nextElementSibling;
  content.classList.toggle('open');
  
  // Reveal correct answer styling
  const card = btn.closest('.question-card');
  if (card) {
    const correctOpts = card.querySelectorAll('.q-option[data-correct="true"]');
    correctOpts.forEach(opt => {
      if (btn.classList.contains('open')) {
        opt.classList.add('correct');
      } else {
        opt.classList.remove('correct');
      }
    });
  }
}

// ===== TAB SWITCHING =====
function switchTab(tab) {
  currentTab = tab;
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelector(`[data-tab="${tab}"]`).classList.add('active');
  document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
  document.getElementById(`tab-${tab}`).classList.add('active');

  // Hide filters for strategy tab
  document.getElementById('filterBar').style.display = tab === 'strategy' ? 'none' : 'flex';
  
  if (tab !== 'strategy') {
    renderHeatmap(tab);
    renderQuestions(tab);
  }
}

// ===== FILTERS =====
function setupFilters() {
  document.querySelectorAll('#probFilters .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#probFilters .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentProb = btn.dataset.prob;
      renderQuestions(currentTab);
    });
  });
  document.querySelectorAll('#diffFilters .filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('#diffFilters .filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentDiff = btn.dataset.diff;
      renderQuestions(currentTab);
    });
  });
}

// ===== UPDATE COUNTS =====
function updateCounts() {
  Object.keys(SECTION_MAP).forEach(section => {
    const el = document.getElementById(`count-${section}`);
    if (el) el.textContent = SECTION_MAP[section]().length;
  });
}

// ===== TAB CLICK HANDLERS =====
function setupTabs() {
  document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => switchTab(btn.dataset.tab));
  });
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  updateCountdown();
  setInterval(updateCountdown, 1000);
  setupTabs();
  setupFilters();
  updateCounts();
  
  // Render initial section
  renderHeatmap('numerical');
  renderQuestions('numerical');
});
