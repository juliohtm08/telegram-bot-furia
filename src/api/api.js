require('dotenv').config();
const fetch = require('node-fetch');

const BASE_URL = process.env.BASE_URL;
const TOKEN = process.env.API_TOKEN;
const FURIA_TEAM_ID = 124530;

const fetchMatches = async (status) => {
  const url = `${BASE_URL}/csgo/matches?filter[opponent_id]=${FURIA_TEAM_ID}&filter[${status}]=true&range[begin_at]=2025-01-01,2026-12-31`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (!res.ok) {
      throw new Error(`Erro na API: ${res.statusText}`);
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.log(`Erro ao buscar partidas ${status}: `, error);
    return null;
  }
};

const fetchPastMatches = () => fetchMatches('past');

const fecthTeam = async () => {
  const url = `${BASE_URL}/csgo/players?filter[team_id]=${FURIA_TEAM_ID}`;

  try {
    const res = await fetch(url, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
      },
    });
    if (!res.ok) {
      throw new Error(`Erro na API: ${res.statusText}`);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.log(`Erro ao buscar time da FURIA: ${error}`);
    return null;
  }
};

module.exports = {
  fetchPastMatches,
  fecthTeam,
};
