import { Avatar, Card, Col, Typography, Row } from 'antd';
import { Comment } from '@ant-design/compatible';
import React, { useEffect, useState } from 'react';
import { useBreakpoint } from '../hooks/breakpoint';
import Data from './Data';
import StyledContainer from './StyledContainer';

const About = () => {
  const [loading, setLoading] = useState(true);
  const isMD = useBreakpoint();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      <div className="section" id="about">
        <StyledContainer
          childrenStyle={`.ant-comment-avatar {
                        cursor: default
                    }`}
        >
          <Card
            loading={loading}
            style={{ cursor: 'default' }}
            hoverable
            bordered={false}
            className="z-shadow"
            data-aos="zoom-in"
            data-aos-offset="10"
          >
            <Row gutter={24}>
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <Comment
                  author={Data.about.name}
                  avatar={
                    isMD && (
                      <Avatar
                        src={
                          process.env.PUBLIC_URL + '/assets/img/luisarias.jpg'
                        }
                        alt={Data.about.name}
                        style={{ cursor: 'default !important' }}
                      />
                    )
                  }
                  content={
                    <Typography.Paragraph
                      style={{ textAlign: 'justify', marginBottom: 0 }}
                    >
                      {Data.about.details}
                    </Typography.Paragraph>
                  }
                />
              </Col>
            </Row>
          </Card>
        </StyledContainer>
      </div>
    </React.Fragment>
  );
};

export default About;
