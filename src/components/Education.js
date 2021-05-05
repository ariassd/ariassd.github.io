import { Card, Col, List, Row, Timeline, Typography } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useBreakpoint } from "../hooks/breakpoint";
import Data from "./Data";
import StyledContainer from "./StyledContainer";

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

  return (
    <React.Fragment>
      <div className="section" id="education">
        <StyledContainer>
          <Row>
            <Col span={24}>
              <Typography.Title level={3} style={{ textAlign: "center", marginBottom: "2rem" }}>
                Education
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Card loading={loading} style={{ cursor: "default" }} hoverable bordered={false} className="z-shadow">
                <Timeline mode={!isMD ? "left" : "alternate"}>
                  {education.map((item, index) => (
                    <Timeline.Item key={index} data-aos="zoom-in" data-aos-offset="10">
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
                          <List
                            dir={!isMD || index % 2 === 0 ? "lrl" : "rtl"}
                            size="small"
                            header={<Typography.Text strong>{item.degree}</Typography.Text>}
                            split={false}
                            dataSource={item.info}
                            renderItem={(item) => (
                              <StyledListItem>
                                <Typography.Text style={{ fontSize: 12, color: "gray" }}>
                                  <strong>{item.title}: </strong>
                                  {item.value}
                                </Typography.Text>
                              </StyledListItem>
                            )}
                          />
                        </Col>
                      </Row>
                    </Timeline.Item>
                  ))}
                  <Timeline.Item dot={<i style={{ display: "none" }} />} />
                </Timeline>
              </Card>
            </Col>
          </Row>
        </StyledContainer>
      </div>
    </React.Fragment>
  );
};

export default Education;
