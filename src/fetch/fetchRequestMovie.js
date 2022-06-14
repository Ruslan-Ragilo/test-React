//fetch request
export const fetchMovies = async (key, endPointURL = '', page = '') => {
    let API_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/${endPointURL}${page}`; 
    const getDataFilm = await fetch(API_URL, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": key,
        },
      });
      const jsonResponse = await getDataFilm.json();
      return jsonResponse;
};