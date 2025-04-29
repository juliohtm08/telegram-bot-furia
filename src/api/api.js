require('dotenv').config();
const authorizedFetch = require('../utils/authorizedFetch');

const BASE_URL = process.env.BASE_URL;
const FURIA_TEAM_ID = +process.env.FURIA_ID;

// procura as partidas da FURIA no ano de 2025
const fetchMatches = async (status) => {
  const url = `${BASE_URL}/csgo/matches?filter[opponent_id]=${FURIA_TEAM_ID}&filter[${status}]=true&range[begin_at]=2025-01-01,2026-12-31`;

  try {
    const res = await authorizedFetch(url);
    const data = await res.json();

    return data;
  } catch (error) {
    return { data: null, error: error.message };
  }
};

const fetchPastMatches = () => fetchMatches('past');

// procura o time atual da FURIA
const fecthTeam = async () => {
  const url = `${BASE_URL}/csgo/players?filter[team_id]=${FURIA_TEAM_ID}`;

  try {
    const res = await authorizedFetch(url);
    const data = await res.json();

    return data;
  } catch (error) {
    return { data: null, error: error.message };
  }
};

module.exports = {
  fetchPastMatches,
  fecthTeam,
};
