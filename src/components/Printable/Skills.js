import React from 'react';
import { List, Col, Row, Typography, Rate } from 'antd';
import { IconContext } from 'react-icons';
import { FaRegCheckCircle } from 'react-icons/fa';

// Type: soft, hard
const Skills = ({ Data, i18, type }) => {
  const skills = Data.skills;
  const skillIconSize = '1rem';

  return (
    <React.Fragment>
      <div className="section" id="projects">
        <Row>
          <Col span={24}>
            {type == 'soft' && (
              <Typography.Title level={4} style={{ textAlign: 'center' }}>
                {i18.TIT_SOFT_SKILLS}
              </Typography.Title>
            )}
            {type != 'soft' && (
              <Typography.Title level={4} style={{ textAlign: 'center' }}>
                {i18.TIT_PROF_SKILLS}
              </Typography.Title>
            )}
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
        </Row>
        <Row>
          <Col span={24}>
            <List
              itemLayout="horizontal"
              dataSource={skills.filter((i) => i.type == type)}
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
                        <Rate
                          count={10}
                          defaultValue={item.skillQualification}
                          character={<FaRegCheckCircle />}
                          disabled={true}
                          style={{ color: '#808080' }}
                        />
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

export default Skills;
