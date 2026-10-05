import React, { useState } from "react";
import axios from "axios";

function RegistrationComponent() {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      const response = await axios.post(
        "http://localhost:8888/api/auth/register",
        formData
      );

      console.log(response.data);

      alert("Registration Successful");

      setFormData({
        username: "",
        email: "",
        password: ""
      });

    } catch (error) {

      console.error(error);

      alert("Registration Failed");
    }
  };

  return (
    <div className="container mt-4">

      <h2>Registration</h2>

      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <input
            type="text"
            name="username"
            placeholder="Enter Username"
            className="form-control"
            value={formData.username}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <input
            type="password"
            name="password"
            placeholder="Enter Password"
            className="form-control"
            value={formData.password}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
        >
          Register
        </button>

      </form>

    </div>
  );
}

export default RegistrationComponent;