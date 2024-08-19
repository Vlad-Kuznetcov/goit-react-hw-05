import { NavLink } from "react-router-dom";
import s from "../Header/Header.module.css";

const Header = () => {
  return (
    <ul className={s.list}>
      <li className={s.item}>
        <NavLink className={s.navLink} to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink className={s.navLink} to="/movies">
          Movies
        </NavLink>
      </li>
    </ul>
  );
};

export default Header;
