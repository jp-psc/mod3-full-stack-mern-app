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
                <a class="navbar-brand"><img src="https://i.etsystatic.com/30613348/r/il/5c3323/3249282655/il_1140xN.3249282655_tb0y.jpg" alt="Logo" width="50" height="45" class="d-inline-block align-text-top" />                 </a>
                
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                  <span style={{ color: 'white', fontSize: '18px' }}>Home</span>
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    <span style={{ color: 'white', fontSize: '18px' }}>About</span>
                  </Link>
                </li>


                <li className="nav-item">
                  <Link className="nav-link" to="/posts">
                    <span style={{ color: 'white', fontSize: '18px' }}>Tasks</span>
                  </Link>
                </li>

                <li onClick={logout}>
                  <Link className="nav-link" to="/login">
                    <span style={{ color: 'white', fontSize: '18px' }}>Logout</span>
                  </Link>
                </li>
                
                <b>
              <li className="nav-link" style={{ color: 'yellow', fontSize: '18px' }}>Welcome {user}!</li>
             </b>
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