import React from "react";
import "./Footer.css";

// Social link component
const SocialLink = ({ href, iconClass }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      <i className={iconClass}></i>
    </a>
  </li>
);

// Footer link component
const FooterLink = ({ href, text }) => (
  <li>
    <a href={href} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  </li>
);

// Array of social links
const socialLinks = [
  { href: "https://x.com/Blockchain55355", iconClass: "bi bi-twitter" },
  { href: "https://discord.gg/Py4PnaMu", iconClass: "bi bi-discord" },
  { href: "mailto:contact@coolcriminals-universe.store", iconClass: "bi bi-envelope" },
  { href: "https://facebook.com", iconClass: "bi bi-facebook" },
  { href: "https://youtube.com", iconClass: "bi bi-youtube" },
];

// Array of footer links
const footerLinks = [
  { href: "https://opensea.io/collection/coolcriminal2025", text: "Opensea" },
  { href: "https://magiceden.io/u/CoolCriminal", text: "MagicEden" },
  { href: "/", text: "Element" },
  { href: "/", text: "Rarible" },
  { href: "https://github.com/blockchainwork2025", text: "Github" },
];

export default function Footer() {
  return (
    <section className="Footer">
      <div className="container">
        <div className="row">
          <div className="join-us">
            <h1>
              JOIN US VIA
              <br />
              <span>DISCORD</span>
            </h1>
            <p className="subtitle">Invest and manage all your NFTs at one place.</p>
            <div className="cta">
              <a href="https://discord.gg/Py4PnaMu" target="_blank" rel="noopener noreferrer">
                Join Discord
              </a>
            </div>
          </div>

          <ul className="social-links">
            {socialLinks.map((link, index) => (
              <SocialLink key={index} href={link.href} iconClass={link.iconClass} />
            ))}
          </ul>

          <ul className="footer-links">
            {footerLinks.map((link, index) => (
              <FooterLink key={index} href={link.href} text={link.text} />
            ))}
          </ul>

          <p className="copy">© 2025 CoolCriminal_Universe with 💜 by 
            <a href="https://anai.services" target="_blank" rel="noopener noreferrer">@AnAi-Blockchain service</a></p>
        </div>
      </div>
    </section>
  );
}
