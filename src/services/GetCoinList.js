const API_KEY = "CG-gVzQUy4Yzb6Jk2GwERWLikL6";
const BASE_URL = "https://api.coingecko.com/api/v3/";

const urlMaker = (pageNumber) => {
  return `${BASE_URL}coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=${pageNumber}&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`;
};
export { urlMaker };
