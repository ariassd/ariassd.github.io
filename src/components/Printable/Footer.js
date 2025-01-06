import { Col, Row, Typography } from 'antd';
import React from 'react';

const Footer = ({ i18 }) => {
  return (
    <React.Fragment>
      <div className="section" id="experience">
        <Row>
          <Col span={24}>
            <Typography.Title level={4} style={{ textAlign: 'center' }}>
              {i18.TIT_FOOTER}
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
            <Typography.Paragraph
              style={{
                display: 'block',
                textAlign: 'center',
                marginBottom: '1rem',
                color: 'darkgray',
                fontSize: '1em',
              }}
            >
              Stay away from negative people. They have a problem for every
              solution. (A.E)
            </Typography.Paragraph>

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
              Printed on {new Date().toLocaleDateString()}
            </Typography.Text>
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
              {window.location.href.split('?')[0]}
            </Typography.Text>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Footer;
