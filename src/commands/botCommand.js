const BotController = require('../controllers/botController');

class BotCommand {
  constructor(bot) {
    this.bot = bot;
    this.commands = new BotController(this.bot); // Registro de comandos
  }

  setupCommands() {
    // comando '/test'
    this.bot.command('test', this.commands.test);

    // comando '/jogos'
    this.bot.command('jogos', (ctx) => this.commands.jogos(ctx));

    //comando '/team'
    this.bot.command('time', (ctx) => this.commands.team(ctx));
  }
}

module.exports = BotCommand;
