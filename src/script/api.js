import { CONFIG } from "./config.js";

export async function getStockQuote(symbol) {
  const url =
    `${CONFIG.SYMBOL_LOOKUP.BASE_URL}/quote` +
    `?symbol=${symbol}` +
    `&token=${CONFIG.SYMBOL_LOOKUP.END}`;

  const response = await fetch(url);
  return await response.json();
}
