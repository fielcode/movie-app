import config from "../config.json";

export const popularMovies = async (page = 1) => {
  const response = await fetch(
    `${config.api_base_url}/discover/movie?api_key=${
      config.api_key
    }&language=pt-BR&sort_by=popularity.desc&include_adult=false&page=${page}`
  );
  const data = await response.json();

  return data.results ? data.results : [];
};

export const searchMovies = async (query, page = 1) => {
  const response = await fetch(
    `${config.api_base_url}/search/movie?api_key=${
      config.api_key
    }&language=pt-BR&page=${page}&include_adult=false&query=${query}`
  );
  const data = await response.json();

  return data.results ? data.results : [];
};
