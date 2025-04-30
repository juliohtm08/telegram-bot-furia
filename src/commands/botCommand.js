const BotController = require('../controllers/BotController');
const BotService = require('../services/BotService');

class BotCommand {
  constructor(bot) {
    this.bot = bot;
    const botService = new BotService();
    this.commands = new BotController(botService);
  }

  setupCommands() {
    // comando '/test'
    this.bot.command('test', (ctx) => this.commands.test(ctx));

    // comando '/jogos'
    this.bot.command('jogos', (ctx) => this.commands.matches(ctx));

    //comando '/team'
    this.bot.command('time', (ctx) => this.commands.team(ctx));

    //comando '/redes'
    this.bot.command('redes', (ctx) => this.commands.socialMedia(ctx));

    //comando '/comandos'
    this.bot.command('comandos', (ctx) => this.commands.info(ctx));
  }
}

module.exports = BotCommand;
