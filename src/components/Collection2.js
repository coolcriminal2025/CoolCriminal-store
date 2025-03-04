import React from "react";
import "./Collection2.css";

export default function Collection2() {
  const Collection2s = [
    {
      name: "CRED-1 Planet",
      username: "@CoolCriminal",
      profileImg: require("../images/ava03.png"),
      image1: require("../images/ava01.png"),
      image2: require("../images/ava02.png"),
      image3: require("../images/ava04.png"),
    },
    {
        name: "CRED-2 Planet",
        username: "@CoolCriminal",
        profileImg: require("../images/ava05.png"),
        image1: require("../images/ava06.png"),
        image2: require("../images/ava07.png"),
        image3: require("../images/ava08.png"),
      },
      {
        name: "CRED-3 Planet",
        username: "@CoolCriminal",
        profileImg: require("../images/ava11.png"),
        image1: require("../images/ava09.png"),
        image2: require("../images/ava10.png"),
        image3: require("../images/ava12.png"),
      }
  ];

  return (
    <section className="Collection2">
      <div className="container-fluid">
        <div className="row">
          <h2>
            
            <span>AVALANCHE C-CHAIN</span><br></br>
            <a href="https://opensea.io/coolcriminal_ava" target="_blank">Opensea</a> 
          </h2>
        </div>
        <div className="row">
          {Collection2s.map((Collection2, index) => (
            <div className="col-md-4" key={index}>
              <div className="Collection2-card">
                <div className="Collection2-card-header">
                  <img src={Collection2.profileImg} alt="Profile" />
                  <div className="Collection2-card-header-info">
                   
                    <h3>{Collection2.name}</h3>
                    <p>{Collection2.username}</p>
                  </div>
                </div>
                <div className="Collection2-card-images">
                  <div className="Collection2-card-left-image">
                   <img src={Collection2.image1} alt="Image1" />
                  </div>
                  <div className="Collection2-card-right-images">
                    <img src={Collection2.image2} alt="Image2" />
                    <img src={Collection2.image3} alt="Image3" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
