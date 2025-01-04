import React, { useState, useEffect } from 'react';
import { BiColorFill } from 'react-icons/bi';
import ColorPickerPopup from './ColorPickerPopup';
import { useLocalStorage } from '../hooks/useLocalStorage';

const Header = ({ Data, i18, OnLanguageChange }) => {
  const [colorPickerVisible, setColorPickerVisible] = useState(false);
  const [language, setLanguage] = useLocalStorage('language', 'EN');

  const changeLanguage = () => {
    const newLanguage = language === 'EN' ? 'ES' : 'EN';
    setLanguage(newLanguage);
  };

  useEffect(() => {
    OnLanguageChange(language);
  }, [language]);

  return (
    <React.Fragment>
      <header>
        <div className="profile-page sidebar-collapse">
          <nav
            className="navbar navbar-expand-lg fixed-top navbar-transparent bg-primary"
            color-on-scroll="400"
          >
            <div className="container">
              <div className="navbar-translate">
                <a className="navbar-brand" href="/#" rel="tooltip">
                  {Data.about.name}
                </a>
                <div className="theme-picker-wrapper ml-auto pr-2 d-block d-lg-none">
                  <a
                    href="/#"
                    className=""
                    onClick={(e) => {
                      e.preventDefault();
                      setColorPickerVisible(true);
                    }}
                  >
                    {false && (
                      <button className="theme-picker">
                        <BiColorFill />
                      </button>
                    )}
                  </a>
                </div>
                <button
                  className="navbar-toggler navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navigation"
                  aria-controls="navigation"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-bar bar1"></span>
                  <span className="navbar-toggler-bar bar2"></span>
                  <span className="navbar-toggler-bar bar3"></span>
                </button>
              </div>
              <div
                className="collapse navbar-collapse justify-content-end"
                id="navigation"
              >
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#about">
                      {i18.LNK_HEADER_ABOUT}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#skill">
                      {i18.LNK_HEADER_SKILLS}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#experience">
                      {i18.LNK_HEADER_EXPERIENCE}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#education">
                      {i18.LNK_HEADER_EDUCATION}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#projects">
                      {i18.LNK_HEADER_PROJECTS}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#contact">
                      {i18.LNK_HEADER_CONTACT}
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link smooth-scroll"
                      href="javascript:void(0)"
                      onClick={() => changeLanguage()}
                    >
                      {language}
                    </a>
                  </li>
                  {Data.about.paymentMethods.donate.show &&
                    false &&
                    Data.about.paymentMethods.donate.accounts.length > 0 && (
                      <li className="nav-item">
                        <a className="nav-link smooth-scroll" href="#donate">
                          {Data.about.paymentMethods.donate.accounts[0].icon}
                        </a>
                      </li>
                    )}

                  <li className="nav-item pl-lg-5 theme-picker-wrapper d-none d-lg-block">
                    <a
                      href="/#"
                      className="nav-link"
                      onClick={(e) => {
                        e.preventDefault();
                        setColorPickerVisible(true);
                      }}
                    >
                      {false && (
                        <button className="theme-picker">
                          <BiColorFill />
                        </button>
                      )}
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </header>
      {colorPickerVisible && (
        <ColorPickerPopup
          visible={colorPickerVisible}
          handleCancel={() => {
            setColorPickerVisible(false);
          }}
        />
      )}
    </React.Fragment>
  );
};

export default Header;
