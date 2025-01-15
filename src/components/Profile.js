import React from 'react';
import ReactiveButton from 'reactive-button';
import { useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { ReactTyped } from 'react-typed';
import { Image } from 'antd';

const Profile = ({ Data, i18 }) => {
  const navigate = useNavigate();
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
                  {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                  <a href="#">
                    <Image
                      src={`assets/img/LuisArias.jpeg`}
                      style={{
                        width: '100%',
                        maxWidth: '180px',
                        height: 'auto',
                      }}
                      preview={true}
                      placeholder={
                        <Image
                          preview={false}
                          src={`assets/img/luisarias-min.jpg`}
                        />
                      }
                    />
                  </a>
                </div>
                {Data.about.openToWork && (
                  <div
                    className="cc-profile-image"
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      width: '100%',
                    }}
                  >
                    {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                    <a href="#">
                      <Image
                        src={`assets/img/open-to-work.png`}
                        style={{
                          top: '1px',
                          width: '100%',
                          maxWidth: '181px',
                          height: 'auto',
                        }}
                        preview={false}
                      />
                    </a>
                  </div>
                )}

                <div className="h2 title">{Data.about.name}</div>
                <p className="category text-white">
                  <ReactTyped
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
                    {/* PRINT */}
                    <ReactiveButton
                      style={{ fontSize: '0.8571em' }}
                      idleText={i18.LBL_CV}
                      className="mt-4"
                      onClick={() => {
                        navigate('/print?f=pdf');
                      }}
                    />
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
                      <IconContext.Provider value={{ size: '1.4rem' }}>
                        {socialLink.icon}
                      </IconContext.Provider>
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
