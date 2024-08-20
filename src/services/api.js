import axios from "axios";

const API_KEY =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MmFkNjNmYWYzNjVkNWU1ZTZkNTMyMDc5MWIzZmFlMiIsIm5iZiI6MTcyNDA3NjkyMS42NjA1ODMsInN1YiI6IjY2YzJmYjhhMTY0MDhiZjYxZGJmOTc5YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.joAaTw-18VfDWFbnNs1uVWJiabY96TC94_pBmrgFmnQ";

axios.defaults.baseURL = "https://api.themoviedb.org/3";

axios.defaults.headers.common[" Authorization"] = API_KEY;

export const getMovies = async () => {
  const { data } = await axios.get("/trending/movie/week");
  return data.results;
};

export const getMovieById = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}`);
  return data;
};

export const getCast = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/credits`);
  return data.cast;
};

export const getReviews = async (movieId) => {
  const { data } = await axios.get(`/movie/${movieId}/reviews`);
  return data.results;
};

export const searchMovies = async (query) => {
  const { data } = await axios.get("/search/movie", {
    params: {
      query,
    },
  });
  return data.results;
};
