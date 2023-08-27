import React, { useState } from "react";
import hero4 from "../assets/hero/hero4.png"; // Import the CSS file for styling
import logo05 from "../assets/logo/logo05.png";
import hero3 from "../assets/hero/hero3.png";
import hero5 from "../assets/hero/hero5.png";
import hero6 from "../assets/hero/hero6.png";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import 'animate.css/animate.min.css';

import "../screen/Home.css";
import "./Navbar.css";

const handleLogo05Click = () => {
  window.location.reload(); // Refresh the page
};

const NavBarWithImage = () => {
  const [dropdownOpen, setDropdownOpen] = useState();

  const handleDropdownClick = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <Carousel
        autoPlay
        infiniteLoop
        showArrows={false}
        showStatus={false}
        showThumbs={false}
        interval={1200} // Set the interval between slides
      >
        <div className="image-container" style={{ position: "relative" }}>
          <img src={hero4} alt="Background Image" />
          <div className="centered-content text-white">
            <h2 className="animate__animated animate__heartBeat" style={{fontSize: '42px'}}>Find Over 25000+ Colleges in India</h2>

            <form className="example">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit" style={{marginTop: '11px'}}>
                <i className="fa fa-search"></i>
              </button>
            </form>

            <div className="buttons-container">
              <button className="ciit-counseling-button">
                Need Counselling
              </button>
            </div>
          </div>
        </div>

        <div className="image-container" style={{ position: "relative" }}>
          <img src={hero3} alt="Background Image" />
          <div className="centered-content text-white">
            <h2 className="animate__animated animate__heartBeat" style={{fontSize: '42px'}}>Find Over 25000+ Colleges in India</h2>

            <form className="example">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit" style={{marginTop: '11px'}}>
                <i className="fa fa-search"></i>
              </button>
            </form>

            <div className="buttons-container">
              <button className="ciit-counseling-button">
                Need Counselling
              </button>
            </div>
          </div>
        </div>

        <div className="image-container" style={{ position: "relative" }}>
          <img src={hero5} alt="Background Image" />
          <div className="centered-content text-white">
            <h2 className="animate__animated animate__heartBeat" style={{fontSize: '42px'}}>Find Over 25000+ Colleges in India</h2>

            <form className="example">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit" style={{marginTop: '11px'}}>
                <i className="fa fa-search"></i>
              </button>
            </form>

            <div className="buttons-container">
              <button className="ciit-counseling-button">
                Need Counselling
              </button>
            </div>
          </div>
        </div>

        <div className="image-container" style={{ position: "relative" }}>
          <img src={hero6} alt="Background Image" />
          <div className="centered-content text-white">
            <h2 className="animate__animated animate__heartBeat" style={{fontSize: '42px'}}>Find Over 25000+ Colleges in India</h2>

            <form className="example">
              <input type="text" placeholder="Search.." name="search" />
              <button type="submit" style={{marginTop: '11px'}}>
                <i className="fa fa-search"></i>
              </button>
            </form>

            <div className="buttons-container">
              <button className="ciit-counseling-button">
                Need Counselling
              </button>
            </div>
          </div>
        </div>
      </Carousel>
      <div
        className="subnavbar justify-content-end"
        style={{ backgroundColor: "transparent", marginTop: '55px' }}
      >
        <ul>
          <div className="dropdown">
            <button className="dropbtn">
              B.Tech
              <i className="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>

          <li>
            <div className="dropdown">
              <button onClick={dropdownOpen} className="dropbtn">
                MBA
                <i className="fa fa-caret-down"></i>
              </button>
              <div id="myDropdown" className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button onClick={dropdownOpen} className="dropbtn">
                MBBS
                <i className="fa fa-caret-down"></i>
              </button>
              <div id="myDropdown" className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button onClick={dropdownOpen} className="dropbtn">
                Design
                <i className="fa fa-caret-down"></i>
              </button>
              <div id="myDropdown" className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button onClick={dropdownOpen} className="dropbtn">
                Law
                <i className="fa fa-caret-down"></i>
              </button>
              <div id="myDropdown" className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button onClick={dropdownOpen} className="dropbtn">
                Science
                <i className="fa fa-caret-down"></i>
              </button>
              <div id="myDropdown" className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button onClick={dropdownOpen} className="dropbtn">
                Study Abroad
                <i className="fa fa-caret-down"></i>
              </button>
              <div id="myDropdown" className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          <li>
            <div className="dropdown">
              <button onClick={dropdownOpen} className="dropbtn">
                All Courses
                <i className="fa fa-caret-down"></i>
              </button>
              <div id="myDropdown" className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
              </div>
            </div>
          </li>
          {/* Add more subnav items as needed */}
        </ul>
      </div>

      <div className="navbar" style={{marginTop: '-10px', marginLeft: '-31px'}}>
        <ul>
          {/*Logo*/}
          <li>
            <div className="logo-container">
              <a href="/home" onClick={handleLogo05Click}>
                <img src={logo05} alt="Logo" className="logo-image" />
              </a>
            </div>
          </li>
          {/*List Items*/}
          <li>
            <a href="/topcollege">Top Colleges</a>
          </li>
          <li>
            <a href="/topcourse">Top Courses</a>
          </li>
          <li>
            <a href="/exams">Exams</a>
          </li>
          <li>
            <a href="/studyabroad">Study Abroad</a>
          </li>
          <li>
            <a href="/news">News</a>
          </li>
          <li>
            <a href="/addmission">Addmission</a>
          </li>
          <div class="dropdown">
            <button class="dropbtn">
              More
              <i class="fa fa-caret-down"></i>
            </button>
            <div className="dropdown-content">
              <a href="/more">Link 1</a>
              <a href="/more">Link 2</a>
              <a href="/more">Link 3</a>
            </div>
          </div>
          <li>
            <a href="/registration">👤Login</a>
          </li>
          <li>
            <a href="/appdownload">📱Downloads</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBarWithImage;
