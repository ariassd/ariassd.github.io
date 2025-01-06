import { Col, Row, Typography } from 'antd';
import React from 'react';
const { Paragraph } = Typography;

const About = ({ Data, i18 }) => {
  return (
    <React.Fragment>
      <div className="section" id="experience">
        <Row>
          <Col span={24}>
            <Typography.Title level={4} style={{ textAlign: 'center' }}>
              {i18.TIT_ABOUT}
            </Typography.Title>
          </Col>
          <Col span={24}>
            <Typography.Text
              italic="true"
              style={{
                display: 'block',
                textAlign: 'center',
                marginBottom: '1rem',
                color: 'darkgray',
                fontSize: '0.8em',
              }}
            >
              {'--o--'}
              <hr />
            </Typography.Text>
          </Col>
          <Col span={24}>
            <Paragraph style={{ textAlign: 'justify', marginBottom: 0 }}>
              {Data.about.details}
            </Paragraph>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default About;
