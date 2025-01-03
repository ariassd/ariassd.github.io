import { Card, Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useBreakpoint } from '../hooks/breakpoint';
import Data from './Data';
import StyledContainer from './StyledContainer';
import ProfileComment from './ProfileComment';

const About = () => {
  const [loading, setLoading] = useState(true);
  const isMD = useBreakpoint();

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <React.Fragment>
      <div className="section" id="about">
        <StyledContainer>
          <Card
            loading={loading}
            style={{ cursor: 'default' }}
            hoverable
            bordered={false}
            className="z-shadow"
            data-aos="zoom-in"
            data-aos-offset="10"
            styles={{ body: { padding: '20px' } }}
          >
            <Row gutter={24}>
              <Col xl={24} lg={24} md={24} sm={24} xs={24}>
                <ProfileComment Data={Data} isMD={isMD} />
              </Col>
            </Row>
          </Card>
        </StyledContainer>
      </div>
    </React.Fragment>
  );
};

export default About;
