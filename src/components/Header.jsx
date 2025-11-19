import { Link, NavLink } from "react-router-dom";

export default function Header() {
    return (
        <nav
            className="navbar navbar-expand-lg navbar-light bg-light border-bottom border-dark py-3"
        >
            <div className="container">
                <Link className="navbar-brand" to={"/"}>MangaShow</Link>
                <button
                    className="navbar-toggler d-lg-none"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavId">
                    <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                            <NavLink className="nav-link active" to={"/"} aria-current="page"
                            >Mangas</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to={"/authors"} aria-current="page"
                            >Authors</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link active" to={"/genres"} aria-current="page"
                            >Genres</NavLink>
                        </li>


                    </ul>

                </div>
            </div>
        </nav>
    )
}