const bot = require('./src/config/config');
const { message } = require('telegraf/filters');
const BotCommand = require('./src/commands/BotCommand');

const botCommand = new BotCommand(bot);
botCommand.setupCommands();

bot.on(message('text'), async (ctx) => {
  console.log(ctx);
});

bot.launch();
console.log('Bot is running!');
