import React from "react";
import "./Login.css";
import LoginImg from "../../../assets/sad.png";
import BorderImg from "../../../assets/border.svg";
import { Link } from "react-router-dom";
import {MdOutlineLogout} from 'react-icons/md'

const Login = () => {
  return (
    <>
      <div className="container">
        <div className="image">
         <div className="boximg">
         <img className="border" src={BorderImg} alt="border" />
          <img className="emoji" src={LoginImg} alt="login" />
         </div>
        </div>
        <div className="write">
          <h2 className="h2_login">You Haven't Logge...</h2>
          <h3>take your username now</h3>
          <p>
            Click the login button and make yourself a part of this wonderful
            community.
          </p>
        </div>
        <Link to="/" style={{textDecoration:"none"}}>
          <button className="login">
            <div className="icons"><MdOutlineLogout/></div>
            <p className="loginText">Login</p>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Login;
