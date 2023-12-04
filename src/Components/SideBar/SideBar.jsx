import React, { useState, useEffect } from "react";
import "./Sidebar.css";

const Sidebar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const menuItems = [
    { label: "Home", icon: "home", link: "/home" },
    { label: "Connect", icon: "connect", link: "/connect" },
    { label: "Commerce", icon: "commerce", link: "/commerce" },
    {
      label: "Business Directory",
      icon: "directory",
      link: "/business-directory",
    },
    { label: "Chat", icon: "chat", link: "/chat" },
    { label: "Profile", icon: "profile", link: "/profile" },
    { label: "Tickets", icon: "tickets", link: "/tickets" },
    { label: "Live", icon: "live", link: "/live" },
    { label: "Stereo", icon: "stereo", link: "/stereo" },
    { label: "TV", icon: "tv", link: "/tv" },
    { label: "Voting", icon: "voting", link: "/voting" },
    { label: "Education", icon: "education", link: "/education" },
    { label: "Signout", icon: "signout", link: "/signout" },
  ];

  return (
    <div className='sidebar'>
      {menuItems.map((item, index) => (
        <a key={index} href={item.link} className='menu-item'>
          <span className={`icon ${item.icon}`} />
          {item.label}
        </a>
      ))}

      <div className='sidebar-icon' onClick={handleClick}>
        <i className={click ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </div>
  );
};

export default Sidebar;
