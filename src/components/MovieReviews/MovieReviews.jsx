import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getReviews } from "../../services/api";

const MovieReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviewsById = async () => {
      try {
        const data = await getReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchReviewsById();
  }, [movieId]);

  return (
    <div>
      {reviews.length === 0 ? (
        <p>We don`t have any reviews for this movie.</p>
      ) : (
        <ul>
          {reviews.map((item) => (
            <li key={item.id}>
              <h3>AUTHOR: {item.author}</h3>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MovieReviews;
