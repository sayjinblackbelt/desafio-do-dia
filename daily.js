(() => {
  const DAILY_KEY = 'desafioDoDiaDaily';
  const dateKey = () => {
    const d = new Date();
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
  };

  // Usa uma função pseudoaleatória determinística baseada na data.
  // Assim, o mesmo dia sempre produz o mesmo item no banco atual de desafios.
  function dailyRandom(date) {
    let hash = 2166136261;
    for (let i = 0; i < date.length; i += 1) {
      hash ^= date.charCodeAt(i);
      hash = Math.imul(hash, 16777619);
    }
    hash += hash << 13;
    hash ^= hash >>> 7;
    hash += hash << 3;
    hash ^= hash >>> 17;
    hash += hash << 5;
    return (hash >>> 0) / 4294967296;
  }

  function saveDaily() {
    const title = document.querySelector('#challengeTitle')?.textContent;
    const category = document.querySelector('#challengeCategory')?.textContent;
    const level = document.querySelector('#challengeLevel')?.textContent;
    if (!title || !category || title === 'Nenhum desafio encontrado') return;
    localStorage.setItem(DAILY_KEY, JSON.stringify({
      date: dateKey(),
      title,
      category,
      level
    }));
  }

  function refreshBadge() {
    const badge = document.querySelector('#dailyBadge');
    if (!badge) return;
    try {
      const daily = JSON.parse(localStorage.getItem(DAILY_KEY));
      const isToday = daily?.date === dateKey();
      const title = document.querySelector('#challengeTitle')?.textContent;
      const category = document.querySelector('#challengeCategory')?.textContent;
      badge.hidden = !(isToday && daily.title === title && daily.category === category);
    } catch {
      badge.hidden = true;
    }
  }

  // script.js já fez seu sorteio inicial. Repetimos o sorteio uma única vez,
  // substituindo Math.random temporariamente por uma fonte determinística.
  const category = document.querySelector('#category');
  const level = document.querySelector('#level');
  const newChallenge = document.querySelector('#newChallenge');

  if (category && level && newChallenge) {
    category.value = 'Todas';
    level.value = 'Todos';
    const originalRandom = Math.random;
    Math.random = () => dailyRandom(dateKey());
    newChallenge.click();
    Math.random = originalRandom;
    saveDaily();
    refreshBadge();
  }

  category?.addEventListener('change', refreshBadge);
  level?.addEventListener('change', refreshBadge);
  newChallenge?.addEventListener('click', () => setTimeout(refreshBadge, 0));
})();
