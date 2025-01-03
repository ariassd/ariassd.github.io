import { Card, Col, List, Row, Timeline, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useBreakpoint } from '../hooks/breakpoint';
import Data from './Data';
import StyledContainer from './StyledContainer';

const StyledListItem = styled(List.Item)`
  padding: 6px 16px !important;
`;

const Education = () => {
  const [loading, setLoading] = useState(true);
  const education = Data.education;
  const isMD = useBreakpoint();

  useEffect(() => {
    setLoading(false);
  }, []);

  const timelineItems = education.map((item, index) => ({
    children: (
      <Row>
        <Col span={24}>
          <Typography.Text level={5}>{item.institution}</Typography.Text>
        </Col>
        <Col span={24}>
          <Typography.Text type="secondary">
            {item.from} - {item.to}
          </Typography.Text>
        </Col>
        <Col span={24}>
          <Typography.Text strong>{item.degree}</Typography.Text>
        </Col>
        <Col span={24}>
          <List
            dir={!isMD || index % 2 === 0 ? 'lrl' : 'rtl'}
            size="small"
            split={false}
            dataSource={item.info}
            renderItem={(subItem) => {
              if (subItem.title && subItem.value) {
                return (
                  <StyledListItem>
                    <Typography.Text style={{ fontSize: 12, color: 'gray' }}>
                      <strong>{subItem.title}: </strong>
                      {subItem.value}
                    </Typography.Text>
                  </StyledListItem>
                );
              }
            }}
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
      <div className="section" id="education">
        <StyledContainer>
          <Row>
            <Col span={24}>
              <Typography.Title
                level={3}
                style={{ textAlign: 'center', marginBottom: '2rem' }}
              >
                Education
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

export default Education;
