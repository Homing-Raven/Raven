import { getExchangeRate, getStockQuote } from "./api.js";
import { CONFIG } from "./config.js";

async function loadStocks() {
  for (const symbol of CONFIG.SYMBOLS) {
    const data = await getStockQuote(symbol);

    console.log(symbol, data);
  }
}

async function loadExchangeRate() {
  const data = await getExchangeRate();

  for (const currency in data.rates) {
    console.log(currency, data.rates[currency]);
  }
}

loadStocks();
loadExchangeRate();
