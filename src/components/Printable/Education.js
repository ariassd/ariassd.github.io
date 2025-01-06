import { Col, List, Row, Typography } from 'antd';
import React from 'react';

const Education = ({ Data, i18 }) => {
  const education = Data.education;

  return (
    <React.Fragment>
      <div className="section" id="experience">
        <Row>
          <Col span={24}>
            <Typography.Title level={4} style={{ textAlign: 'center' }}>
              {i18.TIT_EDUCATION}
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
              <hr />
            </Typography.Title>
          </Col>
          <Col span={24}>
            {/* <Timeline items={timelineItems} /> */}
            <List
              dataSource={education}
              grid={{ column: 3 }}
              renderItem={(item) => (
                <List.Item>
                  <Row style={{ width: '100%' }}>
                    <Col span={24}>
                      <Typography.Text level={5}>
                        {item.institution}
                      </Typography.Text>
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
                        size="small"
                        split={false}
                        dataSource={item.info}
                        renderItem={(subItem) =>
                          subItem.title && subItem.value ? (
                            <List.Item>
                              <Typography.Text
                                style={{ fontSize: 12, color: 'gray' }}
                              >
                                <strong>{subItem.title}: </strong>
                                {subItem.value}
                              </Typography.Text>
                            </List.Item>
                          ) : null
                        }
                      />
                    </Col>
                  </Row>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Education;
