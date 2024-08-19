import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div>
      <h1>Not found page :c</h1>
      <h2>
        <Link to="/"> Go Home</Link>
      </h2>
    </div>
  );
};

export default NotFoundPage;
