const BotCommands = require('../commands/botCommand');

class BotController {
  constructor(bot) {
    this.bot = bot;
    this.commands = new BotCommands(this.bot); // Registro de comandos
  }

  setupCommands() {
    // comando '/test'
    this.bot.command('test', this.commands.test);

    // comando '/jogos'
    this.bot.command('jogos', (ctx) => this.commands.jogos(ctx));
  }
}

module.exports = BotController;
