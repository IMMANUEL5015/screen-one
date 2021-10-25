import React from "react";
import mobileLogo from "../assets/images/mobile_logo.png";
import desktopLogo from "../assets/images/desktop_logo.png";
import fundsIcon from "../assets/images/funds.png";
import UserAvatar from "../assets/images/user_avatar.png";
import AirimeModal from "./modals/AirtimeModal"

const Header = () => {
  return (
    <header>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <img className="mobile-logo" src={mobileLogo} alt="Logo" />
      </a>
      <div className="user-navbar">
        <AirimeModal />
        <img src={UserAvatar} alt="avatar" />
      </div>
    </header>
  );
};

export default Header;
