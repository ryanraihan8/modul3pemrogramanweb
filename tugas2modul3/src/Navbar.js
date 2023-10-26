import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        Navbar
      </Link>
      <ul>
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Menu">Menu</CustomLink>
        <CustomLink to="/Contact">Contact</CustomLink>
      </ul>
    </nav>
  );
}

function CustomLink({ to, children, ...props }) {
  return (
    <li>
      <NavLink to={to} {...props} activeClassName="active">
        {children}
      </NavLink>
    </li>
  );
}
