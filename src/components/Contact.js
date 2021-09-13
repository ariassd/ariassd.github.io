import React from 'react';
import ReactiveButton from 'reactive-button';
import Data from './Data';
import { ImFilePdf } from 'react-icons/im';
import { IconContext } from 'react-icons';
import {
  FaEnvelope,
  FaFileAlt,
  FaPaperPlane,
  FaUserCircle,
} from 'react-icons/fa';
import StyledContainer from './StyledContainer';
import { Card, Col, Row, Typography } from 'antd';

const Contact = () => {
  return (
    <React.Fragment>
      <div className="section" id="contact">
        <div
          className="cc-contact-information"
          style={{ backgroundImage: "url('assets/img/footer-image.png')" }}
        >
          <StyledContainer>
            <Row gutter={24}>
              <Col span={24}>
                <Typography.Title
                  level={3}
                  style={{ textAlign: 'center', marginBottom: '2rem' }}
                >
                  Contact Me
                </Typography.Title>
              </Col>
              <Col span={24}>
                <Card
                  style={{ cursor: 'default' }}
                  hoverable
                  bordered={false}
                  className="z-shadow"
                  data-aos="zoom-in"
                  data-aos-offset="10"
                >
                  <Row justify="center" align="middle">
                    {!Data.about.hideMap && (
                      <Col xl={10} lg={10} md={10} sm={10} xs={10}>
                        <iframe
                          src={Data.about.googleEmbeddedMapUrl}
                          width="100%"
                          height="350"
                          style={{
                            border: 0,
                          }}
                          allowFullScreen
                          loading="lazy"
                          title="map"
                        ></iframe>
                      </Col>
                    )}
                    <Col xl={10} lg={10} md={10} sm={10} xs={10}>
                      <div className="card-body">
                        <form
                          action={Data.about.formspree}
                          id="contact-me-form"
                          method="POST"
                        >
                          <div className="p pb-3">
                            <strong>Send Me A Message</strong>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-addon text-primary center-this">
                                  <FaUserCircle />
                                </span>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="name"
                                  placeholder="Name"
                                  required="required"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-addon text-primary center-this">
                                  <FaFileAlt />
                                </span>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="Subject"
                                  placeholder="Subject"
                                  required="required"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-addon text-primary center-this">
                                  <FaEnvelope />
                                </span>
                                <input
                                  className="form-control"
                                  type="email"
                                  name="_replyto"
                                  placeholder="E-mail"
                                  required="required"
                                />
                              </div>
                            </div>
                          </div>
                          <div className="row mb-3">
                            <div className="col">
                              <div className="form-group">
                                <textarea
                                  className="form-control"
                                  name="message"
                                  placeholder="Your Message"
                                  required="required"
                                ></textarea>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col">
                              <ReactiveButton
                                type="submit"
                                idleText={
                                  <React.Fragment>
                                    <FaPaperPlane /> Send
                                  </React.Fragment>
                                }
                                style={{ fontSize: '13px' }}
                              />
                            </div>
                          </div>
                        </form>
                      </div>
                    </Col>

                    <Col
                      xl={4}
                      lg={4}
                      md={4}
                      sm={4}
                      xs={4}
                      style={{ textAlign: 'center' }}
                    >
                      <div className="card-body">
                        <p className="mb-0">
                          <strong>Address</strong>
                        </p>
                        <p className="pb-2 text-muted">{Data.about.address}</p>
                        {!Data.about.hidePhone && (
                          <React.Fragment>
                            <p className="mb-0">
                              <strong>Phone</strong>
                            </p>
                            <p className="pb-2 text-muted">
                              {Data.about.phone}
                            </p>
                          </React.Fragment>
                        )}
                        {!Data.about.hideEmail && (
                          <React.Fragment>
                            <p className="mb-0">
                              <strong>Email</strong>
                            </p>

                            <p>
                              <a
                                href={'mailto:' + Data.about.email}
                                target="_blank"
                                data-type="mail"
                                className="text-muted"
                                rel="noopener noreferrer"
                              >
                                {Data.about.email}
                              </a>
                            </p>
                          </React.Fragment>
                        )}
                        {!Data.about.hideCv && (
                          <React.Fragment>
                            <p className="mb-0">
                              <strong>CV</strong>
                            </p>
                            <div>
                              <a
                                href={Data.about.cv}
                                className="text-muted"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <IconContext.Provider
                                  value={{ size: '1.5rem' }}
                                >
                                  <ImFilePdf />
                                </IconContext.Provider>
                              </a>
                            </div>
                          </React.Fragment>
                        )}
                      </div>
                    </Col>
                  </Row>
                  
                </Card>
              </Col>
            </Row>
            
          </StyledContainer>
          { Data.about.cryptoAccounts.map(i => 
            <Row justify="center" align="middle">
              <Col xl={4} lg={4} md={4} sm={4} xs={4}><b>{i.type}: </b></Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={4}><p>{i.account}</p></Col>
              <Col xl={4} lg={4} md={4} sm={4} xs={4}></Col>
            </Row>
          ) }
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
