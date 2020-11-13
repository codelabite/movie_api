import React from "react";
import logo from "../../img/hulu-white.png";
import logo1 from "../../img/bdcl.png";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import VideoLibraryIcon from "@material-ui/icons/VideoLibrary";
import HomeIcon from "@material-ui/icons/Home";
import LiveTvIcon from "@material-ui/icons/LiveTv";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import "./style.css";

function Header() {
  return (
    <div className="header">
      <div className="header__icons">
        <div className="header__icon  header__icon--active">
          <HomeIcon />
          <p>Home</p>
        </div>

        <div className="header__icon">
          <FlashOnIcon />
          <p>Trending</p>
        </div>

        <div className="header__icon">
          <LiveTvIcon />
          <p>Verified</p>
        </div>

        <div className="header__icon">
          <VideoLibraryIcon />
          <p>Collection</p>
        </div>

        <div className="header__icon">
          <SearchIcon />
          <p>Search</p>
        </div>

        <div className="header__icon">
          <PersonOutlineIcon />
          <p>Account</p>
        </div>
      </div>
      <img className="header_logo" src={logo1} alt="logo" />
    </div>
  );
}

export default Header;
