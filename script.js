const challenges = [
  { category: 'Informática', level: 'Iniciante', xp: 10, title: 'Organize seus arquivos', text: 'Imagine que sua pasta de Downloads está cheia. Crie uma estratégia simples para organizar documentos, imagens e apresentações.' },
  { category: 'Informática', level: 'Intermediário', xp: 20, title: 'Atalho que economiza tempo', text: 'Escolha uma tarefa que você repete no computador e descubra um atalho de teclado que possa torná-la mais rápida.' },
  { category: 'Informática', level: 'Avançado', xp: 30, title: 'Pense como suporte técnico', text: 'Um computador liga, mas não aparece imagem. Liste três hipóteses e organize uma sequência lógica para investigar o problema.' },
  { category: 'Lógica', level: 'Iniciante', xp: 10, title: 'Sequência', text: 'Complete mentalmente: 2, 4, 8, 16... Qual é o próximo número? Explique a regra usada.' },
  { category: 'Lógica', level: 'Intermediário', xp: 20, title: 'O problema das caixas', text: 'Você tem três caixas e apenas uma contém um objeto. Crie uma estratégia que minimize o número de tentativas para encontrá-lo.' },
  { category: 'Lógica', level: 'Avançado', xp: 30, title: 'Algoritmo do cotidiano', text: 'Escolha uma tarefa simples, como preparar um café, e escreva um algoritmo detalhado para que outra pessoa consiga executá-la sem perguntar nada.' },
  { category: 'Criatividade', level: 'Iniciante', xp: 10, title: 'Três usos', text: 'Escolha um objeto comum e invente três usos diferentes para ele.' },
  { category: 'Criatividade', level: 'Intermediário', xp: 20, title: 'Solução improvável', text: 'Imagine um problema da escola ou do trabalho. Crie uma solução que pareça estranha inicialmente, mas que poderia funcionar.' },
  { category: 'Criatividade', level: 'Avançado', xp: 30, title: 'Crie uma ideia', text: 'Imagine uma ferramenta digital que ainda não existe e que poderia facilitar a vida de estudantes. Defina nome, função e público.' }
];

const category = document.querySelector('#category');
const level = document.querySelector('#level');
const title = document.querySelector('#challengeTitle');
const text = document.querySelector('#challengeText');
const challengeLevel = document.querySelector('#challengeLevel');
const challengeCategory = document.querySelector('#challengeCategory');
const counter = document.querySelector('#counter');
const xpElement = document.querySelector('#xp');
const completedElement = document.querySelector('#completed');
const streakElement = document.querySelector('#streak');
const rankElement = document.querySelector('#rank');
const nextLevelElement = document.querySelector('#nextLevel');
const progressBar = document.querySelector('#progressBar');
const feedback = document.querySelector('#feedback');
const completeButton = document.querySelector('#completeChallenge');

function loadJson(key, fallback) {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value ?? fallback;
  } catch {
    return fallback;
  }
}

const saved = loadJson('desafioDoDia', { xp: 0, completed: 0, streak: 0, lastDate: null });
let state = { ...saved };
let currentChallenge = null;
let completedChallengeKeys = new Set(loadJson('desafioDoDiaCompleted', []));

const rankNames = ['Explorador', 'Aprendiz', 'Praticante', 'Criador', 'Mestre'];

function saveState() {
  localStorage.setItem('desafioDoDia', JSON.stringify(state));
  localStorage.setItem('desafioDoDiaCompleted', JSON.stringify([...completedChallengeKeys]));
}

function updateStats() {
  const currentLevel = Math.floor(state.xp / 100) + 1;
  const levelXp = state.xp % 100;
  const rank = rankNames[Math.min(currentLevel - 1, rankNames.length - 1)];

  xpElement.textContent = state.xp;
  completedElement.textContent = state.completed;
  streakElement.textContent = state.streak;
  rankElement.textContent = `Nível ${currentLevel} · ${rank}`;
  nextLevelElement.textContent = `${100 - levelXp} XP para o próximo nível`;
  progressBar.style.width = `${levelXp}%`;
}

function getFilteredChallenges() {
  return challenges.filter(challenge =>
    (category.value === 'Todas' || challenge.category === category.value) &&
    (level.value === 'Todos' || challenge.level === level.value)
  );
}

function updateCounter(list) {
  counter.textContent = `Desafios disponíveis: ${list.length}`;
}

function drawChallenge() {
  const filtered = getFilteredChallenges();
  updateCounter(filtered);
  feedback.textContent = '';

  if (!filtered.length) {
    currentChallenge = null;
    title.textContent = 'Nenhum desafio encontrado';
    text.textContent = 'Tente outra combinação de categoria e nível.';
    challengeLevel.textContent = '—';
    challengeCategory.textContent = '—';
    completeButton.disabled = true;
    return;
  }

  currentChallenge = filtered[Math.floor(Math.random() * filtered.length)];
  title.textContent = currentChallenge.title;
  text.textContent = currentChallenge.text;
  challengeLevel.textContent = `${currentChallenge.level} · ${currentChallenge.xp} XP`;
  challengeCategory.textContent = currentChallenge.category;

  const key = currentChallenge.title;
  completeButton.disabled = completedChallengeKeys.has(key);
  if (completeButton.disabled) feedback.textContent = '✓ Você já concluiu este desafio.';
}

function completeChallenge() {
  if (!currentChallenge || completeButton.disabled) return;

  const key = currentChallenge.title;
  const today = new Date().toISOString().slice(0, 10);

  if (state.lastDate !== today) {
    state.streak += 1;
    state.lastDate = today;
  }

  state.xp += currentChallenge.xp;
  state.completed += 1;
  completedChallengeKeys.add(key);
  saveState();
  updateStats();

  completeButton.disabled = true;
  feedback.textContent = `🎉 +${currentChallenge.xp} XP! Desafio concluído.`;
}

completeButton.addEventListener('click', completeChallenge);
document.querySelector('#newChallenge').addEventListener('click', drawChallenge);
category.addEventListener('change', drawChallenge);
level.addEventListener('change', drawChallenge);

updateStats();
drawChallenge();