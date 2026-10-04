(() => {
  const STORAGE = 'desafioDoDiaHistory';
  const DAILY = 'desafioDoDiaDaily';
  const completeButton = document.querySelector('#completeChallenge');
  const newButton = document.querySelector('#newChallenge');
  const title = document.querySelector('#challengeTitle');
  const text = document.querySelector('#challengeText');
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

  function currentChallenge() {
    return {
      title: title.textContent,
      text: text.textContent,
      level: level.textContent,
      category: category.textContent
    };
  }

  function updateDailyLabel() {
    const daily = load(DAILY, null);
    const today = dateKey();
    if (!daily || daily.date !== today) {
      const challenge = currentChallenge();
      save(DAILY, { date: today, title: challenge.title });
    }
    const selected = load(DAILY, null);
    const doneToday = load(STORAGE, []).some(item => item.date === today && item.title === selected?.title);
    dailyStatus.textContent = doneToday
      ? '✓ Desafio de hoje concluído. Volte amanhã para continuar.'
      : 'Complete o desafio atual para registrar seu desafio de hoje.';
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
    const daily = load(DAILY, null);
    const entry = {
      title: challenge.title,
      category: challenge.category,
      level: challenge.level,
      xp,
      date: today,
      daily: daily?.date === today && daily?.title === challenge.title
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

  newButton?.addEventListener('click', () => setTimeout(updateDailyLabel, 0));

  updateDailyLabel();
})();
