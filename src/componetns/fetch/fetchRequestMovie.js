//fetch request
export const fetchMovies = async (url, key) => {
    const getDataFilm = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": key,
        },
      });
      const jsonResponse = await getDataFilm.json();
      const responseFilms = jsonResponse.films;
      return responseFilms;
};