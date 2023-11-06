import Navbar from "../Components/Navbar";
import "../Components/NavbarStyles.css";
import "../routes/Home.css";
import React from "react";

import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="home-page">
      <Link to="/login">
        <button>Click Here</button>
      </Link>
    </div>
  );
}

export default HomePage;
