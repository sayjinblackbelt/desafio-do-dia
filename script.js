const challenges = [
  { category: 'Informática', level: 'Iniciante', title: 'Organize seus arquivos', text: 'Imagine que sua pasta de Downloads está cheia. Crie uma estratégia simples para organizar documentos, imagens e apresentações.' },
  { category: 'Informática', level: 'Intermediário', title: 'Atalho que economiza tempo', text: 'Escolha uma tarefa que você repete no computador e pesquise ou descubra um atalho de teclado que possa torná-la mais rápida.' },
  { category: 'Informática', level: 'Avançado', title: 'Pense como suporte técnico', text: 'Um computador liga, mas não aparece imagem. Liste três hipóteses e organize uma sequência lógica para investigar o problema.' },
  { category: 'Lógica', level: 'Iniciante', title: 'Sequência', text: 'Complete mentalmente: 2, 4, 8, 16... Qual é o próximo número? Explique a regra usada.' },
  { category: 'Lógica', level: 'Intermediário', title: 'O problema das caixas', text: 'Você tem três caixas e apenas uma contém um objeto. Crie uma estratégia que minimize o número de tentativas para encontrá-lo.' },
  { category: 'Lógica', level: 'Avançado', title: 'Algoritmo do cotidiano', text: 'Escolha uma tarefa simples, como preparar um café, e escreva um algoritmo detalhado para que outra pessoa consiga executá-la sem perguntar nada.' },
  { category: 'Criatividade', level: 'Iniciante', title: 'Três usos', text: 'Escolha um objeto comum e invente três usos diferentes para ele.' },
  { category: 'Criatividade', level: 'Intermediário', title: 'Solução improvável', text: 'Imagine um problema da escola ou do trabalho. Crie uma solução que pareça estranha inicialmente, mas que poderia funcionar.' },
  { category: 'Criatividade', level: 'Avançado', title: 'Crie uma ideia', text: 'Imagine uma ferramenta digital que ainda não existe e que poderia facilitar a vida de estudantes. Defina nome, função e público.' }
];

const category = document.querySelector('#category');
const level = document.querySelector('#level');
const title = document.querySelector('#challengeTitle');
const text = document.querySelector('#challengeText');
const challengeLevel = document.querySelector('#challengeLevel');
const challengeCategory = document.querySelector('#challengeCategory');
const counter = document.querySelector('#counter');

function updateCounter(list) {
  counter.textContent = `Desafios disponíveis: ${list.length}`;
}

function drawChallenge() {
  const filtered = challenges.filter(challenge =>
    (category.value === 'Todas' || challenge.category === category.value) &&
    (level.value === 'Todos' || challenge.level === level.value)
  );

  updateCounter(filtered);

  if (!filtered.length) {
    title.textContent = 'Nenhum desafio encontrado';
    text.textContent = 'Tente outra combinação de categoria e nível.';
    challengeLevel.textContent = '—';
    challengeCategory.textContent = '—';
    return;
  }

  const challenge = filtered[Math.floor(Math.random() * filtered.length)];
  title.textContent = challenge.title;
  text.textContent = challenge.text;
  challengeLevel.textContent = challenge.level;
  challengeCategory.textContent = challenge.category;
}

document.querySelector('#newChallenge').addEventListener('click', drawChallenge);
category.addEventListener('change', drawChallenge);
level.addEventListener('change', drawChallenge);
drawChallenge();
