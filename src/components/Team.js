import React, { useRef } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Team.css";

const teamMembers = [
  [
    {
      name: "Shi",
      jobTitle: "UI/UX designer",
      image: require("../images/04.jpg"),
    },
    {
      name: "Mr AB",
      jobTitle: "Chairmain & Blockchain Engineer",
      image: require("../images/08.jpg"),
    },
  ],
  [
    {
      name: "Dr Av",
      jobTitle: "Artist",
      image: require("../images/09.jpg"),
    },
    {
      name: "Mr Lui",
      jobTitle: "Artist",
      image: require("../images/03.jpg"),
    },
  ],
  [
    {
      name: "Mr Ahamad",
      jobTitle: "Artist, Lead Enigneer & CEO",
      image: require("../images/01.jpg"),
    },
    {
      name: "Jasse Davy",
      jobTitle: "Artist",
      image: require("../images/10.jpg"),
    },
  ],
];

export default function Team() {
  const carouselRef = useRef();

  return (
    <section className="team">
      <div className="container-fluid">
        <h1>
          MEET <span>OUR TEAM</span>
        </h1>
        <div className="row">
          <div className="team-descreption col-2">
            <p>Introducing Our Talented Crew</p>
          </div>
          <div className="carousel-container col-10">
            <Carousel
              ref={carouselRef}
              showThumbs={false}
              showStatus={false}
              showIndicators={false}
              infiniteLoop={false}
              swipeable={true}
              emulateTouch={true}
              renderArrowPrev={(onClickHandler, hasPrev, label) =>
                hasPrev && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    className={`carousel-button carousel-button-prev ${
                      carouselRef.current?.state?.selectedItem === 0 ? "disabled" : ""
                    }`}
                    disabled={carouselRef.current?.state?.selectedItem === 0}
                  >
                    &lsaquo;
                  </button>
                )
              }
              renderArrowNext={(onClickHandler, hasNext, label) =>
                hasNext && (
                  <button
                    type="button"
                    onClick={onClickHandler}
                    className={`carousel-button carousel-button-next ${
                      carouselRef.current?.state?.selectedItem === teamMembers.length - 1
                        ? "disabled"
                        : ""
                    }`}
                    disabled={carouselRef.current?.state?.selectedItem === teamMembers.length - 1}
                  >
                    &rsaquo;
                  </button>
                )
              }
            >
              {teamMembers.map((teamPair, index) => (
                <div className="carousel-slide" key={index}>
                  {teamPair.map((member, innerIndex) => (
                    <div className="team-member" key={innerIndex}>
                      <div className="team-member-image">
                        <img src={member.image} alt="Team Member" />
                      </div>
                      <div className="team-member-details">
                        <p>{member.jobTitle}</p>
                        <h3>
                          {member.name.split(" ").map((namePart, i) => (
                            <React.Fragment key={i}>
                              {namePart}
                              <br />
                            </React.Fragment>
                          ))}
                        </h3>
                        <div className="social-links">
                          <a href="https://twitter.com/anai_service" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-twitter"></i>
                          </a>
                          <a href="mailto:contact@coolcriminals-universe.store" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-envelope"></i>
                          </a>
                          <a href="https://discord.gg/Py4PnaMu" target="_blank" rel="noopener noreferrer">
                            <i className="bi bi-discord"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
