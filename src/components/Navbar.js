import { useContext } from "react";
import { useLocation } from "react-router-dom";
import { Context } from "../context";

function Navbar({ shade, links }) {
  const { search } = useContext(Context);
  const history = useLocation();

  const handleOnSubmit = (e) => {
    e.preventDefaut();
    search(null);
  };
  return (
    <nav
      className={`navbar fixed-top navbar-expand-lg navbar-dark navbar-${shade}`}
    >
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          🏠
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {links.map(({ link, path }) => {
              const activeclass =
                history.pathname === `/${path}` ? "active" : "";
                const sass_color = link === "Sassy buttons" ? 'text-sass_color' : ""
              return (
                <li key={link} className="nav-item">
                  <a
                    className={`nav-link ${activeclass} ${sass_color}`}
                    aria-current="page"
                    href={path}
                    target={`${link === "Sassy buttons" ? "_blank" : ""}`}
                  >
                    {link}
                  </a>
                </li>
              );
            })}
          </ul>
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={search}
              onSubmit={handleOnSubmit}
            />
            <button className="btn button-outline-cloud" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
