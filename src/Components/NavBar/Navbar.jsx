import React, { useState } from "react";
import "./Navbar.css";
import logo from "../../Assets/logo.png";
import profile from "../../Assets/profile.png";
import navicon from "../../Assets/nav-icon.png";
import search from "../../Assets/search.png";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className='navbar'>
      <div className='logo'>
        <div className='logos'>
          <img src={logo} alt='logo' width={28} />
        </div>
        <div className='company-name'>
          <h1>2geda</h1>
        </div>
      </div>
      <div className='contents'>
        <div className='search'>
          <input
            type='text'
            placeholder='Search Name, Place and Jobs'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <img className='search-icon2' src={search} alt='' />
        </div>
        <div className='profile-picture'>
          <div className='profiles'>
            <div className='navicon'>
              <img src={navicon} alt='navicon' width={20} />
            </div>
            <img src={profile} alt='profile' width={38} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
