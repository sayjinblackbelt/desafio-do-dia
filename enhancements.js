(() => {
  const STORAGE = 'desafioDoDiaHistory';
  const DAILY = 'desafioDoDiaDaily';
  const completeButton = document.querySelector('#completeChallenge');
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

  function getDailyIndex(date) {
    let hash = 0;
    for (let i = 0; i < date.length; i += 1) {
      hash = ((hash << 5) - hash + date.charCodeAt(i)) | 0;
    }
    return Math.abs(hash);
  }

  function getChallenges() {
    return Array.isArray(window.challenges) ? window.challenges : [];
  }

  function getDailyChallenge() {
    const all = getChallenges();
    if (!all.length) return null;
    return all[getDailyIndex(dateKey()) % all.length];
  }

  function currentChallenge() {
    return {
      title: title.textContent,
      text: text.textContent,
      level: level.textContent,
      category: category.textContent
    };
  }

  function updateDailyLabel() {
    const today = dateKey();
    const daily = getDailyChallenge();
    if (!daily) return;

    save(DAILY, { date: today, title: daily.title, category: daily.category });
    const items = load(STORAGE, []);
    const doneToday = items.some(item => item.date === today && item.title === daily.title);
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
    const daily = getDailyChallenge();
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

  updateDailyLabel();
})();
