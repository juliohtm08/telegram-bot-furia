const { fetchPastMatches, fecthTeam } = require('../api/api');

const FURIA_TEAM_ID = 124530;

class BotController {
  constructor(bot) {
    this.bot = bot;
  }
  // comando de teste
  test(ctx) {
    ctx.reply('resposta de teste 2');
  }

  // obter redes sociais
  socialMedia(ctx) {
    ctx.reply(
      `🔗 <b>Redes Sociais da FURIA</b>:\n
  📸 <b>Instagram:</b> <a href="https://www.instagram.com/furiagg/">@furiagg</a>\n
  💬 <b>X:</b> <a href="https://x.com/FURIA">@FURIA</a>\n
  🌐 <i>Acompanhe tudo sobre a FURIA nas redes sociais!</i>`,
      { parse_mode: 'HTML' }
    );
  }

  // obter jogos passados
  async matches(ctx) {
    const matches = await fetchPastMatches();

    if (!matches || matches.length === 0) {
      return ctx.reply('Partidas da FURIA não encontradas!😭');
    }

    const formattedMatches = matches.map((match) => {
      // dados do oponente
      const opponentData = match.opponents.find(
        (op) => op.opponent.id !== FURIA_TEAM_ID
      );

      // nome do oponente
      const opponentName =
        opponentData?.opponent?.name || 'Adversário indefinido';

      // data da partida
      const date = new Date(match.begin_at).toLocaleString('pt-BR', {
        timeZone: 'America/Sao_Paulo',
      });

      // vencedor da partida
      const winnerId = match.winner_id;
      let result = 'Resultado indefinido';

      if (winnerId) {
        if (winnerId === FURIA_TEAM_ID) {
          result = `✅ Vitória da FURIA`;
        }
        if (winnerId !== FURIA_TEAM_ID) {
          result = `❌ Derrota da FURIA`;
        }
        result;
      }

      // placar da partida
      let placar = '';
      if (match.results && match.results.length === 2) {
        const furiaResult = match.results.find(
          (res) => res.team_id === FURIA_TEAM_ID
        );
        const opponentResult = match.results.find(
          (res) => res.team_id !== FURIA_TEAM_ID
        );

        if (furiaResult && opponentResult) {
          placar = `Placar: ${furiaResult.score} - ${opponentResult.score}`;
        }
      }

      return `🏆 ${match.tournament.name}\n🆚 FURIA vs ${opponentName}\n📅 ${date}\n${result}\n${placar}`;
    });
    ctx.reply(formattedMatches.join('\n\n'));
  }

  // obter time atual
  async team(ctx) {
    const players = await fecthTeam();

    if (!players || players.length === 0) {
      return ctx.reply('Não foi possível encontrar o time da FURIA!😭');
    }
    const formattedPlayers = players.map((player) => {
      return `👤 ${player.name}`;
    });

    ctx.reply(`🏆 Time Atual da FURIA:\n\n${formattedPlayers.join('\n')}`);
  }
}

module.exports = BotController;
