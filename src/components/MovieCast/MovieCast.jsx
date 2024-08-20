import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCast } from "../../services/api";

const MovieCast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchCastById = async () => {
      try {
        const data = await getCast(movieId);
        setCast(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchCastById();
  }, [movieId]);
  return (
    <div>
      <ul>
        {cast
          .filter((item) => item.profile_path)
          .map((item) => (
            <li key={item.id}>
              {item.profile_path && (
                <img
                  src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                  alt=""
                  width="150px"
                />
              )}

              <h4>{item.name}</h4>
              <p>character: {item.character}</p>
            </li>
          ))}
      </ul>
    </div>
  );
};
export default MovieCast;
