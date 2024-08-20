import { useEffect, useState } from "react";
import MoviesList from "../components/MoviesList/MoviesList";
import { getMovies } from "../services/api";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getMovies();
        setMovies(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <MoviesList movies={movies} />
    </div>
  );
};

export default HomePage;
