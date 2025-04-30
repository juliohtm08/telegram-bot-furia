const userGreetings = new Set();

module.exports = (bot) => {
  bot.on('message', async (ctx) => {
    const userId = ctx.message.from.id;
    const firstName = ctx.message.from.first_name || 'Furioso';

    if (!userGreetings.has(userId)) {
      userGreetings.add(userId);

      const welcomeMessage = `
👋 *Seja muito bem-vindo(a), ${firstName}, ao grupo de CS da FURIA!* 🐾

🔥 Aqui você acompanha tudo sobre a line da FURIA no CS:
• Partidas recentes
• Jogadores do time
• E muito mais!

📥 Use o comando /comandos para ver tudo que o bot pode fazer!
      `;

      await ctx.reply(welcomeMessage, { parse_mode: 'Markdown' });
    }
  });
};
