import React from "react";
import mobileLogo from "../assets/images/mobile_logo.png";
import desktopLogo from "../assets/images/desktop_logo.png";
import fundsIcon from "../assets/images/funds.png";
import UserAvatar from "../assets/images/user_avatar.png";

const Header = () => {
  return (
    <header>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img className="mobile-logo" src={mobileLogo} alt="Logo" />
        <img className="desktop-logo" src={desktopLogo} alt="Logo" />
      </a>
      <div className="user-navbar">
        <img src={fundsIcon} alt="user" />
        <img src={UserAvatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
