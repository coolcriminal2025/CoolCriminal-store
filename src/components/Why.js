import React from "react";
import './Why.css'

export default function Why() {
  return(
    <section className="why">
      <div className="container-fluid">
        <div className="content">
          <h2>WHY <span>CHOOSE CoolCriminal Collection?</span></h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                      <i className="bi bi-wallet2"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">CONNECT YOUR WALLET</h5>
                      <p className="card-text">Use Trust Wallet, Metamask or to connect to the app.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                    <i className="bi bi-check2-square"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">SELECT YOUR QUANTITY</h5>
                      <p className="card-text">Upload your NFTs and set a title, description and price.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                    <i className="bi bi-lightning"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">CONFIRM TRANSACTION</h5>
                      <p className="card-text">Earn Royalities for all your NFTs that you sell.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="row justify-content-center">
                <div className="col-md-12">
                <img className="img-fluid center-img" src={require('../images/land-cta.png')} alt="center-img"/>          
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                    <i className="bi bi-brush"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">RECEIVE YOUR OWN NFTS</h5>
                      <p className="card-text">Invest and manage all your NFTs at one place on one platform.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                    <i className="bi bi-coin"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">WHERE To FIND US</h5>
                      <p className="card-text">We are on Every Big Marketplaces to Discover, collect the right NFT collections to buy or sell.</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card mb-3">
                <div className="row g-0">
                  <div className="col-md-4">
                    <div className="card-icon">
                    <i className="bi bi-boxes"></i>
                    </div>
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">Multi-Chain Supported</h5>
                      <p className="card-text">We make it easy, We are on Almost 20 Blockchain Network</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}