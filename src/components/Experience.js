import { Card, Col, List, Row, Timeline, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useBreakpoint } from '../hooks/breakpoint';
import Data from './Data';
import StyledContainer from './StyledContainer';

const StyledListItem = styled(List.Item)`
  padding: 6px 16px !important;
`;

const Experience = () => {
  const [loading, setLoading] = useState(true);
  const isMD = useBreakpoint();

  useEffect(() => {
    setLoading(false);
  }, []);

  const experiences = Data.experiences;

  const timelineItems = experiences.map((experience, index) => ({
    children: (
      <Row>
        <Col span={24}>
          <Typography.Text level={5}>{experience.company}</Typography.Text>
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
            dir={!isMD || index % 2 === 0 ? 'lrl' : 'rtl'}
            size="small"
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
        </Col>
      </Row>
    ),
    key: index,
    'data-aos': 'zoom-in',
    'data-aos-offset': 10,
  }));

  return (
    <React.Fragment>
      <div className="section" id="experience">
        <StyledContainer>
          <Row>
            <Col span={24}>
              <Typography.Title level={3} style={{ textAlign: 'center' }}>
                Work Experience
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Typography.Title
                level={5}
                style={{
                  textAlign: 'center',
                  marginBottom: '2rem',
                  color: 'darkgray',
                }}
              >
                {Data.getExperienceDuration()}
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Card
                loading={loading}
                style={{ cursor: 'default' }}
                hoverable
                bordered={true}
                className="z-shadow"
              >
                <Timeline
                  mode={!isMD ? 'left' : 'alternate'}
                  items={timelineItems}
                />
              </Card>
            </Col>
          </Row>
        </StyledContainer>
      </div>
    </React.Fragment>
  );
};

export default Experience;
