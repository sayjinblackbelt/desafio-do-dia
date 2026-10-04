(() => {
  const KEY = 'desafioDoDiaGoals';
  const goals = [
    { id: 'five-week', title: 'Constância', text: 'Conclua 5 desafios nesta semana.', target: 5, type: 'weeklyCompleted' },
    { id: 'xp-week', title: 'Impulso', text: 'Ganhe 100 XP nesta semana.', target: 100, type: 'weeklyXp' },
    { id: 'three-categories', title: 'Versátil', text: 'Conclua desafios das 3 categorias.', target: 3, type: 'categories' }
  ];

  const load = (key, fallback) => {
    try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
    catch { return fallback; }
  };

  const history = load('desafioDoDiaHistory', []);
  const today = new Date();
  const dateKey = date => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const current = dateKey(today);
  const monday = new Date(today);
  const day = monday.getDay();
  monday.setDate(monday.getDate() - (day === 0 ? 6 : day - 1));
  const weekStart = dateKey(monday);
  const weekly = history.filter(item => item.date >= weekStart && item.date <= current);

  const progress = {
    weeklyCompleted: weekly.length,
    weeklyXp: weekly.reduce((sum, item) => sum + Number(item.xp || 0), 0),
    categories: new Set(weekly.map(item => item.category)).size
  };

  const section = document.createElement('section');
  section.className = 'goals';
  section.innerHTML = `
    <div class="goals-header">
      <div><p class="eyebrow">MISSÕES</p><h2>Metas da semana</h2></div>
      <span class="goal-period">Semana atual</span>
    </div>
    <div class="goal-grid">
      ${goals.map(goal => {
        const value = progress[goal.type];
        const percent = Math.min(100, Math.round((value / goal.target) * 100));
        const done = value >= goal.target;
        return `<article class="goal ${done ? 'goal-done' : ''}">
          <div class="goal-top"><strong>${done ? '✓ ' : ''}${goal.title}</strong><span>${Math.min(value, goal.target)}/${goal.target}</span></div>
          <p>${goal.text}</p>
          <div class="goal-progress"><span style="width:${percent}%"></span></div>
          <small>${done ? 'Meta concluída!' : `${Math.max(0, goal.target - value)} restante(s)`}</small>
        </article>`;
      }).join('')}
    </div>
  `;

  const anchor = document.querySelector('.challenge');
  anchor?.after(section);
})();
