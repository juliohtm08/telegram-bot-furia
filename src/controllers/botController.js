class BotController {
  constructor(botService) {
    this.botService = botService;
  }

  // comando de teste
  async test(ctx) {
    return this.botService.getTest(ctx);
  }

  // obter redes sociais
  async socialMedia(ctx) {
    return this.botService.getSocialMedia(ctx);
  }

  // obter jogos passados
  async matches(ctx) {
    return this.botService.getPastMatches(ctx);
  }

  // obter time atual
  async team(ctx) {
    return this.botService.getCurrentTeam(ctx);
  }
}

module.exports = BotController;
