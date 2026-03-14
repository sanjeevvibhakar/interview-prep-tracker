// ============================================================
// APP2.JS — Rendering logic for new pages in 30-Day Job Mission
// ============================================================

// ── Daily Grind ─────────────────────────────────────────────
function initDailyGrind() {
    const container = document.getElementById('grindContainer');
    if (!container) return;

    const doneDailyProblems = S.get('ipt_daily_probs', []);
    const doneSet = new Set(doneDailyProblems);

    const tagColors = {
        Arrays: '#6c63ff', Strings: '#8b5cf6', LinkedList: '#00d4aa',
        Stack: '#ff9f43', BinarySearch: '#22c55e', Trees: '#06b6d4',
        Recursion: '#f59e0b', DP: '#ef4444', Graphs: '#ec4899',
        Heap: '#ff6b9d', Greedy: '#00d4aa', Matrix: '#6c63ff', Mixed: '#8888aa', Mock: '#f59e0b'
    };

    const today = new Date(S.get('ipt_start', new Date().toISOString().split('T')[0]));
    const now = new Date();
    const currentDay = Math.min(Math.floor((now - today) / 86400000) + 1, 30);

    container.innerHTML = DAILY_GRIND.map(d => {
        const isToday = d.day === currentDay;
        const isPast = d.day < currentDay;
        const color = tagColors[d.tag] || '#6c63ff';
        const probsHTML = d.problems.map((p, pi) => {
            const pid = `dp-${d.day}-${pi}`;
            const done = doneSet.has(pid);
            return `
      <div class="grind-problem ${done ? 'done' : ''}">
        <div class="grind-check ${done ? 'checked' : ''}" onclick="toggleDailyProblem('${pid}', this)"></div>
        <div class="grind-prob-info">
          <a href="${p.link}" target="_blank" class="grind-prob-name">${p.name}</a>
          <span class="grind-key">💡 ${p.key}</span>
        </div>
        <span class="topic-difficulty diff-${p.diff}">${p.diff}</span>
      </div>`;
        }).join('');

        return `
    <div class="grind-day-card ${isToday ? 'today-grind' : ''} ${isPast ? 'past-grind' : ''}">
      <div class="grind-day-header">
        <div class="grind-day-num" style="background:${color}22;border-color:${color}44;color:${color}">
          DAY ${d.day} ${isToday ? '⭐' : ''}
        </div>
        <div class="grind-pattern-info">
          <span class="grind-pattern-name">${d.pattern}</span>
          <span class="grind-tag" style="color:${color}">${d.tag}</span>
        </div>
        <span class="grind-chevron">▼</span>
      </div>
      <div class="grind-day-body ${isToday || isPast ? '' : 'collapsed'}">${probsHTML}</div>
    </div>`;
    }).join('');

    // Toggle collapse
    container.querySelectorAll('.grind-day-header').forEach(h => {
        h.addEventListener('click', () => {
            const body = h.nextElementSibling;
            const chevron = h.querySelector('.grind-chevron');
            body.classList.toggle('collapsed');
            chevron.classList.toggle('open');
        });
    });
}

window.toggleDailyProblem = function (pid, el) {
    const key = 'ipt_daily_probs';
    const done = new Set(S.get(key, []));
    const card = el.closest('.grind-problem');
    if (done.has(pid)) {
        done.delete(pid);
        el.classList.remove('checked');
        card.classList.remove('done');
    } else {
        done.add(pid);
        el.classList.add('checked');
        card.classList.add('done');
        markActivity();
    }
    S.set(key, [...done]);
    initDashboard();
};

// ── OOP Mastery ─────────────────────────────────────────────
function initOopsMastery() {
    const c = document.getElementById('oopsMasteryContainer');
    if (!c) return;
    c.innerHTML = OOP_LEVELS.map((level, li) => `
    <div class="mastery-level" style="--lvl-color:${level.color}">
      <div class="mastery-level-header">
        <div class="level-badge" style="background:${level.color}22;border:1px solid ${level.color}44;color:${level.color}">
          ${level.label}
        </div>
        <p class="mastery-desc">${level.desc}</p>
      </div>
      <div class="mastery-questions">
        ${level.questions.map((qa, qi) => `
          <div class="mastery-q">
            <div class="mastery-q-header" onclick="toggleMasteryQ(${li},${qi},this)">
              <div class="q-num" style="background:${level.color}22;color:${level.color}">${qi + 1}</div>
              <div class="q-text">${qa.q}</div>
              <div class="q-toggle" id="mq-t-${li}-${qi}">▼</div>
            </div>
            <div class="mock-q-answer" id="mq-a-${li}-${qi}">
              <p>${qa.a}</p>
            </div>
          </div>`).join('')}
      </div>
    </div>`).join('');
}

