import { Link } from "react-router-dom";

function Navbar({ user, setUser }) {

  const logout = () => {
    localStorage.removeItem("token")
    setUser({})
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        {/* <Link className="navbar-brand" to="/">
          Home
        </Link> */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/posts">
                    <span style={{ color: 'white', fontSize: '18px' }}>Tasks</span>
                  </Link>
                </li>
                <b>
                  <li style={{ color: 'red', fontSize: '18px' }}>Welcome {user}!</li>
                </b>

                <li onClick={logout}>
                  <Link className="nav-link" to="/login">
                    <span style={{ color: 'white', fontSize: '18px' }}>Logout</span>
                  </Link>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">
                    <span style={{ color: 'white', fontSize: '18px' }}>Register</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    <span style={{ color: 'white', fontSize: '18px' }}>Login</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/posts">
                    <span style={{ color: 'white', fontSize: '18px' }}>Tasks</span>
                  </Link>
                </li>

              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
