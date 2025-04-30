# 🐾 FURIA CS2 Bot - Telegram

Bem-vindo ao **FURIA CS2 Bot**, um bot para Telegram feito com JavaScript que permite acompanhar tudo sobre o time de CS da FURIA: partidas, jogadores, redes sociais e muito mais!

---

## 🚀 Funcionalidades

- `/jogos` → Exibe as últimas partidas da FURIA no CS2
- `/time` → Exibe a line-up atual da FURIA
- `/redes` → Links das redes sociais oficiais da FURIA
- Mensagem automática de boas-vindas na primeira interação com o bot
- Comando `/comandos` com todos os comandos disponíveis

---

## 🧱 Tecnologias Utilizadas

- [Node.js](https://nodejs.org/)
- [Telegraf.js](https://telegraf.js.org/)
- [Dotenv](https://www.npmjs.com/package/dotenv)
- [PandaScore API](https://developers.pandascore.co/)

---

## 📦 Como rodar o projeto localmente

1. **Clone o repositório:**

```bash
git clone https://github.com/seu-usuario/bot-furia.git
cd bot-furia
```
2. **Instale as dependências:**
```bash
npm install
```
3. **Crie um arquivo .env com sua chave de API e token do bot:**
```bash
BOT_TOKEN=seu_token_do_telegram
PANDASCORE_TOKEN=sua_chave_da_api_pandascore
```
4. **Inicie o bot:**
```bash
npm start
```
