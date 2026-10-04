const challenges = [
  // Informática — Iniciante
  { category: 'Informática', level: 'Iniciante', xp: 10, title: 'Organize seus arquivos', text: 'Imagine que sua pasta de Downloads está cheia. Crie uma estratégia simples para organizar documentos, imagens e apresentações.' },
  { category: 'Informática', level: 'Iniciante', xp: 10, title: 'Atalhos essenciais', text: 'Escolha três atalhos de teclado que você considera úteis e explique para que serve cada um.' },
  { category: 'Informática', level: 'Iniciante', xp: 10, title: 'Hardware ou software?', text: 'Liste cinco exemplos de hardware e cinco exemplos de software. Depois explique a diferença entre os dois.' },
  { category: 'Informática', level: 'Iniciante', xp: 10, title: 'Senha segura', text: 'Crie um exemplo fictício de senha forte e liste três características que tornam uma senha mais segura.' },
  { category: 'Informática', level: 'Iniciante', xp: 10, title: 'Arquivo certo', text: 'Você precisa enviar uma foto, um documento de texto e uma apresentação. Escolha uma extensão adequada para cada arquivo.' },
  { category: 'Informática', level: 'Iniciante', xp: 10, title: 'Navegação consciente', text: 'Antes de clicar em um link recebido por mensagem, liste três coisas que você verificaria para avaliar se ele é confiável.' },
  { category: 'Informática', level: 'Iniciante', xp: 10, title: 'Pasta inteligente', text: 'Crie uma estrutura de pastas para organizar os arquivos de um projeto escolar ou profissional.' },
  { category: 'Informática', level: 'Iniciante', xp: 10, title: 'Backup', text: 'Imagine que seu computador quebrou hoje. Quais três arquivos seriam mais importantes para você recuperar? Como faria o backup deles?' },
  { category: 'Informática', level: 'Iniciante', xp: 10, title: 'Conheça seu teclado', text: 'Escolha cinco teclas ou combinações pouco usadas por você e descubra para que servem.' },
  { category: 'Informática', level: 'Iniciante', xp: 10, title: 'Limpeza digital', text: 'Escolha uma pasta do seu computador e defina três critérios para decidir o que manter, organizar ou excluir.' },

  // Informática — Intermediário
  { category: 'Informática', level: 'Intermediário', xp: 20, title: 'Atalho que economiza tempo', text: 'Escolha uma tarefa que você repete no computador e descubra um atalho de teclado que possa torná-la mais rápida.' },
  { category: 'Informática', level: 'Intermediário', xp: 20, title: 'Planilha útil', text: 'Imagine uma planilha para controlar gastos mensais. Defina pelo menos cinco colunas que seriam úteis.' },
  { category: 'Informática', level: 'Intermediário', xp: 20, title: 'Pesquisa eficiente', text: 'Você precisa encontrar uma informação específica na internet. Escreva três estratégias para tornar sua pesquisa mais precisa.' },
  { category: 'Informática', level: 'Intermediário', xp: 20, title: 'Apresentação melhor', text: 'Escolha uma apresentação com muitos textos e proponha três mudanças para melhorar sua comunicação visual.' },
  { category: 'Informática', level: 'Intermediário', xp: 20, title: 'Automatize uma tarefa', text: 'Escolha uma tarefa repetitiva que você faz no computador e descreva como poderia automatizá-la.' },
  { category: 'Informática', level: 'Intermediário', xp: 20, title: 'Arquivo compartilhado', text: 'Você precisa trabalhar em um documento com outras pessoas. Liste três cuidados para evitar perda ou conflito de informações.' },
  { category: 'Informática', level: 'Intermediário', xp: 20, title: 'Golpe digital', text: 'Analise um exemplo fictício de e-mail urgente pedindo seus dados. Liste os sinais que poderiam indicar uma tentativa de golpe.' },
  { category: 'Informática', level: 'Intermediário', xp: 20, title: 'Interface melhor', text: 'Escolha um site ou aplicativo que você usa e identifique duas coisas que poderiam melhorar sua experiência.' },
  { category: 'Informática', level: 'Intermediário', xp: 20, title: 'Dados organizados', text: 'Você recebeu uma lista de 100 pessoas sem ordem definida. Proponha uma forma de organizar e filtrar esses dados.' },
  { category: 'Informática', level: 'Intermediário', xp: 20, title: 'Problema de conexão', text: 'A internet parou de funcionar em um computador. Crie uma sequência de verificações antes de pedir ajuda técnica.' },

  // Informática — Avançado
  { category: 'Informática', level: 'Avançado', xp: 30, title: 'Pense como suporte técnico', text: 'Um computador liga, mas não aparece imagem. Liste três hipóteses e organize uma sequência lógica para investigar o problema.' },
  { category: 'Informática', level: 'Avançado', xp: 30, title: 'Fluxo automatizado', text: 'Desenhe mentalmente um fluxo para receber um formulário, organizar os dados e gerar uma resposta automática.' },
  { category: 'Informática', level: 'Avançado', xp: 30, title: 'Segurança em camadas', text: 'Imagine que você precisa proteger uma conta importante. Proponha uma estratégia usando pelo menos quatro medidas de segurança.' },
  { category: 'Informática', level: 'Avançado', xp: 30, title: 'Banco de dados', text: 'Você precisa cadastrar alunos, turmas e atividades. Quais informações deveriam existir e como você relacionaria esses dados?' },
  { category: 'Informática', level: 'Avançado', xp: 30, title: 'Projeto digital', text: 'Defina uma pequena aplicação web que resolveria um problema real. Descreva público, problema, solução e três funcionalidades.' },
  { category: 'Informática', level: 'Avançado', xp: 30, title: 'Debug mental', text: 'Um botão de um site não funciona. Liste possíveis causas e organize os testes do mais simples ao mais complexo.' },
  { category: 'Informática', level: 'Avançado', xp: 30, title: 'Dados e privacidade', text: 'Uma escola quer coletar dados dos estudantes para melhorar suas atividades. Quais dados são realmente necessários e quais deveriam ser evitados?' },
  { category: 'Informática', level: 'Avançado', xp: 30, title: 'Arquitetura simples', text: 'Imagine uma aplicação com página, lógica e armazenamento. Explique qual seria a função de cada camada.' },
  { category: 'Informática', level: 'Avançado', xp: 30, title: 'Plano de recuperação', text: 'Um serviço digital importante ficou indisponível. Crie um plano básico para identificar o problema, comunicar os usuários e recuperar o serviço.' },
  { category: 'Informática', level: 'Avançado', xp: 30, title: 'Código sustentável', text: 'Você recebeu um código difícil de entender. Liste cinco práticas que poderiam torná-lo mais organizado e fácil de manter.' },

  // Lógica — Iniciante
  { category: 'Lógica', level: 'Iniciante', xp: 10, title: 'Sequência', text: 'Complete mentalmente: 2, 4, 8, 16... Qual é o próximo número? Explique a regra usada.' },
  { category: 'Lógica', level: 'Iniciante', xp: 10, title: 'Classifique', text: 'Separe mentalmente estes itens em dois grupos: maçã, cadeira, banana, mesa, laranja, sofá. Qual foi seu critério?' },
  { category: 'Lógica', level: 'Iniciante', xp: 10, title: 'Ordem correta', text: 'Você precisa sair de casa: vestir-se, acordar, colocar o sapato e tomar café. Qual seria uma ordem lógica? Explique.' },
  { category: 'Lógica', level: 'Iniciante', xp: 10, title: 'Encontre a regra', text: 'Se A = 1, B = 2 e C = 3, qual seria o valor de CAB? Explique como chegou ao resultado.' },
  { category: 'Lógica', level: 'Iniciante', xp: 10, title: 'Verdadeiro ou falso', text: 'Uma afirmação pode parecer verdadeira e ainda assim estar errada. Crie um exemplo e explique por que precisamos verificar evidências.' },
  { category: 'Lógica', level: 'Iniciante', xp: 10, title: 'Passo a passo', text: 'Escolha uma tarefa simples e transforme-a em uma sequência de cinco passos claros.' },
  { category: 'Lógica', level: 'Iniciante', xp: 10, title: 'Qual não pertence?', text: 'Escolha um grupo de quatro objetos e descubra qual deles não pertence ao conjunto. Explique seu critério.' },
  { category: 'Lógica', level: 'Iniciante', xp: 10, title: 'Preveja o próximo', text: 'Crie uma sequência de cinco números e desafie outra pessoa a descobrir a regra.' },
  { category: 'Lógica', level: 'Iniciante', xp: 10, title: 'Decisão', text: 'Imagine que você tem duas opções para resolver um problema. Liste um critério objetivo para escolher entre elas.' },
  { category: 'Lógica', level: 'Iniciante', xp: 10, title: 'Erro na sequência', text: 'Crie uma sequência de passos com um erro proposital. Depois identifique o erro e corrija-o.' },

  // Lógica — Intermediário
  { category: 'Lógica', level: 'Intermediário', xp: 20, title: 'O problema das caixas', text: 'Você tem três caixas e apenas uma contém um objeto. Crie uma estratégia que minimize o número de tentativas para encontrá-lo.' },
  { category: 'Lógica', level: 'Intermediário', xp: 20, title: 'Algoritmo de decisão', text: 'Crie um algoritmo simples que decida se uma pessoa deve levar guarda-chuva, usando apenas informações sobre o clima.' },
  { category: 'Lógica', level: 'Intermediário', xp: 20, title: 'Padrão escondido', text: 'Crie uma sequência numérica com uma regra que não seja imediatamente óbvia. Desafie alguém a descobri-la.' },
  { category: 'Lógica', level: 'Intermediário', xp: 20, title: 'Problema em etapas', text: 'Pegue um problema grande e divida-o em três problemas menores que possam ser resolvidos separadamente.' },
  { category: 'Lógica', level: 'Intermediário', xp: 20, title: 'Se... então...', text: 'Crie três regras usando estruturas do tipo “se... então...” para representar uma decisão do cotidiano.' },
  { category: 'Lógica', level: 'Intermediário', xp: 20, title: 'Eficiência', text: 'Você precisa encontrar um nome em uma lista grande. Compare procurar do começo ao fim com usar uma lista organizada alfabeticamente.' },
  { category: 'Lógica', level: 'Intermediário', xp: 20, title: 'Detective de erros', text: 'Imagine que um processo está produzindo resultados errados. Quais informações você coletaria antes de tentar corrigir o processo?' },
  { category: 'Lógica', level: 'Intermediário', xp: 20, title: 'Prioridades', text: 'Você tem cinco tarefas e tempo para realizar apenas três. Crie um critério objetivo para definir quais fazer primeiro.' },
  { category: 'Lógica', level: 'Intermediário', xp: 20, title: 'Causa ou coincidência?', text: 'Crie um exemplo em que duas coisas acontecem juntas, mas uma não necessariamente causa a outra. Explique.' },
  { category: 'Lógica', level: 'Intermediário', xp: 20, title: 'Teste uma hipótese', text: 'Escolha uma hipótese simples e descreva um experimento que poderia confirmar ou refutar essa hipótese.' },

  // Lógica — Avançado
  { category: 'Lógica', level: 'Avançado', xp: 30, title: 'Algoritmo do cotidiano', text: 'Escolha uma tarefa simples, como preparar um café, e escreva um algoritmo detalhado para que outra pessoa consiga executá-la sem perguntar nada.' },
  { category: 'Lógica', level: 'Avançado', xp: 30, title: 'Otimização', text: 'Escolha um processo que você realiza frequentemente e identifique uma etapa que poderia ser eliminada ou simplificada.' },
  { category: 'Lógica', level: 'Avançado', xp: 30, title: 'Árvore de decisão', text: 'Crie uma árvore de decisão para escolher entre três opções de acordo com pelo menos dois critérios.' },
  { category: 'Lógica', level: 'Avançado', xp: 30, title: 'Contradição', text: 'Crie uma afirmação que pareça lógica, mas que contenha uma contradição. Explique onde está o problema.' },
  { category: 'Lógica', level: 'Avançado', xp: 30, title: 'Pensamento sistêmico', text: 'Escolha um problema e identifique pelo menos três fatores que influenciam seu resultado e como eles se relacionam.' },
  { category: 'Lógica', level: 'Avançado', xp: 30, title: 'Pior caso', text: 'Ao procurar uma informação em uma lista desorganizada, qual seria o pior caso? Como você poderia reduzir esse custo?' },
  { category: 'Lógica', level: 'Avançado', xp: 30, title: 'Prova por exemplo', text: 'Uma regra funciona em três exemplos. Isso é suficiente para provar que ela sempre funciona? Explique seu raciocínio.' },
  { category: 'Lógica', level: 'Avançado', xp: 30, title: 'Estratégia', text: 'Imagine um jogo em que cada decisão afeta as próximas. Como você avaliaria uma estratégia antes de executá-la?' },
  { category: 'Lógica', level: 'Avançado', xp: 30, title: 'Variáveis', text: 'Escolha um problema cotidiano e identifique quais informações poderiam ser tratadas como variáveis de um algoritmo.' },
  { category: 'Lógica', level: 'Avançado', xp: 30, title: 'Generalização', text: 'Pegue uma solução criada para um problema específico e pense em como transformá-la em uma solução que funcione para vários casos.' },

  // Criatividade — Iniciante
  { category: 'Criatividade', level: 'Iniciante', xp: 10, title: 'Três usos', text: 'Escolha um objeto comum e invente três usos diferentes para ele.' },
  { category: 'Criatividade', level: 'Iniciante', xp: 10, title: 'Novo nome', text: 'Escolha um objeto comum e invente cinco nomes diferentes para ele.' },
  { category: 'Criatividade', level: 'Iniciante', xp: 10, title: 'Desenho rápido', text: 'Escolha uma palavra aleatória e faça um desenho inspirado nela em menos de dois minutos.' },
  { category: 'Criatividade', level: 'Iniciante', xp: 10, title: 'História em três frases', text: 'Crie uma história completa usando apenas três frases.' },
  { category: 'Criatividade', level: 'Iniciante', xp: 10, title: 'Misture ideias', text: 'Combine dois objetos diferentes e imagine um novo produto que misture suas funções.' },
  { category: 'Criatividade', level: 'Iniciante', xp: 10, title: 'Final diferente', text: 'Escolha uma história conhecida e invente um final completamente diferente.' },
  { category: 'Criatividade', level: 'Iniciante', xp: 10, title: 'Objeto impossível', text: 'Imagine um objeto que não poderia existir normalmente. Para que ele serviria?' },
  { category: 'Criatividade', level: 'Iniciante', xp: 10, title: 'Cinco perguntas', text: 'Escolha um objeto e formule cinco perguntas curiosas sobre ele.' },
  { category: 'Criatividade', level: 'Iniciante', xp: 10, title: 'Publicidade', text: 'Crie uma frase publicitária para vender um objeto completamente comum.' },
  { category: 'Criatividade', level: 'Iniciante', xp: 10, title: 'Mude a perspectiva', text: 'Imagine como seria um dia comum visto pelos olhos de um objeto da sua mesa.' },

  // Criatividade — Intermediário
  { category: 'Criatividade', level: 'Intermediário', xp: 20, title: 'Solução improvável', text: 'Imagine um problema da escola ou do trabalho. Crie uma solução que pareça estranha inicialmente, mas que poderia funcionar.' },
  { category: 'Criatividade', level: 'Intermediário', xp: 20, title: 'Produto híbrido', text: 'Combine duas tecnologias existentes para criar um produto novo. Explique como ele funcionaria.' },
  { category: 'Criatividade', level: 'Intermediário', xp: 20, title: 'Melhore o cotidiano', text: 'Escolha uma atividade que as pessoas fazem todos os dias e invente uma maneira de torná-la mais simples.' },
  { category: 'Criatividade', level: 'Intermediário', xp: 20, title: 'Limite criativo', text: 'Crie uma ideia usando apenas três materiais que você escolher. Explique por que eles foram escolhidos.' },
  { category: 'Criatividade', level: 'Intermediário', xp: 20, title: 'Problema sem tecnologia', text: 'Escolha um problema atual e imagine uma solução que não use nenhuma tecnologia digital.' },
  { category: 'Criatividade', level: 'Intermediário', xp: 20, title: 'Problema sem dinheiro', text: 'Imagine que você precisa melhorar um ambiente, mas não pode gastar nada. Que solução criativa proporia?' },
  { category: 'Criatividade', level: 'Intermediário', xp: 20, title: 'Reinvente a aula', text: 'Imagine uma aula sobre qualquer assunto. Transforme-a em uma experiência com pelo menos três atividades diferentes.' },
  { category: 'Criatividade', level: 'Intermediário', xp: 20, title: 'Interface imaginária', text: 'Imagine a interface de um aplicativo que ainda não existe. Descreva seus três elementos principais.' },
  { category: 'Criatividade', level: 'Intermediário', xp: 20, title: 'Troca de público', text: 'Escolha um produto para adultos e adapte sua proposta para crianças. O que mudaria?' },
  { category: 'Criatividade', level: 'Intermediário', xp: 20, title: 'Se fosse diferente', text: 'Escolha uma regra comum da sociedade e imagine como seria o mundo se ela fosse completamente diferente.' },

  // Criatividade — Avançado
  { category: 'Criatividade', level: 'Avançado', xp: 30, title: 'Crie uma ideia', text: 'Imagine uma ferramenta digital que ainda não existe e que poderia facilitar a vida de estudantes. Defina nome, função e público.' },
  { category: 'Criatividade', level: 'Avançado', xp: 30, title: 'Inovação com restrições', text: 'Crie uma solução para um problema real usando apenas recursos que já existem. O diferencial deve estar na combinação deles.' },
  { category: 'Criatividade', level: 'Avançado', xp: 30, title: 'Produto do futuro', text: 'Imagine um produto que poderia existir daqui a 20 anos. Descreva problema, tecnologia, usuário e possíveis riscos.' },
  { category: 'Criatividade', level: 'Avançado', xp: 30, title: 'Reinvente uma profissão', text: 'Escolha uma profissão atual e imagine como ela poderia funcionar daqui a 30 anos.' },
  { category: 'Criatividade', level: 'Avançado', xp: 30, title: 'Design para todos', text: 'Crie uma solução que torne uma atividade cotidiana mais acessível para pessoas com diferentes necessidades.' },
  { category: 'Criatividade', level: 'Avançado', xp: 30, title: 'Sistema de aprendizagem', text: 'Imagine um sistema que incentive alguém a aprender continuamente. Defina mecânicas, recompensas e desafios.' },
  { category: 'Criatividade', level: 'Avançado', xp: 30, title: 'Cidade do futuro', text: 'Projete uma solução para melhorar uma cidade usando tecnologia, educação ou design. Explique o impacto esperado.' },
  { category: 'Criatividade', level: 'Avançado', xp: 30, title: 'Ideia em um minuto', text: 'Escolha um problema aleatório e crie uma solução em apenas um minuto. Depois refine a ideia com três melhorias.' },
  { category: 'Criatividade', level: 'Avançado', xp: 30, title: 'Inversão do problema', text: 'Escolha um problema e imagine como seria possível piorá-lo. Depois inverta cada ideia para encontrar possíveis soluções.' },
  { category: 'Criatividade', level: 'Avançado', xp: 30, title: 'Projeto completo', text: 'Crie uma ideia de projeto que combine educação, tecnologia e criatividade. Defina objetivo, público, atividade principal e resultado esperado.' }
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

function getLocalDateKey(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function getPreviousDateKey(date = new Date()) {
  const previous = new Date(date);
  previous.setDate(previous.getDate() - 1);
  return getLocalDateKey(previous);
}

function updateStreak(today) {
  if (!state.lastDate) {
    state.streak = 1;
  } else if (state.lastDate === today) {
    return;
  } else if (state.lastDate === getPreviousDateKey()) {
    state.streak += 1;
  } else {
    state.streak = 1;
  }

  state.lastDate = today;
}

function completeChallenge() {
  if (!currentChallenge || completeButton.disabled) return;

  const key = currentChallenge.title;
  const today = getLocalDateKey();

  updateStreak(today);
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
