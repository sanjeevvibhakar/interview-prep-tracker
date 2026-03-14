// ============================================================
// APP.JS — Main Logic for Interview Prep Tracker
// ============================================================

// ── Storage helpers ──────────────────────────────────────────
const S = {
    get: (k, def) => { try { return JSON.parse(localStorage.getItem(k)) ?? def; } catch { return def; } },
    set: (k, v) => localStorage.setItem(k, JSON.stringify(v)),
};

// Keys
const KEY_DONE = 'ipt_done';   // Set of completed topic IDs
const KEY_DAYS = 'ipt_days';   // Set of completed day numbers
const KEY_STREAK = 'ipt_streak'; // { count, last }
const KEY_ACT = 'ipt_act';    // Array of ISO date strings with activity
const KEY_START = 'ipt_start';  // App start ISO date

// ── State ───────────────────────────────────────────────────
let doneTopics = new Set(S.get(KEY_DONE, []));
let doneDays = new Set(S.get(KEY_DAYS, []));
let activity = S.get(KEY_ACT, []);
let startDate = S.get(KEY_START, null);

if (!startDate) {
    startDate = new Date().toISOString().split('T')[0];
    S.set(KEY_START, startDate);
}

function saveDone() { S.set(KEY_DONE, [...doneTopics]); }
function saveDays() { S.set(KEY_DAYS, [...doneDays]); }

function markActivity() {
    const today = new Date().toISOString().split('T')[0];
    if (!activity.includes(today)) {
        activity.push(today);
        S.set(KEY_ACT, activity);
    }
}

// ── Streak ──────────────────────────────────────────────────
function calcStreak() {
    const today = new Date().toISOString().split('T')[0];
    const days = [...activity].sort();
    if (!days.length) return 0;
    let streak = 0, cur = new Date(today);
    while (true) {
        const ds = cur.toISOString().split('T')[0];
        if (days.includes(ds)) { streak++; cur.setDate(cur.getDate() - 1); }
        else break;
    }
    return streak;
}

// ── Navigation ───────────────────────────────────────────────
document.querySelectorAll('.nav-item').forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const page = link.dataset.page;
        document.querySelectorAll('.nav-item').forEach(l => l.classList.remove('active'));
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        link.classList.add('active');
        document.getElementById('page-' + page).classList.add('active');
    });
});

