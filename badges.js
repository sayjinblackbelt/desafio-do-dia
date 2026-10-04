(() => {
  const history = (() => { try { return JSON.parse(localStorage.getItem('desafioDoDiaHistory')) || []; } catch { return []; } })();
  const state = (() => { try { return JSON.parse(localStorage.getItem('desafioDoDia')) || {}; } catch { return {}; } })();

  const badges = [
    { id: 'first', icon: '🌱', title: 'Primeiro passo', text: 'Conclua seu primeiro desafio.', done: history.length >= 1 },
    { id: 'five', icon: '🔥', title: 'Pegando ritmo', text: 'Conclua 5 desafios.', done: history.length >= 5 },
    { id: 'ten', icon: '⚡', title: 'Em evolução', text: 'Conclua 10 desafios.', done: history.length >= 10 },
    { id: 'categories', icon: '🧠', title: 'Mente versátil', text: 'Complete as 3 categorias.', done: new Set(history.map(item => item.category)).size >= 3 },
    { id: 'xp500', icon: '💎', title: '500 XP', text: 'Alcance 500 XP.', done: Number(state.xp || 0) >= 500 },
    { id: 'streak7', icon: '🔥', title: 'Uma semana', text: 'Mantenha 7 dias consecutivos.', done: Number(state.streak || 0) >= 7 }
  ];

  const section = document.createElement('section');
  section.className = 'badges-panel';
  section.innerHTML = `
    <div class="goals-header">
      <div><p class="eyebrow">CONQUISTAS</p><h2>Badges</h2></div>
      <span class="goal-period">${badges.filter(b => b.done).length}/${badges.length}</span>
    </div>
    <div class="badge-grid">
      ${badges.map(b => `<article class="badge-card ${b.done ? 'badge-unlocked' : ''}">
        <span class="badge-icon">${b.icon}</span>
        <div><strong>${b.title}</strong><p>${b.text}</p></div>
      </article>`).join('')}
    </div>
  `;

  document.querySelector('.goals')?.after(section);
})();
