import { Card, Col, Row, Space, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import StyledContainer from './StyledContainer';
import { IconContext } from 'react-icons';

const Skill = ({ Data, i18 }) => {
  const skillIconSize = '4rem';
  const [loading, setLoading] = useState(true);
  const skills = Data.skills;

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      <div className="section" id="skill">
        <StyledContainer>
          <Row>
            <Col span={24}>
              <Typography.Title
                level={3}
                style={{ textAlign: 'center', marginBottom: '2rem' }}
              >
                {i18.TIT_PROF_SKILLS}
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Row justify="center" gutter={24}>
                {skills
                  .filter((i) => i.type === 'hard')
                  .map((skill, index) => (
                    <Col
                      key={index}
                      xl={4}
                      lg={4}
                      md={8}
                      sm={12}
                      xs={12}
                      style={{ marginBottom: 24 }}
                      data-aos="zoom-in"
                      data-aos-offset="10"
                    >
                      <Card
                        hoverable
                        loading={loading}
                        size="small"
                        style={{ textAlign: 'center', cursor: 'default' }}
                        className="z-shadow z-hover"
                        data-aos="zoom-in"
                        bordered={true}
                      >
                        <Space direction="vertical">
                          <div>
                            <IconContext.Provider
                              value={{
                                size: skillIconSize,
                                color: skill.iconColor,
                              }}
                            >
                              {skill.icon}
                            </IconContext.Provider>
                          </div>
                          <div>
                            <Typography.Text
                              style={{ width: '80px', color: 'grey' }}
                              ellipsis={{ tooltip: skill.title }}
                            >
                              {skill.title}
                            </Typography.Text>
                          </div>
                        </Space>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </StyledContainer>
      </div>
      <div className="section" id="skill">
        <StyledContainer>
          <Row>
            <Col span={24}>
              <Typography.Title
                level={3}
                style={{ textAlign: 'center', marginBottom: '2rem' }}
              >
                {i18.TIT_SOFT_SKILLS}
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Row justify="center" gutter={24}>
                {skills
                  .filter((i) => i.type === 'soft')
                  .map((skill, index) => (
                    <Col
                      key={index}
                      xl={4}
                      lg={4}
                      md={8}
                      sm={12}
                      xs={12}
                      style={{ marginBottom: 24 }}
                      data-aos="zoom-in"
                      data-aos-offset="10"
                    >
                      <Card
                        hoverable
                        loading={loading}
                        size="small"
                        style={{ textAlign: 'center', cursor: 'default' }}
                        className="z-shadow z-hover"
                        data-aos="zoom-in"
                        bordered={true}
                      >
                        <Space direction="vertical">
                          <div>
                            <IconContext.Provider
                              value={{
                                size: skillIconSize,
                                color: skill.iconColor,
                              }}
                            >
                              {skill.icon}
                            </IconContext.Provider>
                          </div>
                          <div>
                            <Typography.Text
                              style={{ width: '80px', color: 'grey' }}
                              ellipsis={{ tooltip: skill.title }}
                            >
                              {skill.title}
                            </Typography.Text>
                          </div>
                        </Space>
                      </Card>
                    </Col>
                  ))}
              </Row>
            </Col>
          </Row>
        </StyledContainer>
      </div>
    </React.Fragment>
  );
};

export default Skill;
