import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../auth/AuthContext";

const LoginComponent = () => {

  const navigate = useNavigate();

  const { login } = useAuth(); // IMPORTANT

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const loginUser = async (e) => {

    e.preventDefault();

    setError("");

    try {

      const response = await axios.post(
        "http://localhost:8888/api/auth/login",
        {
          username,
          password
        }
      );

      if (response.data.success) {

        // Store user in AuthContext
        login({
          username: username
        });

        alert("Login Successful");

        navigate("/employees");

      } else {

        setError("Invalid Username or Password");
      }

    } catch (err) {

      console.error(err);

      setError("Unable to connect to server");
    }
  };

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-4">

          <div className="card shadow">

            <div className="card-body">

              <h3 className="text-center mb-4">
                Login
              </h3>

              {error && (
                <div className="alert alert-danger">
                  {error}
                </div>
              )}

              <form onSubmit={loginUser}>

                <div className="mb-3">

                  <label className="form-label">
                    Username
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={username}
                    onChange={(e) =>
                      setUsername(e.target.value)
                    }
                    required
                  />

                </div>

                <div className="mb-3">

                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={(e) =>
                      setPassword(e.target.value)
                    }
                    required
                  />

                </div>

                <button
                  type="submit"
                  className="btn btn-success w-100"
                >
                  Login
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
};
export default LoginComponent;