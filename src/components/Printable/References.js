import { Col, Row, Timeline, Typography } from 'antd';
import React from 'react';

const References = ({ Data, i18 }) => {
  const timelineItems = Data.references.map((reference, index) => ({
    children: (
      <Row>
        <Col span={24}>
          <Typography.Text>{reference.name}</Typography.Text>
        </Col>
        <Col span={24}>
          <Typography.Text type="secondary">
            {reference.from} - {reference.to}
          </Typography.Text>
        </Col>
        <Col span={24}>
          <Typography.Text strong>{reference.position}</Typography.Text>
        </Col>
        <Col span={24}>
          <Typography.Paragraph>{reference.relationShip}</Typography.Paragraph>
        </Col>
      </Row>
    ),
    key: index,
    'data-aos-offset': 10,
  }));

  return (
    <React.Fragment>
      <div className="section" id="experience">
        <Row>
          <Col span={24}>
            <Typography.Title level={4} style={{ textAlign: 'center' }}>
              {i18.TIT_REFERENCES}
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
              {Data.getExperienceDuration()}
              <hr />
            </Typography.Text>
          </Col>
          <Col span={24}>
            <Timeline items={timelineItems} />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default References;
