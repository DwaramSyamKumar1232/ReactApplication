import { Link } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

function HeaderComponent() {

  const { isAuthenticated, logout } = useAuth();

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">

        <Link className="navbar-brand" to="/">
          Employee Management System
        </Link>

        <div className="navbar-nav ms-auto">

          {!isAuthenticated && (
            <>
              <Link className="nav-link" to="/">
                Home
              </Link>

              <Link className="nav-link" to="/register">
                Register
              </Link>

              <Link className="nav-link" to="/login">
                Login
              </Link>
            </>
          )}

          {isAuthenticated && (
            <>
              <Link className="nav-link" to="/employees">
                Employees
              </Link>

              <Link className="nav-link" to="/add-employee">
                Add Employee
              </Link>

              <Link className="nav-link" to="/fund-transfer">
                Fund Transfer
              </Link>

              <button
                className="btn btn-danger ms-3"
                onClick={logout}
              >
                Logout
              </button>
            </>
          )}

        </div>

      </div>
    </nav>
  );
}

export default HeaderComponent;