// ── Dashboard ────────────────────────────────────────────────
function initDashboard() {
    // Date
    document.getElementById('currentDate').textContent =
        new Date().toLocaleDateString('en-IN', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    // Motivation
    const idx = new Date().getDate() % MOTIVATIONS.length;
    document.getElementById('motivationText').textContent = MOTIVATIONS[idx];

    // Stats
    const streak = calcStreak();
    document.getElementById('statStreak').textContent = streak;
    document.getElementById('streakBadge').textContent = `🔥 ${streak} day streak`;

    const totalTopics = DSA_TOPICS.flatMap(g => g.items).length
        + REACT_TOPICS.flatMap(g => g.items).length
        + OOP_TOPICS.flatMap(g => g.items).length;
    const doneCount = doneTopics.size;
    document.getElementById('statCompleted').textContent = doneCount;

    const start = new Date(startDate);
    const now = new Date();
    const elapsed = Math.floor((now - start) / 86400000);
    const left = Math.max(0, 45 - elapsed);
    document.getElementById('statDaysLeft').textContent = left;

    const pct = Math.round((doneCount / totalTopics) * 100);
    document.getElementById('statPercent').textContent = pct + '%';
    document.getElementById('sidebarProgress').style.width = pct + '%';
    document.getElementById('sidebarPercent').textContent = pct + '%';

    // Progress rings
    const dsaDone = DSA_TOPICS.flatMap(g => g.items).filter(i => doneTopics.has(i.id)).length;
    const dsaTotal = DSA_TOPICS.flatMap(g => g.items).length;
    const reactDone = REACT_TOPICS.flatMap(g => g.items).filter(i => doneTopics.has(i.id)).length;
    const reactTotal = REACT_TOPICS.flatMap(g => g.items).length;
    const oopsDone = OOP_TOPICS.flatMap(g => g.items).filter(i => doneTopics.has(i.id)).length;
    const oopsTotal = OOP_TOPICS.flatMap(g => g.items).length;

    function setRing(id, pctId, done, total) {
        const p = total > 0 ? Math.round((done / total) * 100) : 0;
        const circ = 314;
        document.getElementById(id).style.strokeDashoffset = circ - (circ * p / 100);
        document.getElementById(pctId).textContent = p + '%';
    }
    setRing('dsaRing', 'dsaPercent', dsaDone, dsaTotal);
    setRing('reactRing', 'reactPercent', reactDone, reactTotal);
    setRing('oopsRing', 'oopsPercent', oopsDone, oopsTotal);

    // Today's tasks — pick from current day's roadmap phase
    const dayNum = Math.min(elapsed + 1, 45);
    let todayDay = null;
    for (const phase of ROADMAP) {
        todayDay = phase.days.find(d => d.day === dayNum);
        if (todayDay) break;
    }
    const todayContainer = document.getElementById('todayTasks');
    todayContainer.innerHTML = '';
    if (todayDay) {
        const tag = dayNum <= 30 ? 'dsa' : dayNum <= 38 ? 'react' : dayNum <= 43 ? 'oops' : 'hr';
        const taskId = 'day-' + dayNum;
        const isDone = doneDays.has(dayNum);
        todayContainer.innerHTML = `
      <div class="today-task-item ${isDone ? 'done' : ''}">
        <div class="task-check ${isDone ? 'checked' : ''}" data-task="${taskId}" onclick="toggleDayTask(${dayNum}, this)"></div>
        <div class="task-info">
          <div class="task-title">Day ${dayNum}: ${todayDay.topic}</div>
          <div class="task-meta">${todayDay.subs}</div>
        </div>
        <span class="task-tag tag-${tag}">${tag.toUpperCase()}</span>
      </div>`;
    } else {
        todayContainer.innerHTML = `<div class="today-task-item">
      <div class="task-title">🎉 All 45 Days Complete! You're ready for that offer letter!</div>
    </div>`;
    }

    // Activity Calendar (last 30 days)
    const cal = document.getElementById('activityCalendar');
    cal.innerHTML = '';
    for (let i = 29; i >= 0; i--) {
        const d = new Date(); d.setDate(d.getDate() - i);
        const ds = d.toISOString().split('T')[0];
        const isToday = i === 0;
        const active = activity.includes(ds);
        const el = document.createElement('div');
        el.className = `cal-day${active ? ' active' : ''}${isToday ? ' today' : ''}`;
        el.title = ds;
        cal.appendChild(el);
    }
}

window.toggleDayTask = function (dayNum, el) {
    const item = el.closest('.today-task-item');
    if (doneDays.has(dayNum)) {
        doneDays.delete(dayNum);
        el.classList.remove('checked');
        item.classList.remove('done');
    } else {
        doneDays.add(dayNum);
        el.classList.add('checked');
        item.classList.add('done');
        markActivity();
    }
    saveDays();
    initDashboard();
};

// ── Roadmap ──────────────────────────────────────────────────
function initRoadmap() {
    const container = document.getElementById('roadmapPhases');
    container.innerHTML = '';
    const today = new Date(startDate);
    const now = new Date();
    const elapsedDays = Math.floor((now - today) / 86400000);

    ROADMAP.forEach(phase => {
        const allDays = phase.days.map(d => d.day);
        const donePh = allDays.filter(d => doneDays.has(d)).length;
        const phPct = Math.round((donePh / allDays.length) * 100);
        const block = document.createElement('div');
        block.className = 'phase-block';

        const daysHTML = phase.days.map(d => {
            const isDone = doneDays.has(d.day);
            const dayEl = elapsedDays + 1;
            const isToday = d.day === dayEl;
            return `
        <div class="day-card ${isDone ? 'done' : ''} ${isToday ? 'today-card' : ''}">
          <div class="day-num">DAY ${d.day} ${isToday ? '⭐ TODAY' : ''}</div>
          <div class="day-topic">${d.topic}</div>
          <div class="day-subtopics">${d.subs}</div>
          <div class="day-check ${isDone ? 'checked' : ''}"
               onclick="toggleRoadmapDay(${d.day}, this)">${isDone ? '✓' : ''}</div>
        </div>`;
        }).join('');

        block.innerHTML = `
      <div class="phase-header" onclick="this.nextElementSibling.classList.toggle('collapsed')">
        <span class="phase-icon">${phase.icon}</span>
        <div class="phase-info">
          <div class="phase-title">${phase.title}</div>
          <div class="phase-dates">${phase.subtitle}</div>
        </div>
        <div style="text-align:right;min-width:130px">
          <div style="font-size:12px;color:var(--text-secondary);margin-bottom:4px">${donePh}/${allDays.length} days done</div>
          <div class="phase-progress-bar"><div class="phase-progress-fill" style="width:${phPct}%"></div></div>
        </div>
        <span class="chevron">▼</span>
      </div>
      <div class="group-body phase-days">${daysHTML}</div>`;
        container.appendChild(block);
    });
}

window.toggleRoadmapDay = function (dayNum, el) {
    if (doneDays.has(dayNum)) {
        doneDays.delete(dayNum);
        el.classList.remove('checked');
        el.textContent = '';
    } else {
        doneDays.add(dayNum);
        el.classList.add('checked');
        el.textContent = '✓';
        markActivity();
    }
    saveDays();
    el.closest('.day-card').classList.toggle('done', doneDays.has(dayNum));
    initDashboard();
    initRoadmap();
};

// ── Topic Sections (DSA / React / OOP) ──────────────────────
function renderTopics(containerId, data) {
    const container = document.getElementById(containerId);
    container.innerHTML = '';

    data.forEach((group, gi) => {
        const groupId = `${containerId}-g${gi}`;
        const total = group.items.length;
        const done = group.items.filter(i => doneTopics.has(i.id)).length;

        const itemsHTML = group.items.map(item => {
            const isDone = doneTopics.has(item.id);
            return `
        <div class="topic-item ${isDone ? 'done' : ''}" data-id="${item.id}">
          <div class="topic-checkbox ${isDone ? 'checked' : ''}" onclick="toggleTopic('${item.id}', this)"></div>
          <span class="topic-name">${item.name}</span>
          <span class="topic-difficulty diff-${item.diff}">${item.diff}</span>
          <a class="topic-link" href="${item.link}" target="_blank">Practice 🔗</a>
        </div>`;
        }).join('');

        const div = document.createElement('div');
        div.className = 'topic-group';
        div.id = groupId;
        div.innerHTML = `
      <div class="group-header" onclick="document.getElementById('${groupId}-body').classList.toggle('collapsed');this.querySelector('.chevron').classList.toggle('open')">
        <div class="group-title">${group.icon} ${group.group}</div>
        <span class="group-count">${done}/${total}</span>
        <span class="chevron">▼</span>
      </div>
      <div class="group-body topics-list" id="${groupId}-body">${itemsHTML}</div>`;
        container.appendChild(div);
    });

    // Wire filter buttons in that section's parent
    const section = container.closest('.page');
    section.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            section.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const f = btn.dataset.filter;
            container.querySelectorAll('.topic-item').forEach(item => {
                const id = item.dataset.id;
                if (f === 'all') item.style.display = '';
                else if (f === 'done') item.style.display = doneTopics.has(id) ? '' : 'none';
                else if (f === 'pending') item.style.display = !doneTopics.has(id) ? '' : 'none';
            });
        });
    });
}

