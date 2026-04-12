async function getNews() {
  try {
    const response = await fetch(
      "https://api.worldnewsapi.com/search-news?api-key=e5731c7914e643258f9555c6219341d5&search-news?text=philippine+peso&language=en&earliest-publish-date=2026-04-08",
    );

    if (!response.ok) {
      throw new Error("fetch function error");
    }

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

getNews();
