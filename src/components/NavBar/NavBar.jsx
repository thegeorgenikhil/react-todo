import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">Todoist</div>
        <div className="profile-container">
          <div className="profile-img"></div>
          <p className="user-name">Rachel</p>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
