import { NavLink } from "react-router-dom";

function Navbar() {
  const linkStyle = ({ isActive }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <nav className="navbar">
      <h2>🍴 Recipe Finder</h2>

      <div className="nav-links">
        <NavLink to="/" className={linkStyle}>
          Home
        </NavLink>

        <NavLink to="/recipes" className={linkStyle}>
          Recipes
        </NavLink>

        <NavLink to="/favourites" className={linkStyle}>
          ❤️ Favourites
        </NavLink>
      </div>
    </nav>
  );
}

export default Navbar;