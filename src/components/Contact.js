import { Card, Col, Row, Typography } from 'antd';
import React from 'react';
import { IconContext } from 'react-icons';
import { FaEnvelope, FaPaperPlane, FaUserCircle } from 'react-icons/fa';
import { ImFilePdf } from 'react-icons/im';
import ReactiveButton from 'reactive-button';
import StyledContainer from './StyledContainer';
import { useNavigate } from 'react-router-dom';

const Contact = ({ Data, i18 }) => {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <div className="section" id="contact">
        <div
          className="cc-contact-information"
          style={{ backgroundImage: "url('assets/img/footer-image.png')" }}
        >
          <StyledContainer>
            <Row>
              <Col span={24}>
                <Typography.Title
                  level={3}
                  style={{ textAlign: 'center', marginBottom: '2rem' }}
                >
                  {i18.TIT_CONTACT}
                </Typography.Title>
              </Col>
              <Col span={24}>
                <Card
                  style={{ cursor: 'default' }}
                  hoverable
                  bordered={true}
                  className="z-shadow"
                  data-aos="zoom-in"
                  data-aos-offset="10"
                >
                  <Row>
                    <Col xl={16} lg={16} md={16} sm={24} xs={24}>
                      <div className="card-body">
                        <form
                          action={Data.about.formspree}
                          id="contact-me-form"
                          method="POST"
                        >
                          <div className="p pb-3">
                            <strong>{i18.LBL_SEND_A_MESSAGE}</strong>
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
                                  placeholder={i18.LBL_NAME}
                                  required="required"
                                />
                              </div>
                            </div>
                          </div>
                          {/* <div className="row mb-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-addon text-primary center-this">
                                  <FaFileAlt />
                                </span>
                                <input
                                  className="form-control"
                                  type="text"
                                  name="Subject"
                                  placeholder={i18.LBL_SUBJECT}
                                  required="required"
                                />
                              </div>
                            </div>
                          </div> */}
                          <div className="row mb-3">
                            <div className="col">
                              <div className="input-group">
                                <span className="input-group-addon text-primary center-this">
                                  <FaEnvelope />
                                </span>
                                <input
                                  className="form-control"
                                  type="email"
                                  name="email"
                                  placeholder={i18.LBL_EMAIL}
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
                                  placeholder={i18.LBL_YOUR_MESSAGE}
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
                                    <FaPaperPlane /> {i18.BTN_SEND}
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
                      xl={8}
                      lg={8}
                      md={8}
                      sm={24}
                      xs={24}
                      style={{ textAlign: 'center' }}
                    >
                      <div className="card-body">
                        <p className="mb-0">
                          <strong>{i18.LBL_ADDRESS}</strong>
                        </p>
                        <p className="pb-2 text-muted">{Data.about.address}</p>
                        {!Data.about.hidePhone && (
                          <React.Fragment>
                            <p className="mb-0">
                              <strong>{i18.LBL_PHONE}</strong>
                            </p>
                            <p className="pb-2 text-muted">
                              {Data.about.phone}
                            </p>
                          </React.Fragment>
                        )}
                        {!Data.about.hideEmail && (
                          <React.Fragment>
                            <p className="mb-0">
                              <strong>{i18.LBL_PHONE}</strong>
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
                              <strong>{i18.LBL_CV}</strong>
                            </p>
                            <div>
                              {/* PRINT */}

                              <ReactiveButton
                                style={{ fontSize: '0.8571em' }}
                                idleText={
                                  <React.Fragment>
                                    <IconContext.Provider
                                      value={{ size: '1.5rem' }}
                                    >
                                      <ImFilePdf />
                                    </IconContext.Provider>{' '}
                                    {i18.LBL_CV}
                                  </React.Fragment>
                                }
                                className="mt-4"
                                onClick={() => {
                                  navigate('/print?f=pdf');
                                }}
                              />
                            </div>
                          </React.Fragment>
                        )}
                      </div>
                    </Col>
                  </Row>
                  {!Data.about.hideMap && (
                    <Row>
                      <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                        <iframe
                          src={Data.about.googleEmbeddedMapUrl}
                          width="100%"
                          height="300"
                          style={{
                            border: 0,
                          }}
                          allowFullScreen
                          loading="lazy"
                          title="map"
                        ></iframe>
                      </Col>
                    </Row>
                  )}
                </Card>
              </Col>
            </Row>
          </StyledContainer>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
