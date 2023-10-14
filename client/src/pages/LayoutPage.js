import { Outlet, Link } from "react-router-dom";

const LayoutPage = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Log In</Link>
                </li>
            </ul>
        </div>
      </nav>

      <Outlet />
    </>
  )
};

export default LayoutPage;
