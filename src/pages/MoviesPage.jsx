import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import MoviesList from "../components/MoviesList/MoviesList";
import { searchMovies } from "../services/api";

const MoviesPage = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const search = searchParams.get("search");
    if (!search) return;

    const fetchData = async () => {
      try {
        const searchResults = await searchMovies(search);
        if (searchResults.length === 0) {
          alert("No results");
        }
        setMovies(searchResults);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, [searchParams]);

  const handleSubmit = (values, { resetForm }) => {
    const trimmedSearch = values.search.trim();

    if (!trimmedSearch) {
      alert("Enter value");
      return;
    }

    setSearchParams({ search: trimmedSearch });
    resetForm();
  };

  return (
    <div>
      <Formik initialValues={{ search: "" }} onSubmit={handleSubmit}>
        <Form>
          <Field name="search" placeholder="Ender search value..." />
          <button type="submit">Search</button>
        </Form>
      </Formik>
      <MoviesList movies={movies} />
    </div>
  );
};

export default MoviesPage;
