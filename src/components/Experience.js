import { Card, Col, List, Row, Timeline, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useBreakpoint } from '../hooks/breakpoint';
import StyledContainer from './StyledContainer';

const StyledListItem = styled(List.Item)`
  padding: 6px 16px !important;
  text-align: justify;
`;
const StyledListItemTeckStack = styled(List.Item)`
  padding: 6px 16px !important;
  text-align: left;
`;

const Experience = ({ Data, i18 }) => {
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
          <Typography.Title
            level={5}
            type="secondary"
            style={{ textAlign: 'center' }}
          >
            Technical stack
          </Typography.Title>
          <List
            dir="lrl"
            size="small"
            split={false}
            dataSource={experience.techStack}
            renderItem={(item) => (
              <StyledListItemTeckStack style={{ padding: '4px 16px' }}>
                <Typography.Text style={{ fontSize: 12, color: 'gray' }}>
                  {item}
                </Typography.Text>
              </StyledListItemTeckStack>
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
                {i18.TIT_EXPERIENCE}
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
                variant="outlined"
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
