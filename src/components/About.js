import React from 'react';
import './About.css';
import collectionImage from '../images/collection.png';

export default function About() {
  return (
    <section className="about">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-md-6 about-image">
            <img src={collectionImage} className="img-fluid" alt="Collection" />
          </div>
          <div className="col-md-6 panel-content">
            <h3 className="about-title">About<br />
              <span>CoolCriminal_Universe Collections</span>
            </h3>
            <p className="about-content">The Coolest Criminal Alien Prisoners NFTs Collection of CoolCriminal Universe.</p>
            <p className="about-content">We are on Bigest Marketplaces like Opensea, Rarible, MagicEden and many others. We are also on Opensea pro</p>
            <div className="row justify-content-around">
              <Card title="Secure" value="100%" />
              <Card title="Up value" value="2.5X" />
              <Card title="NFT Owners" value="500+" />
            </div>
          </div>

          <div className="row justify-content-center boxs">
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-layers"></i>
                <h2>250+</h2>
                <p>Collections</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-person-circle"></i>
                <h2>10+</h2>
                <p>Artists</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-person-hearts"></i>
                <h2>2160+</h2>
                <p>Community members</p>
              </div>
            </div>
            <div className="col-md-3">
              <div className="box">
                <i className="bi bi-rocket-takeoff-fill"></i>
                <h2>2.5x</h2>
                <p>Estimated value</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const Card = ({ title, value }) => {
  return (
    <div className="col-md-3 about-card">
      <h2>{value}</h2>
      <p>{title}</p>
    </div>
  );
};


