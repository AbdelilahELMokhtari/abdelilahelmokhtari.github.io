import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import '../assets/styles/Main.scss';
import profileimg from '../assets/images/profileimg.png';
function Main() {

  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileimg} alt="Avatar" />
        </div>
        <div className="content">
          <div className="social_icons">
            <a href="https://github.com/AbdelilahELMokhtari/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="http://www.linkedin.com/in/abdelilahelmokhtari/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
          <h2>ABDELILAH EL MOKHTARI</h2>
          <p>Cloud and Cybersecurity Administrator </p>

          <div className="mobile_social_icons">
            <a href="https://github.com/AbdelilahELMokhtari/" target="_blank" rel="noreferrer"><GitHubIcon/></a>
            <a href="http://www.linkedin.com/in/abdelilahelmokhtari/" target="_blank" rel="noreferrer"><LinkedInIcon/></a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;