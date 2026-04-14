const NOW_DATE = new Date();

// Source - https://stackoverflow.com/a/23593099
// Posted by user3470953, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-14, License - CC BY-SA 4.0

function formattedDate(date) {
  const d = new Date(date);
  let month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;

  return [year, month, day].join("-");
}

async function getNews(actualDate) {
  try {
    const response = await fetch(
      `https://api.worldnewsapi.com/search-news?api-key=e5731c7914e643258f9555c6219341d5&text=philippine+peso&language=en&earliest-publish-date=${actualDate}`,
    );

    if (!response.ok) throw new Error("fetch function error");

    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

formattedDate(NOW_DATE);
getNews(formattedDate(NOW_DATE));
