import React, { useState } from 'react';
import MetamaskLogo from '../images/metamask.svg';
import BitgoLogo from '../images/bitgo.svg';
import CoinbaseLogo from '../images/coinbase.svg';
import TrustWalletLogo from '../images/trustwallet.svg';
import ExodusLogo from '../images/exodus.svg';
import './Roadmap.css';

export default function Roadmap() {
  const [activeItem, setActiveItem] = useState('NEW NFTS');

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <section className="roadmap">
      <div className="container-fluid">
        <h3 className="roadmap-title">CoolCrimal_Universe'S <span>Collection Phase</span></h3>
        <div className="row">
          <div className="col-md-4">
            <div className="text-column">
              <ul>
                <li
                  className={activeItem === 'NEW NFTS' ? 'active' : ''}
                  onClick={() => handleClick('NEW NFTS')}
                >
                  <span>01</span> NEW NFTS With Different Planets
                </li>
                <li
                  className={activeItem === 'WHITELIST MINTING' ? 'active' : ''}
                  onClick={() => handleClick('WHITELIST MINTING')}
                >
                  <span>02</span> Can Find on Biggest Marketplaces
                </li>
                <li
                  className={activeItem === 'WIRELAND NFT' ? 'active' : ''}
                  onClick={() => handleClick('WIRELAND NFT')}
                >
                  <span>03</span> Art By Expert Artists
                </li>
                <li
                  className={activeItem === 'METAVERSE' ? 'active' : ''}
                  onClick={() => handleClick('METAVERSE')}
                >
                  <span>04</span> Multi-Chain Supprted
                </li>
                <li
                  className={activeItem === 'LAUNCH' ? 'active' : ''}
                  onClick={() => handleClick('LAUNCH')}
                >
                  <span>05</span> LAUNCH Phase 2 at 1th April 2025
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                {activeItem === 'NEW NFTS' && (
                  <>
                    <p className="card-phase">Phase 1</p>
                    <h3 className="card-title">SEI, Polygon and Mantle Chain</h3>
                    <p className="card-text">Phase 1 Collections of CoolCriminal_Universe's Differt Planet's Prisoners Collections with traits.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release on SEI, Polygon chain</li>
                      <li><i className="bi bi-check-circle"></i> Mantle Chain Collection will released on 1st March</li>
                      <li><i className="bi bi-check-circle"></i> Launch the New traits and Differt Planets Backgrounds..
                      </li>
                    </ul>
                  </>
                )}
                {activeItem === 'WHITELIST MINTING' && (
                  <>
                    <p className="card-phase">Phase 3</p>
                    <h3 className="card-title">LAUNCH</h3>
                    <p className="card-text">Our most active community members will be able to join the whitelist so they can discover, collect and sell their NFTs.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release website and logo</li>
                      <li><i className="bi bi-check-circle"></i> Grow community</li>
                      <li><i className="bi bi-check-circle"></i> Launch the project</li>
                    </ul>
                  </>
                )}
                {activeItem === 'WIRELAND NFT' && (
                  <>
                    <p className="card-phase">Phase 5</p>
                    <h3 className="card-title">TARGET</h3>
                    <p className="card-text">Typesetting industry when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release website and logo</li>
                      <li><i className="bi bi-check-circle"></i> Grow community</li>
                      <li><i className="bi bi-check-circle"></i> Launch the project</li>
                    </ul>
                  </>
                )}
                {activeItem === 'METAVERSE' && (
                  <>                    
                    <p className="card-phase">Phase 7</p>
                    <h3 className="card-title">COMMUNITY</h3>
                    <p className="card-text">Quality comes first. We took our time to plan out everything and build our production pipeline for high-quality artworks.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release website and logo</li>
                      <li><i className="bi bi-check-circle"></i> Grow community</li>
                      <li><i className="bi bi-check-circle"></i> Launch the project</li>
                    </ul>                  
                  </>
                )}
                {activeItem === 'LAUNCH' && (
                  <>
                    <p className="card-phase">Phase 9</p>
                    <h3 className="card-title">PROJECT</h3>
                    <p className="card-text">Quality comes first. We took our time to plan out everything and build our production pipeline for high-quality artworks.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release website and logo</li>
                      <li><i className="bi bi-check-circle"></i> Grow community</li>
                      <li><i className="bi bi-check-circle"></i> Launch the project</li>
                    </ul>                  
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card">
              <div className="card-body">
                {activeItem === 'NEW NFTS' && (
                  <>
                    <p className="card-phase">Phase 2</p>
                    <h3 className="card-title">Season 2 Summer</h3>
                    <p className="card-text">The Most Awaiting and With New Traits CoolCrimal_Universe will come at 1st April.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Season 2 With Launch at 1st April</li>
                      <li><i className="bi bi-check-circle"></i> Will be Published on 5 multi chains</li>
                      <li><i className="bi bi-check-circle"></i> Launch the 24 planets</li>
                      <li><i className="bi bi-check-circle"></i> All New Charactes and traits will Launch on 2nd Seasons</li>
                    </ul>
                  </>
                )}
                {activeItem === 'WHITELIST MINTING' && (
                  <>
                    <p className="card-phase">Phase 4</p>
                    <h3 className="card-title">MINTING</h3>
                    <p className="card-text">Per-Sale Minting is opened for our Whitelisted members. The price for whitelist minting will be 0.5 SOL.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release website and logo</li>
                      <li><i className="bi bi-check-circle"></i> Grow community</li>
                      <li><i className="bi bi-check-circle"></i> Launch the project</li>
                    </ul>
                  </>
                )}
                {activeItem === 'WIRELAND NFT' && (
                  <>
                    <p className="card-phase">Phase 6</p>
                    <h3 className="card-title">RESEARCH</h3>
                    <p className="card-text">A complete account of the system, and expound the actual teachings of the great explorer of the truth.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release website and logo</li>
                      <li><i className="bi bi-check-circle"></i> Grow community</li>
                      <li><i className="bi bi-check-circle"></i> Launch the project</li>
                    </ul>
                  </>
                )}
                {activeItem === 'METAVERSE' && (
                  <>                    
                    <p className="card-phase">Phase 8</p>
                    <h3 className="card-title">PRODUCTION</h3>
                    <p className="card-text">Starting the production on the procedurally generated planets and the smart contract for minting.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release website and logo</li>
                      <li><i className="bi bi-check-circle"></i> Grow community</li>
                      <li><i className="bi bi-check-circle"></i> Launch the project</li>
                    </ul>                  
                  </>
                )}
                {activeItem === 'LAUNCH' && (
                  <>
                    <p className="card-phase">Phase 10</p>
                    <h3 className="card-title">SECURITY</h3>
                    <p className="card-text">Starting the production on the procedurally generated planets and the smart contract for minting.</p>
                    <hr />
                    <ul>
                      <li><i className="bi bi-check-circle"></i> Release website and logo</li>
                      <li><i className="bi bi-check-circle"></i> Grow community</li>
                      <li><i className="bi bi-check-circle"></i> Launch the project</li>
                    </ul>                  
                  </>
                )}
              </div>
            </div>
          </div>
          <div className="row sponsors-row">
          <div className="col-12">
            <div className="sponsors">
              <img src={MetamaskLogo} alt="Metamask Logo" className="sponsor-logo" />
              <img src={BitgoLogo} alt="BitGO Logo" className="sponsor-logo" />
              <img src={CoinbaseLogo} alt="Coinbase Logo" className="sponsor-logo" />
              <img src={TrustWalletLogo} alt="Trust Wallet Logo" className="sponsor-logo" />
              <img src={ExodusLogo} alt="Exodus Logo" className="sponsor-logo" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </section>
  );
}