window.toggleTopic = function (id, el) {
    const item = el.closest('.topic-item');
    if (doneTopics.has(id)) {
        doneTopics.delete(id);
        el.classList.remove('checked');
        item.classList.remove('done');
    } else {
        doneTopics.add(id);
        el.classList.add('checked');
        item.classList.add('done');
        markActivity();
    }
    saveDone();
    updateGroupCount(el.closest('.topic-group'));
    initDashboard();
};

function updateGroupCount(groupEl) {
    if (!groupEl) return;
    const items = groupEl.querySelectorAll('.topic-item');
    const done = groupEl.querySelectorAll('.topic-item.done').length;
    const badge = groupEl.querySelector('.group-count');
    if (badge) badge.textContent = `${done}/${items.length}`;
}

// ── Resources ────────────────────────────────────────────────
function initResources() {
    const grid = document.getElementById('resourcesGrid');
    grid.innerHTML = RESOURCES.map(r => `
    <div class="resource-card">
      <div class="resource-banner" style="background:${r.color}"></div>
      <div class="resource-body">
        <div class="resource-category">${r.category} ${r.free ? '<span class="resource-free">FREE</span>' : ''}</div>
        <div class="resource-title">${r.title}</div>
        <div class="resource-desc">${r.desc}</div>
        <div class="resource-tags">${r.tags.map(t => `<span class="resource-tag">${t}</span>`).join('')}</div>
        <a class="resource-link" href="${r.link}" target="_blank">Open Resource →</a>
      </div>
    </div>`).join('');
}

// ── Mock Interview ───────────────────────────────────────────
function initMock() {
    const container = document.getElementById('mockSections');
    container.innerHTML = MOCK_QA.map((cat, ci) => {
        const qs = cat.questions.map((q, qi) => `
      <div class="mock-q">
        <div class="mock-q-header" onclick="toggleAnswer(${ci},${qi},this)">
          <div class="q-num">${qi + 1}</div>
          <div class="q-text">${q.q}</div>
          <div class="q-toggle" id="qt-${ci}-${qi}">▼</div>
        </div>
        <div class="mock-q-answer" id="qa-${ci}-${qi}">
          <p>${q.a}</p>
        </div>
      </div>`).join('');
        return `
      <div class="mock-category">
        <div class="mock-category-header">${cat.icon} ${cat.category}</div>
        <div class="mock-questions">${qs}</div>
      </div>`;
    }).join('');
}

window.toggleAnswer = function (ci, qi, el) {
    const ans = document.getElementById(`qa-${ci}-${qi}`);
    const tog = document.getElementById(`qt-${ci}-${qi}`);
    ans.classList.toggle('open');
    tog.classList.toggle('open');
};

// ── Boot ─────────────────────────────────────────────────────
function init() {
    initDashboard();
    initRoadmap();
    renderTopics('dsaTopics', DSA_TOPICS);
    renderTopics('reactTopics', REACT_TOPICS);
    renderTopics('oopsTopics', OOP_TOPICS);
    initResources();
    initMock();
}

init();
