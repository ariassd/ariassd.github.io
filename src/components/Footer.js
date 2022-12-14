import { Tooltip } from 'antd';
import React from 'react';

import Data from './Data';

const Footer = () => {
  return (
    <React.Fragment>
      <footer className="footer">
        <div className="container text-center">
          {Data.socialLinks.map((socialLink, index) => (
            <Tooltip title={socialLink.title}>
              <a
                key={index}
                className="btn btn-link text-primary-light"
                target="_blank"
                href={socialLink.link}
                rel="noopener noreferrer"
              >
                {socialLink.icon}
              </a>
            </Tooltip>
          ))}

          {Data.about.paymentMethods.donate.show &&
            Data.about.paymentMethods.donate.accounts.map((i) => (
              <Tooltip title={i.title}>
                <a
                  className="btn btn-link text-primary-light"
                  target="_blank"
                  href={i.account}
                  rel="noopener noreferrer"
                >
                  {i.icon}
                </a>
              </Tooltip>
            ))}
        </div>
        <div className="h4 title text-center text-muted">
          {Data.about.name}{' '}
        </div>
        <div className="text-center text-muted">
          <p>&copy; All rights reserved. @ {new Date().getFullYear()}</p>
        </div>
      </footer>
    </React.Fragment>
  );
};

export default Footer;
