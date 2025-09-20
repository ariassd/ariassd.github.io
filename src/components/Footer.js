import { Tooltip } from 'antd';
import React from 'react';
import { IconContext } from 'react-icons';

const Footer = ({ Data }) => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container text-center">
          {Data.socialLinks.map((socialLink, index) => (
            <Tooltip title={socialLink.title} key={index}>
              <a
                key={index}
                className="btn btn-link text-primary-light"
                target="_blank"
                href={socialLink.link}
                rel="noopener noreferrer"
              >
                <IconContext.Provider value={{ size: '1.4rem' }}>
                  {socialLink.icon}
                </IconContext.Provider>
              </a>
            </Tooltip>
          ))}
        </div>
        <div className="h4 title text-center text-muted">
          {Data.about.name}{' '}
        </div>
        <div className="text-center text-muted">
          <p>&copy; All rights reserved | {new Date().getFullYear()}</p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
