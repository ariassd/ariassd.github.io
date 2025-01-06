import React from 'react';
import { List, Col, Row, Typography } from 'antd';
import { IconContext } from 'react-icons';

const Project = ({ Data, i18 }) => {
  const projects = Data.projects;
  const skillIconSize = '2rem';

  return (
    <React.Fragment>
      <div className="section" id="projects">
        <Row>
          <Col span={24}>
            <Typography.Title level={3} style={{ textAlign: 'center' }}>
              {i18.TIT_PORTFOLIO}
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
            <List
              itemLayout="horizontal"
              dataSource={projects}
              grid={{ column: 3 }}
              renderItem={(item, index) => (
                <List.Item key={index}>
                  <List.Item.Meta
                    avatar={
                      <IconContext.Provider
                        value={{ size: skillIconSize, color: '#808080' }}
                      >
                        {item.icon}
                      </IconContext.Provider>
                    }
                    title={item.title}
                    description={
                      <React.Fragment>
                        <div>{item.description}</div>
                        <div>🔗 {item.links[0].url}</div>
                      </React.Fragment>
                    }
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Project;
