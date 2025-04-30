const bot = require('./src/config/config');
const { message } = require('telegraf/filters');
const BotCommand = require('./src/commands/BotCommand');
const Welcome = require('./src/commands/Welcome');

const botCommand = new BotCommand(bot);
botCommand.setupCommands();

bot.on(message('text'), async (ctx) => {
  console.log(ctx);
});

Welcome(bot);

bot.launch();
console.log('Bot is running!');
