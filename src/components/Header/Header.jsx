import React, { useState } from "react";
import "./Header.scss";
import Logo from "../../assets/images/Zomato-Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import blackLogo from "../../assets/images/blackLogo.webp";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="header">
      <nav>
        <span>Get the App</span>
        <div className="right">
          <span>Investor Relations</span>
          <span>Add restaurant</span>
          <span>Log in</span>
          <span>Sign up</span>
        </div>
      </nav>
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? <CloseIcon style={{ color: "black" }} /> : <MenuIcon />}
      </div>
      {open && (
        <div className="sideMenu">
          <img src={blackLogo} alt="logo" />
          <div className="innerMenu">
            <span>Investor Relations</span>
            <span>Add restaurants</span>
            <span>Log In</span>
            <span>Sign Up</span>
          </div>
        </div>
      )}
      <div className="headerContent">
        <img src={Logo} alt="logo" />
        <h3>Discover the best food & drinks in Kerala</h3>
        <div className="input">
          <select name="" id="">
            <option value="Tirur">Tirur</option>
            <option value="Eranamkulam">Eranamkulam</option>
            <option value="Calicut">Calicut</option>
            <option value="Trivandrum">Trivandrum</option>
            <option value="Kottakal">Kottakal</option>
            <option value="Thrissur">Thrissur</option>
          </select>
          |
          <input
            type="text"
            placeholder=" Search For Restaurant , cuisine or a dish"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
