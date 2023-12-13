const API_KEY = "CG-gVzQUy4Yzb6Jk2GwERWLikL6";
const BASE_URL = "https://api.coingecko.com/api/v3/";

const urlMaker = (pageNumber ,region) =>`${BASE_URL}coins/markets?vs_currency=${region}&order=market_cap_desc&per_page=20&page=${pageNumber}&sparkline=false&locale=en&x_cg_demo_api_key=${API_KEY}`;

const getSearched = (searchedText) => `${BASE_URL}search?query=${searchedText }&x_cg_demo_api_key=${API_KEY}`
 
const getChart = (coinId , region) => `${BASE_URL}coins/${coinId}/market_chart?vs_currency=${region}&days=7&x_cg_demo_api_key=${API_KEY}`

export { urlMaker ,getSearched , getChart};
