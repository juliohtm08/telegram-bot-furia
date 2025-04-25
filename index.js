const bot = require('./src/config/config');
const { message } = require('telegraf/filters');
const BotController = require('./src/controllers/botController');

const botController = new BotController(bot);
botController.setupCommands();

bot.on(message('text'), async (ctx) => {
  console.log(ctx);
});

bot.launch();
console.log('Bot is running!');
