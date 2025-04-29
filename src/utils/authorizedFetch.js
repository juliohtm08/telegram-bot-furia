require('dotenv').config();
const fetch = require('node-fetch');

const TOKEN = process.env.API_TOKEN;

// Função para fazer requisições autenticadas com Bearer Token
const authorizedFetch = async (url, options = {}) => {
  const headers = {
    Authorization: `Bearer ${TOKEN}`,
    ...(options.headers || {}),
  };

  try {
    const res = await fetch(url, {
      ...options,
      headers,
    });
    // Verifica se a resposta da API foi bem-sucedida
    if (!res.ok) {
      throw new Error(`Erro na API ${res.statusText}`);
    }

    return res;
  } catch (error) {
    throw new Error(`Error ao fazer requisição autorizada: ${error}`);
  }
};

module.exports = authorizedFetch;
