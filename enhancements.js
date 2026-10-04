(() => {
  const STORAGE = 'desafioDoDiaHistory';
  const DAILY = 'desafioDoDiaDaily';
  const completeButton = document.querySelector('#completeChallenge');
  const title = document.querySelector('#challengeTitle');
  const level = document.querySelector('#challengeLevel');
  const category = document.querySelector('#challengeCategory');
  const dailyStatus = document.querySelector('#dailyStatus');
  const dailyBadge = document.querySelector('#dailyBadge');
  const historySection = document.querySelector('#history');
  const historyList = document.querySelector('#historyList');

  if (!completeButton || !historySection) return;

  const dateKey = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  const load = (key, fallback) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  };

  const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));

  function getDailyRecord() {
    const saved = load(DAILY, null);
    return saved?.date === dateKey() ? saved : null;
  }

  function currentChallenge() {
    return {
      title: title.textContent,
      level: level.textContent,
      category: category.textContent
    };
  }

  function updateDailyLabel() {
    const daily = getDailyRecord();
    if (!daily) return;

    const items = load(STORAGE, []);
    const doneToday = items.some(item => item.date === daily.date && item.title === daily.title);
    dailyStatus.textContent = doneToday
      ? '✓ Desafio de hoje concluído. Volte amanhã para continuar.'
      : 'Complete o desafio de hoje para manter sua sequência.';
    dailyBadge.hidden = false;
  }

  function renderHistory() {
    const items = load(STORAGE, []);
    if (!items.length) {
      historyList.innerHTML = '<p class="empty-history">Nenhum desafio concluído ainda.</p>';
      return;
    }
    historyList.innerHTML = items.slice(0, 50).map(item => `
      <article class="history-item">
        <div><strong>${item.title}</strong><span>${item.category} · ${item.level}</span></div>
        <div><strong>+${item.xp} XP</strong><span>${item.date}${item.daily ? ' · Diário' : ''}</span></div>
      </article>
    `).join('');
  }

  completeButton.addEventListener('click', () => {
    const challenge = currentChallenge();
    const items = load(STORAGE, []);
    const today = dateKey();
    const xpMatch = challenge.level.match(/(\d+)\s*XP/);
    const xp = xpMatch ? Number(xpMatch[1]) : 0;
    const daily = getDailyRecord();
    const isDaily = daily && challenge.title === daily.title && challenge.category === daily.category;
    const entry = {
      title: challenge.title,
      category: challenge.category,
      level: challenge.level,
      xp,
      date: today,
      daily: Boolean(isDaily)
    };
    if (!items.some(item => item.date === today && item.title === challenge.title)) {
      items.unshift(entry);
      save(STORAGE, items.slice(0, 50));
    }
    updateDailyLabel();
  });

  document.querySelector('#historyButton')?.addEventListener('click', () => {
    renderHistory();
    historySection.hidden = false;
  });

  document.querySelector('#closeHistory')?.addEventListener('click', () => {
    historySection.hidden = true;
  });

  // script.js define o desafio diário de forma determinística; aqui apenas persistimos sua identidade.
  const initial = currentChallenge();
  const today = dateKey();
  const savedDaily = getDailyRecord();
  if (!savedDaily) {
    save(DAILY, { date: today, title: initial.title, category: initial.category });
  }
  updateDailyLabel();
})();
