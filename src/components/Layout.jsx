import { Outlet } from "react-router-dom";
import Header from "./Header/Header";

const Layout = () => {
  return (
    <div>
      <Header />
      <section>
        <Outlet />
      </section>
    </div>
  );
};

export default Layout;
