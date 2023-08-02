import React from "react";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import { communitiesAPI } from "../../api/CommunitiesAPI.js";
import "./RightSide.css";

const RightSide = () => {
  return (
    <>
      <div className="container10">
        <div className="search">
          <input type="text" placeholder="Search" className="searchInput" />
          <div className="searchicon">
            <AiOutlineSearch />
          </div>
        </div>

        <div className="heading_popular">Popular Communities</div>

        {communitiesAPI.map((item, key) => (
          <div key={item.id} className="communities_list">
            <div className="bindUs">
              <img className="communities_image" src={item.img} alt="img" />
              <div className="community_name">
                <h3 className="community_heading">{item.name}</h3>
                <p className="community_folowers">{item.follower} Followers</p>
              </div>
            </div>

            <div className="join">
              <div className="plus_icons">
                <AiOutlinePlus />
              </div>
              <div className="joinsUs">Join</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default RightSide;
