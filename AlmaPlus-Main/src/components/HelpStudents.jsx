import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { WEB_URL } from "../baseURL";

const HelpStudents = () => {
  const [user, setUser] = useState({});
  const [aids, setAids] = useState([]);
  const userid = localStorage.getItem("AlmaPlus_Id");
  const nav = useNavigate();

  const getUser = () => {
    axios({
      method: "get",
      url: `${WEB_URL}/api/searchUserById/${userid}`,
    })
      .then((Response) => {
        setUser(Response.data.data[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getAids = () => {
    axios({
      url: `${WEB_URL}/api/getFinancialAid`,
      method: "get",
    })
      .then((Response) => {
        setAids(Response.data.data);
        console.log(Response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const calWidth = (aid, claimed) => {
    const ans = (Number(claimed) / Number(aid)) * 100;
    if (ans > 100) {
      return "100%";
    } else {
      return `${ans.toFixed(2)}%`;
    }
  };

  const formatDate = (dateTimeString) => {
    const date = new Date(dateTimeString);
    const options = {
      weekday: "short",
      year: "numeric",
      month: "long",
      day: "numeric",
    };

    return date.toLocaleDateString("en-US", options);
  };

  const Logout = () => {
    localStorage.clear();
    nav("/");
  };

  useEffect(() => {
    getUser();
    getAids();
  }, []);

  return (
    <div class="home-container">
      <div className="profile-card-main">
        <div className="profile-card">
          <div className="profile-card-imgbox">
            {user.profilepic !== "" ? (
              <img
                src={`${WEB_URL}${user.profilepic}`}
                alt=""
                className="profile-card-img"
              />
            ) : (
              <img src="images/profile1.png" className="profile-card-img"></img>
            )}
          </div>

          <div className="profile-card-info">
            <span className="profile-card-name">
              {user.fname} {user.lname}
            </span>
          </div>
          <div
            className="profile-card-button"
            onClick={() => {
              nav("/view-profile");
              window.scrollTo(0, 0);
            }}
          >
            <button>View Profile</button>
          </div>
        </div>

        <div className="menu-container">
          <div
            className="menu"
            onClick={() => {
              nav("/events");
            }}
          >
            <i className="fa-solid fa-calendar"></i>Events
          </div>
          <div
            className="menu"
            onClick={() => {
              nav("/help-students");
            }}
          >
            <i class="fa-solid fa-handshake-angle"></i>Help Students
          </div>
          <div
            className="menu"
            onClick={() => {
              nav("/feedback");
            }}
          >
            <i className="fa-solid fa-star"></i>FeedBack & Rating
          </div>
          <hr className="hr-line" />
          <div className="menu" onClick={Logout}>
            <i className="fa-solid fa-right-from-bracket"></i>Logout
          </div>
        </div>
      </div>
      <div className="aid-main">
        {aids.map((elem) => (
          <div className="aid-div">
            {elem.image !== "" ? (
              <img src={`${WEB_URL}${elem.image}`} className="aid-img" />
            ) : (
              <img src="images/profile1.png" className="aid-img" />
            )}
            <div className="aid-info">
              <div className="aid-info-div">
                <div className="name">{elem.name && elem.name}</div>
                <div><span><b>Claimed : </b>{elem.claimed}</span>({calWidth(elem.aid, elem.claimed)})</div>
              </div>
              <div className="aid-info-div">
                <span className="aid-info-desc"><b>Description : </b>{elem.description}</span><span><b>Due Date : </b>{formatDate(elem.dueDate)}</span>
              </div>
              <div className="progress-bar">
                <div
                  className="fill-progress-bar"
                  style={{ width: calWidth(elem.aid, elem.claimed) }}
                ></div>
              </div>
              <div className="amount">
                <span>₹0</span>
                <span>₹{elem.aid}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HelpStudents;
