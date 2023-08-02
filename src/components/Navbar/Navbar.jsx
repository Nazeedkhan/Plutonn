import React from "react";
import logo from "../../assets/logo.png";
import avatar from "../../assets/avatar.png";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/" style={{textDecoration:"none"}}>
          <div className="logoName">
            <img className="logo" src={logo} alt="logo" />
            <div className="name">Plutonn</div>
          </div>
        </Link>
        <div className="head">
          <h1 className="community">Community - Posts</h1>
          <div className="avatar">
            <img src={avatar} alt="avatar" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
