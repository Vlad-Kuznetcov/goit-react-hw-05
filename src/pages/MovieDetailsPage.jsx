import { useEffect, useRef, useState } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { getMovieById } from "../services/api";

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const goBackRef = useRef(location.state);
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const movieData = await getMovieById(movieId);
        setMovie(movieData);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchMovieById();
  }, [movieId]);

  if (!movie) return null;

  return (
    <div>
      <button onClick={() => navigate(goBackRef.current)}>Go back</button>
      <div className="image-container">
        <h2>{movie.title}</h2>

        {movie.backdrop_path && (
          <img
            className="backdrop-img"
            src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
            alt={movie.title}
          />
        )}

        <p>User Score: {movie.vote_average}</p>
        <div>
          <h3>Overview</h3>
          <p>{movie.overview}</p>
        </div>
        <ul>
          <li>
            <NavLink to="cast">Cast</NavLink>
          </li>
          <li>
            <NavLink to="reviews">Reviews</NavLink>
          </li>
        </ul>
        <Outlet />
      </div>
    </div>
  );
};

export default MovieDetailsPage;
