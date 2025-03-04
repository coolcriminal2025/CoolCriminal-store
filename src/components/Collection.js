import React from "react";
import "./Collection.css";

export default function Collection() {
  const collections = [
    {
      name: "CoolCriminal2025",
      username: "@opensea",
      profileImg: require("../images/9.png"),
      image1: require("../images/10.png"),
      image2: require("../images/08.png"),
      image3: require("../images/18.png"),
    },
    {
      name: "MetaKing v1.0",
      username: "@opensea",
      profileImg: require("../images/19.png"),
      image1: require("../images/03.png"),
      image2: require("../images/01.png"),
      image3: require("../images/12.png"),
    },
    {
      name: "SeiVerse Destroyer",
      username: "@opensea",
      profileImg: require("../images/05.png"),
      image1: require("../images/14.png"),
      image2: require("../images/18.png"),
      image3: require("../images/13.png"),
    },
    {
      name: "SeiVerse PolDes",
      username: "@opensea",
      profileImg: require("../images/03.png"),
      image1: require("../images/13.png"),
      image2: require("../images/12.png"),
      image3: require("../images/15.png"),
    },
    {
      name: "Seiverse Dino",
      username: "@MagicEden",
      profileImg: require("../images/01.png"),
      image1: require("../images/16.png"),
      image2: require("../images/17.png"),
      image3: require("../images/14.png"),
    },
    {
      name: "PolDes Dino v2.0",
      username: "@MagicEden",
      profileImg: require("../images/10.png"),
      image1: require("../images/10.png"),
      image2: require("../images/02.png"),
      image3: require("../images/06.png"),
    }
  ];

  return (
    <section className="collection">
      <div className="container-fluid">
        <div className="row">
          <h3>
            
            <span>SEI-CHAIN COLLECTIONs</span><br></br>
           <a href="https://opensea.io/collection/coolcriminal2025" target="_blank">Opensea, </a>
           <a href="https://magiceden.io/u/CoolCriminal" target="_blank">MagicEden</a>
          </h3>
        </div>
        <div className="row">
          {collections.map((collection, index) => (
            <div className="col-md-4" key={index}>
              <div className="collection-card">
                <div className="collection-card-header">
                  <img src={collection.profileImg} alt="Profile" />
                  <div className="collection-card-header-info">
                    <h3>{collection.name}</h3>
                    <p>{collection.username}</p>
                  </div>
                </div>
                <div className="collection-card-images">
                  <div className="collection-card-left-image">
                   <img src={collection.image1} alt="Image1" />
                  </div>
                  <div className="collection-card-right-images">
                    <img src={collection.image2} alt="Image2" />
                    <img src={collection.image3} alt="Image3" />
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
