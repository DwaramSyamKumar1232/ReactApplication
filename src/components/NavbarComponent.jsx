import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

function NavbarComponent() {

  const navigate = useNavigate();

  const {
    isAuthenticated,
    logout
  } = useAuth();

  const handleLogout = () => {

    logout();

    navigate("/");
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">

      <div className="container-fluid">

        <Link
          className="navbar-brand"
          to="/employees"
        >
          Employee Management System
        </Link>

        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/employees"
            >
              Employees
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/add-employee"
            >
              Add Employee
            </Link>
          </li>

          <li className="nav-item">
            <Link
              className="nav-link"
              to="/fund-transfer"
            >
              Fund Transfer
            </Link>
          </li>

          <li className="nav-item">
            <button
              className="btn btn-danger ms-3"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>

        </ul>

      </div>

    </nav>
  );
}

export default NavbarComponent;