import React from "react";
import "./MiddleSide.css";
import Cards from "../Cards/Cards";
import { Link } from "react-router-dom";
import { AiOutlinePlus } from "react-icons/ai";

const MiddleSide = () => {
  return (
    <>
      <div className="container2">
        <div className="groupDetails groupDetails1">
        <div className="communities_list">
            <div className="bindUs" id="bindUs">
              <img className="communities_image" id="communities_image1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2YlqQXkiLxdoGdlnH5wnz0bAJD7rd9AnbLg&usqp=CAU" alt="img" />
              <div className="community_name">
                <h3 className="community_heading" id="community_heading1">DSA Solver</h3>
                <p className="community_folowers">100 Followers</p>
              </div>
            </div>

            <div className="join" id='join'>
              <div className="plus_icons">
                <AiOutlinePlus />
              </div>
              <div className="joinsUs">Join</div>
            </div>
          </div>
        </div>
        <div className="home_top">
          <ul className="home_top_ul">
            <Link style={{textDecoration:"none"}} to="/">
              <li className="home_top_li">Posts</li>
            </Link>
            <Link style={{textDecoration:"none"}} to="/">
              <li className="home_top_li li2">Oppurtunities</li>
            </Link>
          </ul>
        </div>
        <button className="join_coummnity_button">Join DSA Community</button>
        <div className="infiniteScroll">
          <Cards />
        </div>
      </div>
    </>
  );
};

export default MiddleSide;
