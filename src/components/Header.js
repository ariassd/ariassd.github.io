import React, { useState } from 'react';
import Data from './Data';
import { BiColorFill } from 'react-icons/bi';
import ColorPickerPopup from './ColorPickerPopup';

const Header = () => {
  const [colorPickerVisible, setColorPickerVisible] = useState(false);

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
                    <button className="theme-picker">
                      <BiColorFill />
                    </button>
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
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#skill">
                      Skills
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#experience">
                      Experience
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#education">
                      Education
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#projects">
                      Projects
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link smooth-scroll" href="#contact">
                      Contact
                    </a>
                  </li>
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
