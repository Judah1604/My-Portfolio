import React from "react";

const HeroSection = () => {
    return (
        <div className="hero-section">
            <div className="text">
                <h1 className="red">Judah Oyedele.</h1>
                <p>
                    A <span className="red">frontend web developer</span> based
                    in Nigeria.
                    <br /> I make <span className="red">responsive</span>,
                    user-friendly and <span className="red">interactive</span>{" "}
                    websites.
                </p>
                <a
                    className="btn red-btn"
                    href="../../Judah-Oyedele.pdf"
                    download="Judah Oyedele's Resume"
                >
                    <i class="fa-solid fa-download"></i>
                    My Resume
                </a>
            </div>
        </div>
    );
};

export default HeroSection;
