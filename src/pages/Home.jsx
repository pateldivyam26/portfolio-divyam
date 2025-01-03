import React from "react";
import Section from "../components/Section";
import Img from "../assets/DP.jpeg";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram, FaEnvelope } from "react-icons/fa";

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  );
};

export default function Home() {
  const icons = [
    {
      href: "https://linkedin.com/in/divyam-patel-265303201/",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://github.com/pateldivyam26",
      icon: <FaGithub />,
    },
    {
      href: "https://twitter.com/divyam_patel26",
      icon: <FaTwitter />,
    },
    {
      href: "https://www.instagram.com/divyam_patel26",
      icon: <FaInstagram />,
    },
    {
      href: "mailto:pateldivyam26@gmail.com",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <Section id="about">
      <div className="row justify-content-between">
        <div className="col-md-6" data-aos="fade-up">
          <h1 className="mb-0">
            Divyam
            <span className="text-primary" style={{ paddingLeft: "2vw" }}>
              Patel
            </span>
          </h1>
          <div className="subheading mb-3">
            <span style={{ paddingRight: "0.3vw" }}>
              Embracing new challenges with a can-do attitude!
            </span>
          </div>
          <p className="lead mb-4" >
            {/* I'm a final year student at IIT Jodhpur doing B.Tech in Electrical Engineering. I'm a motivated, hard-working, and work-oriented person who finds joy in new challenges and keeps an eye out for them every day. I have the ability to work well as a team member and exceptional work ethic. */}
            I am a B.Tech graduate in Electrical Engineering from the Indian Institute of Technology Jodhpur. I am a motivated, hard-working, and work-oriented person with a passion for tackling new challenges daily. My strong teamwork skills and exceptional work ethic are complemented by my proficiency in full stack development, blockchain development, data science, and data analytics.
          </p>
          <div className="btn-group mb-5">
            <button
              className="btn btn-primary btn-custom py-2 px-5 CV-Button"
              type="submit"
              onClick={() => window.open("https://drive.google.com/drive/folders/125Y3UzIthiOLpxDxLkc2-m7DOKUOGqlR?usp=sharing")}
            >
              Resume
            </button>
          </div>

          <div className="social-icons">
            {icons.map(({ href, icon }, index) => (
              <SocialIcon href={href} icon={icon} key={index} />
            ))}
          </div>
        </div>
        <div className="col-md-5 mb-5 mb-lg-0" data-aos="fade-up">
          <img
            src={Img}
            alt="Divyam Patel"
            style={{ height: "60vh", width: "50vh", float: "right", borderRadius: "8px"  }}
          />
        </div>
      </div>
    </Section>
  );
}
