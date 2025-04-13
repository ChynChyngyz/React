import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";
import { toast } from "react-toastify";
import { faCommentDots, faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Navbar.css";

function Navbar() {
  const [dropdownControlPanel, setDropdownControlPanel] = useState(false)
  const [dropdownModeration, setDropdownModeration] = useState(false)
  const [nav, setNav] = useState(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const openNav = () => {
    setNav(!nav);
  };

  const handleChatBtnClick = () => {
    if (!isButtonDisabled) {
      toast.info("Experiencing high traffic, Please wait a moment.", {
        position: 'top-center',
        onOpen: () => setIsButtonDisabled(true),
        onClose: () => setIsButtonDisabled(false),
      });
    }
  };

  return (
    <div className="navbar-section">
      <h1 className="navbar-title">
        <Link to="/">
          Health <span className="navbar-sign">+</span>
        </Link>
      </h1>

      <ul className="navbar-items">
        <li
          className='navbar-links'
          onClick={()=>setDropdownControlPanel(prev => !prev)}
        >
          Control panel
          {dropdownControlPanel && (
              <ul className='dropdown-menu'>
                <li><Link to="#" className='dropdown-menu-text'>Медицинские услуги</Link></li>
                <li><Link to="#" className='dropdown-menu-text'>Специализации</Link></li>
                <li><Link to="#" className='dropdown-menu-text'>Врачи</Link></li>
                <li><Link to="#" className='dropdown-menu-text'>Расписание врачей</Link></li>
                <li><Link to="#" className='dropdown-menu-text'>Запись к врачу</Link></li>
              </ul>
          )}
        </li>
        <li
          className='navbar-links'
          onClick={()=>setDropdownModeration(prev=>!prev)}
        > Moderation
          {dropdownModeration && (
              <ul className='dropdown-menu'>
                <li><Link to="#" className='dropdown-menu-text'>Добавить специализацию</Link></li>
                <li><Link to="#" className='dropdown-menu-text'>Добавить услугу</Link></li>
                <li><Link to="#" className='dropdown-menu-text'>Добавить врачи</Link></li>
                <li><Link to="#" className='dropdown-menu-text'>Добавить расписание</Link></li>
              </ul>
          )}
        </li>
        <li>
          <a href="#reviews" className="navbar-links">
            Profile
          </a>
        </li>
        <li>
          <a href="#doctors" className="navbar-links">
            Log out
          </a>
        </li>
      </ul>

      <button
          className="navbar-btn"
          type="button"
          disabled={isButtonDisabled}
          onClick={handleChatBtnClick}
      >
        <FontAwesomeIcon icon={faCommentDots}/> Live Chat
      </button>

      <div className={`mobile-navbar ${nav ? "open-nav" : ""}`}>
        <div onClick={openNav} className="mobile-navbar-close">
          <FontAwesomeIcon icon={faXmark} className="hamb-icon" />
        </div>

        <ul className="mobile-navbar-links">
          <li>
            <Link onClick={openNav} to="/">
              Home
            </Link>
          </li>
          <li>
            <a onClick={openNav} href="#services">
              Services
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#about">
              About
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#reviews">
              Reviews
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#doctors">
              Doctors
            </a>
          </li>
          <li>
            <a onClick={openNav} href="#contact">
              Contact
            </a>
          </li>
        </ul>
      </div>

      <div className="mobile-nav">
        <FontAwesomeIcon
          icon={faBars}
          onClick={openNav}
          className="hamb-icon"
        />
      </div>
    </div>
  );
}

export default Navbar;
