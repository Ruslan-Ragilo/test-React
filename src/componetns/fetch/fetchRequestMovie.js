//fetch request
export const fetchMovies = async (key, numberPage) => {
    let API_URL = `https://kinopoiskapiunofficial.tech/api/v2.2/films/top?100&page=${numberPage}`;      
    
    

    const getDataFilm = await fetch(API_URL, {
        headers: {
          "Content-Type": "application/json",
          "X-API-KEY": key,
        },
      });
      const jsonResponse = await getDataFilm.json();
      const responseFilms = jsonResponse.films;
      return responseFilms;
};