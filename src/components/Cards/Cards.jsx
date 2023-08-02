import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { BiSolidLike } from "react-icons/bi";
import { BsFillShareFill } from "react-icons/bs";
import "./Cards.css";

const Cards = () => {
  return (
    <>
      <div className="container5">
        <div className="details">
          <li className="suggestedAccountbottom">
            <div className="bind">
              <img
                className="accountImage"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2YlqQXkiLxdoGdlnH5wnz0bAJD7rd9AnbLg&usqp=CAU"
                alt="img"
              />
              <div className="nameColumn">
                <div className="uernameAndDate">
                  <p className="username username1">@nazeedkhan●</p>

                  <p className="dateCss">22 hours ago</p>
                </div>
                <h4 className="realName">Nazeed khan</h4>
              </div>
            </div>
            <div className="follow">
              <div className="plusIcon">
                <AiOutlinePlus />
              </div>
              <h3 className="followText">Follow</h3>
            </div>
          </li>
        </div>
        <div className="posts">
          <p className="posts_details">
            Hello I am Nazeed khan. I am a web developer and DSA problem solver.
            I am skilled in HTML5, CSS3, Javascript, React.js, Node.js,
            express.js, MongoDB, MySQL, C, C++, Data structures & algorithms,
            DBMS, Computer Networking & Operating Systems.
            <br />
            <br />I have Built Many projecs based on HTML5, CSS3 & Vanilla
            Javascript. I am also a finalist in HACKJMI Hackathon 2023.
          </p>
        </div>
        <div className="post_img">
          <img
            className="post_img_2"
            src="https://online.njit.edu/sites/online/files/iStock-507473994.jpg"
            alt="post_img"
          />
        </div>

        <div className="bottom">
          <div className="leftIcons">
            <div className="comments">
              <div className="icons_bottom">
                <FaRegComment />
              </div>
              <p className="leftShift">1</p>
            </div>
            <div className="likes">
              <div className="icons_bottom">
                <BiSolidLike />
              </div>
              <p className="leftShift">7</p>
            </div>
            <div className="share">
              <div className="icons_bottom">
                <BsFillShareFill />
              </div>
            </div>
          </div>
          <div className="rightIcons">
            <div className="likeBy">
              <img
              className="likeBy_image"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2YlqQXkiLxdoGdlnH5wnz0bAJD7rd9AnbLg&usqp=CAU"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
