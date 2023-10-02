import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: #f8f8f8;

  @media (min-width: 768px) {
    flex-direction: row;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const GamesContainer = styled.div`
  flex: 1;
  margin-bottom: 20px;
  color: #fff;

  @media (min-width: 768px) {
    margin-bottom: 0;
    margin-right: 20px;
  }
`;

const GameDetailContainer = styled.div`
  flex: 1;
`;

const Title = styled.h1`
  color: #00000;
  font-size: 2em;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif;
  background-color: #000000;
  padding: 10px;
  border-radius: 8px; 
`;

const GameItem = styled.div`
  background-color: #000000;
  margin: 10px 0;
  padding: 15px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    background-color: #800080;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
`;

const GameDetail = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: left;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const GameTitle = styled.h2`
  font-family: 'fantasy';
  color: #fff;
  background-color: #000000;
  padding: 10px; 
  border-radius: 8px;
`;

const GameImage = styled.img`
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 10px;
`;

const InfoLabel = styled.span`
  font-weight: bold;
  margin-right: 5px;
  color: #00000;
`;


const App = () => {
  const [jogoSelecionado, setJogoSelecionado] = useState(null);

  const jogos = [
    { 
      id: 1, 
      nome: 'Minecraft', 
      imagem: '/images/minecraft-3.jpg', 
      descricao: 'Lançado em 2009, Minecraft é até hoje o jogo mais jogado do mundo. O jogo possui vários modos distintos, mas o principal é o "Survival". Nele, o objetivo é passar por diferentes fases, cada vez mais complicadas, até chegar à batalha final, com o Ender Dragon.',
      estimativaJogadores: '+95 milhões de jogadores ativos',
      genero: 'Sandbox',
      modoJogo: 'Um jogador e multijogador',
      plataformas: 'Microsoft Windows, macOS, Linux, Console, Mobile',
    },
    { 
      id: 2, 
      nome: 'Fortnite', 
      imagem: '/images/fortnite.jpg', 
      descricao: 'Um dos jogos mais populares e celebrados em todo o mundo, Fortnite foi lançado em 2017 e atraiu 125 milhões de jogadores somente no seu primeiro ano de estreia. Hoje, existem duas modalidades do game, Fortnite: Save the World e Fortnite: Battle Royale. Nos dois modos de jogar, você deve coletar materiais como madeira, tijolo e metal para a construção das suas fortificações. Além disso, armas estão disponíveis para que você consiga finalizar uma missão ou ser o último jogador no mapa.',
      estimativaJogadores: '45 milhões de jogadores ativos',
      genero: 'Battle Royale',
      modoJogo: 'Multiplayer',
      plataformas: 'Microsoft Windows, iOS, Android, Mac OC, Playstation 4, Xbox One, Nintendo Switch',
    },
    { 
      id: 3, 
      nome: 'Roblox', 
      imagem: '/images/roblox.jpg', 
      descricao: 'Explore diversos mundos em 3D e crie histórias e memórias lendárias. Roblox é um popular jogo baseado em um mundo aberto, onde os jogadores têm a possibilidade de criar personagens e seu próprios universos virtuais. Além disso, os jogadores têm a possibilidade de criar amizades dentro do game e adicioná-los à sua lista de amigos.',
      estimativaJogadores: '+200 milhões de jogadores mensais',
      genero: 'Sandbox',
      modoJogo: 'Multiplayer',
      plataformas: 'Microsoft Windows, Xbox One, iOS, Android, Fire OS',
    },
    { 
      id: 4, 
      nome: 'Final Fantasy XIV A Realm Reborn', 
      imagem: '/images/final.jpg', 
      descricao: 'Final Fantasy XIV é o MMORPG da aclamada franquia de jogos de todos os tempos. O game conta com a customização de personagem, belos gráficos, sistema de PvE, PvP, de crafts de itens e muito mais. Também possui uma mecânica diferenciada, onde você pode comprar um terreno só seu, tingir suas roupas e até modificar a aparência dos equipamentos.',
      estimativaJogadores: '+2 milhões de jogadores por dia',
      genero: 'MMORPG',
      modoJogo: 'Multiplayer',
      plataformas: 'Microsoft Windows, PlayStation 4, PlayStation 5',
    },
    { 
      id: 5, 
      nome: 'FIFA 23', 
      imagem: '/images/fifa.jpg', 
      descricao: 'Desenvolvida pela cultuada empresa EA Sports, FIFA 23 é a 29º inclusão na série de jogos de futebol FIFA.O jogo quebrou recordes em sua semana de lançamento com mais de 10,3 milhões de downloads. Atualmente, é estimado um total de 90 mil jogadores simultâneos.',
      estimativaJogadores: '10 milhões de jogadores ativos',
      genero: 'Esporte',
      modoJogo: 'Singleplayer, Multiplayer',
      plataformas: 'PlayStation 5, PlayStation 4, Xbox, Nintendo Switch, Google Stadia, Microsoft Windows',
    },
    { 
      id: 6, 
      nome: 'Valorant', 
      imagem: '/images/valorant.jpg', 
      descricao: 'Valorant é um jogo de tiro tático 5X5. Vence o grupo que primeiro cumprir a missão (que pode ser detonar uma bomba ou desarmá-la) ou eliminar todos os jogadores do grupo adversário. Uma coisa bem legal nesse game é que cada personagem dispõe de poderes especiais únicos. Para vencer, é preciso usar bem essas habilidades e saber combiná-las com as estratégias do seu time. O jogo está disponível gratuitamente!',
      estimativaJogadores: 'em média 2 milhões de jogadores diários',
      genero: 'Tiro em primeira pessoa',
      modoJogo: 'Multiplayer',
      plataformas: 'Microsoft Windows',
    },
    { 
      id: 7, 
      nome: 'Genshin Impact', 
      imagem: '/images/genshin.jpg', 
      descricao: 'Ambientado em um universo de fantasia e tendo como principal característica o estilo de anime, o jogo Genshin Impact tem se tornado um dos games mais populares e jogados do mundo dos últimos anos. Ele oferece um mundo aberto repleto de missões, no qual os jogadores podem utilizar magia para explorar, combater e desbravar este universo.',
      estimativaJogadores: '65 milhões de jogadores ativos',
      genero: 'Ação, RPG',
      modoJogo: 'Singleplayer, Multiplayer',
      plataformas: 'GeForce Now, PlayStation 4, PlayStation 5, Android, iOS, Microsoft Windows',
    },
    { 
      id: 8, 
      nome: 'World of Warcraft', 
      imagem: '/images/word.jpg', 
      descricao: 'World of Warcraft é um jogo de sucesso desenvolvido e distribuído pela produtora Blizzard Entertainment, do gênero MMORPG. Apesar de ser um game antigo, ele ainda mantém uma legião de fãs, bem assíduos.',
      estimativaJogadores: '+1 milhão de jogadores por dia',
      genero: 'MMORPG',
      modoJogo: 'Multiplayer',
      plataformas: 'Microsoft Windows',
    },
    { 
      id: 9, 
      nome: 'League of Legends', 
      imagem: '/images/lol.jpg', 
      descricao: 'Um dos titãs do cenário atual de gaming, League of Legends é o maior sucesso dos MOBAs no mundo por uma grande margem. Com suas mecânicas um pouco mais simples e gráficos mais leves do que Dota 2, o jogo foi aumentando em popularidade ao longo dos anos e já deixou seu concorrente para trás. Hoje em dia, é difícil encontrar alguém que nunca tenha ouvido falar do famoso LoL.',
      estimativaJogadores: '180 milhões de jogadores mensais',
      genero: 'MOBA',
      modoJogo: 'Multiplayer',
      plataformas: 'Microsoft Windows, macOS, Android, iOS',
    },
    { 
      id: 10, 
      nome: 'Counter-Strike: Global Offensive', 
      imagem: '/images/csgo.jpg', 
      descricao: 'Atualmente obtendo uma Grande atualização para o Counter-Strike 2, O Csgo é um dos mais tradicionais no mundo dos games. Os jogadores competem em equipes e se posicionam como terroristas (TR) e contra terroristas (CT). Os jogadores TR devem implantar uma bomba no campo inimigo, enquanto os CT têm que desativá-la, destruindo inimigos e protegendo as possíveis vítimas. ',
      estimativaJogadores: '35 milhões de jogadores ativos',
      genero: 'Tiro em primeira pessoa',
      modoJogo: 'um jogador e multijogador',
      plataformas: 'Microsoft Windows, OS X, PlayStation 3, Xbox 360, Linux',
    },
  ];

  const handleGameClick = (jogo) => {
    setJogoSelecionado(jogo);
  };

  return (
    <Container>
      <GamesContainer>
        <Title>Os Jogos Mais Jogados de 2023</Title>
        {jogos.map(jogo => (
          <GameItem key={jogo.id} onClick={() => handleGameClick(jogo)}>
            {jogo.nome}
          </GameItem>
        ))}
      </GamesContainer>

      {jogoSelecionado && (
        <GameDetailContainer>
          <GameDetail>
            <GameTitle>{jogoSelecionado.nome}</GameTitle>
            <GameImage src={jogoSelecionado.imagem} alt={jogoSelecionado.nome} />
            <p>{jogoSelecionado.descricao}</p>
            <p>
              <InfoLabel>Estimativa de jogadores:</InfoLabel> {jogoSelecionado.estimativaJogadores}<br />
              <InfoLabel>Gênero:</InfoLabel> {jogoSelecionado.genero}<br />
              <InfoLabel>Modo de jogo:</InfoLabel> {jogoSelecionado.modoJogo}<br />
              <InfoLabel>Plataformas:</InfoLabel> {jogoSelecionado.plataformas}
            </p>
          </GameDetail>
        </GameDetailContainer>
      )}
    </Container>
  );
};

export default App;
