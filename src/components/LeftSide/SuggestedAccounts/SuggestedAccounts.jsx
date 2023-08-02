import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import "./SuggestedAccounts.css";
import {accounts} from "../../../api/SuggestedAccountAPI.js";

const SuggestedAccounts = () => {
  return (
    <>
      <div className="container container1">
        <div className="box2">
          <ul>
            {accounts.map((user, key) => (
              <li key={user.id} className="suggestedAccountbottom">
                <img
                  className="accountImage"
                  src={user.img}
                  alt="img"
                />
                <div className="nameColumn">
                  <p className="username">@{user.username}●</p>
                  <h4 className="realName">{user.name}</h4>
                </div>
                <div className="follow">
                  <div className="plusIcon">
                    <AiOutlinePlus />
                  </div>
                  <h3 className="followText">Follow</h3>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default SuggestedAccounts;
