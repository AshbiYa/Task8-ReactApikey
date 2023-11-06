import Navbar from "../Components/Navbar";

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);

    // Validation logic for username, email, password, and confirmPassword fields
    const newErrors = {};

    // Perform validation and set errors in newErrors object

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Proceed with signup logic
      // Redirect to the login page
    }
  };

  return (
    <div>
      <Navbar />
      <h1>Signup</h1>
      <form onSubmit={handleSubmit}>
        {/* Form fields for username, email, password, and confirmPassword */}
        {/* Include error messages for validation */}
        {/* Signup button */}
        <button type="submit">Signup</button>
      </form>
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;
