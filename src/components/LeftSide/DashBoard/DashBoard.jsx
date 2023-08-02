import React from "react";
import { GoHomeFill } from "react-icons/go";
import { MdGroups2 } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";
import { MdPlayLesson } from "react-icons/md";
import "./DashBoard.css";

const DashBoard = () => {
  return (
    <>
      <div className="container">
        <div className="box">
          <ul>
            <li>
              <div className="icons">
                <GoHomeFill />
              </div>
              <h2>Home</h2>
            </li>
            <li>
              <div className="icon specialCase">
                <MdGroups2 />
              </div>
              <h2>Community</h2>
            </li>
            <li>
              <div className="icons">
                <AiOutlineSearch />
              </div>
              <h2>Search</h2>
            </li>
            <li>
              <div className="icons">
                <MdPlayLesson />
              </div>
              <h2>Courses</h2>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
