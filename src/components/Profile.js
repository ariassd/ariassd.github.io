import React from 'react';
import ReactiveButton from 'reactive-button';
import Data from './Data';
import Typed from 'react-typed';
import { Image } from 'antd';

const Profile = () => {
  return (
    <React.Fragment>
      <div className="profile-page">
        <div className="wrapper">
          <div className="page-header page-header-small" filter-color="theme">
            <div
              className="page-header-image"
              data-parallax="true"
              style={{
                backgroundImage: "url('assets/img/frog2.png')",
              }}
            ></div>
            <div className="container">
              <div className="content-center">
                <div className="cc-profile-image">
                  {/* eslint-disable-next-line */}
                  <a href="#">
                    <Image
                      src={
                        process.env.PUBLIC_URL + '/assets/img/LuisArias.jpeg'
                      }
                      preview={false}
                      placeholder={
                        <Image
                          preview={false}
                          src={
                            process.env.PUBLIC_URL +
                            '/assets/img/luisarias-min.jpg'
                          }
                        />
                      }
                    />
                  </a>
                </div>
                <div className="h2 title">{Data.about.name}</div>
                <p className="category text-white">
                  <Typed
                    className="font-weight-light"
                    strings={
                      Data.about.taglines && Data.about.taglines.length
                        ? Data.about.taglines
                        : ['']
                    }
                    typeSpeed={70}
                    backSpeed={40}
                    smartBackspace={true}
                    loop={true}
                  />
                </p>
                {!Data.about.hideCv && (
                  <div>
                    <a
                      href={Data.about.cv}
                      target="_blank"
                      data-aos="zoom-in"
                      data-aos-anchor="data-aos-anchor"
                      rel="noopener noreferrer"
                    >
                      <ReactiveButton
                        style={{ fontSize: '0.8571em' }}
                        idleText="Download CV"
                        className="mt-4"
                      />
                    </a>
                  </div>
                )}
              </div>
            </div>
            <div className="section">
              <div className="container">
                <div className="button-container">
                  {Data.socialLinks.map((socialLink, index) => (
                    <a
                      key={index}
                      className="btn btn-default btn-round btn-lg btn-icon center-this"
                      href={socialLink.link}
                      target="_blank"
                      title={socialLink.title}
                      rel="noopener noreferrer"
                    >
                      {socialLink.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Profile;