window.toggleMasteryQ = function (li, qi, el) {
    const ans = document.getElementById(`mq-a-${li}-${qi}`);
    const tog = document.getElementById(`mq-t-${li}-${qi}`);
    ans.classList.toggle('open');
    tog.classList.toggle('open');
};

// ── React Interview Q&A ─────────────────────────────────────
function initReactInterview() {
    const c = document.getElementById('reactInterviewContainer');
    if (!c) return;
    let qNum = 0;
    c.innerHTML = REACT_QA.map((cat, ci) => `
    <div class="mock-category">
      <div class="mock-category-header">${cat.icon} ${cat.category}</div>
      <div class="mock-questions">
        ${cat.questions.map((qa, qi) => {
        qNum++;
        return `
          <div class="mock-q">
            <div class="mock-q-header" onclick="toggleRIQ(${ci},${qi},this)">
              <div class="q-num">${qNum}</div>
              <div class="q-text">${qa.q}</div>
              <div class="q-toggle" id="ri-t-${ci}-${qi}">▼</div>
            </div>
            <div class="mock-q-answer" id="ri-a-${ci}-${qi}">
              <p>${qa.a}</p>
            </div>
          </div>`;
    }).join('')}
      </div>
    </div>`).join('');
}

window.toggleRIQ = function (ci, qi, el) {
    document.getElementById(`ri-a-${ci}-${qi}`).classList.toggle('open');
    document.getElementById(`ri-t-${ci}-${qi}`).classList.toggle('open');
};

// ── Projects Page ────────────────────────────────────────────
function initProjects() {
    const c = document.getElementById('projectsContainer');
    if (!c) return;
    c.innerHTML = PROJECTS.map(proj => {
        if (proj.steps) {
            return `
      <div class="project-block">
        <h2 class="project-block-title">${proj.icon} ${proj.title}</h2>
        <div class="star-grid">
          ${proj.steps.map(s => `
            <div class="star-step">
              <div class="star-label">${s.label}</div>
              <div class="star-hint">${s.hint}</div>
              <div class="star-example">
                <span class="example-tag">Example</span>
                ${s.example}
              </div>
              <textarea class="star-input" placeholder="Write YOUR version here..." rows="3" 
                        onchange="saveSTAR('${s.label}', this.value)">${S.get('star_' + s.label, '')}</textarea>
            </div>`).join('')}
        </div>
        <div class="project-tips">
          <div class="tips-title">⚡ Pro Tips</div>
          ${proj.tips.map(t => `<div class="tip-item">✅ ${t}</div>`).join('')}
        </div>
      </div>`;
        } else {
            return `
      <div class="project-block">
        <h2 class="project-block-title">${proj.icon} ${proj.title}</h2>
        <div class="mastery-questions">
          ${proj.qas.map((qa, i) => `
            <div class="mastery-q">
              <div class="mastery-q-header" onclick="toggleProjQ(${i},this)">
                <div class="q-num">${i + 1}</div>
                <div class="q-text">${qa.q}</div>
                <div class="q-toggle" id="pq-t-${i}">▼</div>
              </div>
              <div class="mock-q-answer" id="pq-a-${i}">
                <p>${qa.a}</p>
              </div>
            </div>`).join('')}
        </div>
      </div>`;
        }
    }).join('');
}

window.saveSTAR = (label, val) => S.set('star_' + label, val);
window.toggleProjQ = function (i, el) {
    document.getElementById(`pq-a-${i}`).classList.toggle('open');
    document.getElementById(`pq-t-${i}`).classList.toggle('open');
};

// ── Job Strategy ─────────────────────────────────────────────
function initStrategy() {
    const c = document.getElementById('strategyContainer');
    if (!c) return;
    const colors = ['#6c63ff', '#00d4aa', '#ff9f43', '#ff6b9d'];
    c.innerHTML = `
    <div class="strategy-grid">
      ${JOB_TIPS.map((cat, i) => `
        <div class="strategy-card" style="--s-color:${colors[i % colors.length]}">
          <div class="strategy-header">
            <span class="strategy-icon">${cat.icon}</span>
            <span class="strategy-title">${cat.category}</span>
          </div>
          <ul class="strategy-tips">
            ${cat.tips.map(t => `<li>${t}</li>`).join('')}
          </ul>
        </div>`).join('')}
    </div>`;
}

// ── Boot all new pages ───────────────────────────────────────
(function initNew() {
    initDailyGrind();
    initOopsMastery();
    initReactInterview();
    initProjects();
    initStrategy();
})();
