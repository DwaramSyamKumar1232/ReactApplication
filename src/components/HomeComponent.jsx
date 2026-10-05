import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';

const HomeComponent = () => {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <Navigate to="/fund-transfer" replace />;
  }

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-md-8">
          <div className="card shadow border-0">
            <div className="card-body text-center p-5">
              <h1 className="mb-3">Employee Management System</h1>

              <p className="text-muted mb-4">
                Register a new account or login to access the fund-transfer
                service.
              </p>

              <div className="d-flex justify-content-center gap-3">
                <Link to="/register" className="btn btn-primary btn-lg">
                  Register
                </Link>

                <Link to="/login" className="btn btn-success btn-lg">
                  Login
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeComponent;