class BotCommands {
  constructor(bot) {
    this.bot = bot;
  }

  test(ctx) {
    ctx.reply('resposta de teste 2');
  }

  // Outros comandos podem ser definidos aqui
  welcome(ctx) {
    ctx.reply('Bem vindo a FURIA!');
  }
}

module.exports = BotCommands;
