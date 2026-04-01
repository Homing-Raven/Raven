import { getStockQuote } from "./api.js";
import { CONFIG } from "./config.js";

async function loadStocks() {
  for (const symbol of CONFIG.SYMBOLS) {
    const data = await getStockQuote(symbol);

    console.log(symbol, data);
  }
}

loadStocks();
