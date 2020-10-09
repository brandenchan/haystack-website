import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import LocalizedLink from "../../components/localizedLink/localizedLink";  

import "./header.scss";
import Logo from "../../images/HaystackLogo.png"
import { useMobileScreen } from "../../hooks";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import Button from "../landing-page/button";

const Header = ({ siteTitle, menuLinks }) => {

  const screenWidth = useMobileScreen();
  const [mobileNav, setMobileNav] = useState(null);

  useEffect(() => {
    window.addEventListener("click", () => {
      setMobileNav(false);
    });
  }, []);

  const handleClick = (e) => {
    e.stopPropagation();
    setMobileNav((v) => !v);
  };

  return (
    <>
      <div className="full-header-wrapper">
      
        <header className="header-wrapper">
          <div className="logo-wrapper">
            <LocalizedLink locale="en" to={"/"}>
              <img src={Logo} alt="Haystack Logo">
              </img> 
            </LocalizedLink>
          </div>
          {screenWidth > 1000 ? (
            <div className="right">
              <LocalizedLink
                locale="en"
                to="/"
                className="link"
              >
                Overview
              </LocalizedLink>
            
              <LocalizedLink
                locale="en"
                to="/#main-use-cases"
                className="link"
              >
                Use Cases
              </LocalizedLink>

              <LocalizedLink
                to="/pricing/pricing"
                className="link"
                locale="en"
              >
                Pricing
              </LocalizedLink>

              <LocalizedLink
                to="/en/docs/intromd"
                className="link"
                locale="en"
              >
                Docs
              </LocalizedLink>

              <LocalizedLink
                locale="en"
                className="link"
                to="/bm/benchmarks"
              >
                Benchmarks
              </LocalizedLink>
              
              <Button label="Login" to="http://haystackhub-service.s3-website.eu-central-1.amazonaws.com/login" />
              <Button label="Free Trial" to="http://haystackhub-service.s3-website.eu-central-1.amazonaws.com/signup/step-1"/>
            </div>
          ) : ( 
             <FontAwesomeIcon class="fontawsome-icon" icon={faBars} onKeyDown={handleClick}
             onClick={handleClick}/>
          )}
        </header>
        <div className={`mobile-nav ${mobileNav && "open"}`}>
        <LocalizedLink
          locale="en"
          to="/en/docs/intromd"
          className="link"
          >
          Overview
        </LocalizedLink>

        <LocalizedLink
          locale="en"
          className="link"
          to="/en/docs/get_startedmd"
          >
          Quick Start
        </LocalizedLink>
              
        <LocalizedLink
          locale="en"
          className="link"
          to="/en/docs/intromd"
          >
          Docs
        </LocalizedLink>
      </div>
      </div>
    </>
  );

};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
