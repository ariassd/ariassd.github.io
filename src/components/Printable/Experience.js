import { Col, List, Row, Timeline, Typography } from 'antd';
import React from 'react';
import styled from 'styled-components';

const StyledListItem = styled(List.Item)`
  padding: 6px 16px !important;
`;

const Experience = ({ Data, i18, pageNumber, size }) => {
  const experiences = Data.experiences;
  const startFrom = (pageNumber - 1) * size;

  const timelineItems = experiences.reverse().slice(startFrom, startFrom + size).map((experience, index) => ({
    children: (
      <Row>
        <Col span={24}>
          <Typography.Text>{experience.company}</Typography.Text>
        </Col>
        <Col span={24}>
          <Typography.Text type="secondary">
            {experience.from} - {experience.to}
          </Typography.Text>
        </Col>
        <Col span={24}>
          <Typography.Text strong>{experience.position}</Typography.Text>
        </Col>
        <Col span={24}>
          <List
            split={false}
            dataSource={experience.responsibilities}
            renderItem={(item) => (
              <StyledListItem style={{ padding: '4px 16px' }}>
                <Typography.Text style={{ fontSize: 12, color: 'gray' }}>
                  {item}
                </Typography.Text>
              </StyledListItem>
            )}
          />
          <Typography.Title
            level={5}
            type="secondary"
            style={{ textAlign: 'center' }}
          >
            {i18.TIT_TECK_STACK}
          </Typography.Title>
          <List
            split={false}
            dataSource={experience.techStack}
            renderItem={(item) => (
              <StyledListItem style={{ padding: '4px 16px' }}>
                <Typography.Text style={{ fontSize: 12, color: 'gray' }}>
                  {item}
                </Typography.Text>
              </StyledListItem>
            )}
          />
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
              {i18.TIT_EXPERIENCE}
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

export default Experience;
