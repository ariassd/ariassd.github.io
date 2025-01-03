import React, { useEffect, useState } from 'react';
import Data from './Data';
import ReactiveButton from 'reactive-button';
import { BsArrowBarRight } from 'react-icons/bs';
import StyledContainer from './StyledContainer';
import { Card, Col, Image, Radio, Row, Spin, Typography } from 'antd';
import styled from 'styled-components';
import ProjectPopup from './ProjectPopup';

const itemPerPage = 12;

const thumbnailStyle = {
  height: '150px',
  transition: '0.3s ease',
  // filter: 'opacity(0.6)',
  boxShadow: '0px 5px 25px 0px rgb(0 0 0 / 20%)',
  objectFit: 'cover',
};

const LazyLoadPlaceHolderWrapper = styled.div`
  background: ghostwhite;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  -webkit-box-align: center;
  display: inline-flex;
`;

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [modalVisible, setModalVisible] = useState(false);

  const projects = Data.projects;

  useEffect(() => {
    let newCategories = [];
    projects.forEach((row) => {
      row.categories.map((category) => {
        return newCategories.push(category);
      });
    });
    setCategories([...new Set(newCategories)]);

    let hash = 'All';
    if (window.location.hash.substr(1) === 'projects?packages') {
      hash = 'Packages';
    } else if (window.location.hash.substr(1) === 'projects?professional') {
      hash = 'Professional';
    } else if (window.location.hash.substr(1) === 'projects?personal') {
      hash = 'Personal';
    }

    setSelectedCategory(hash);
  }, [projects]);

  const [visible, setVisible] = useState(itemPerPage);

  const loadMore = () => {
    setVisible(visible + itemPerPage);
  };

  return (
    <React.Fragment>
      <div className="section" id="projects">
        <StyledContainer>
          <Row>
            <Col span={24}>
              <Typography.Title
                level={3}
                style={{ textAlign: 'center', marginBottom: '2rem' }}
              >
                Projects
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Row>
                <Col
                  span={24}
                  style={{ textAlign: 'center', marginBottom: 24 }}
                >
                  {categories.length !== 0 && (
                    <div>
                      <Radio.Group
                        onChange={(e) => {
                          setSelectedCategory(e.target.value);
                        }}
                        buttonStyle="solid"
                        value={selectedCategory}
                      >
                        <Radio.Button value="All">All</Radio.Button>
                        {categories.map((category, index) => (
                          <Radio.Button
                            key={index}
                            value={category}
                            style={{ textTransform: 'capitalize' }}
                          >
                            {category}
                          </Radio.Button>
                        ))}
                      </Radio.Group>
                    </div>
                  )}
                </Col>
                <Col span={24} style={{ textAlign: 'center' }}>
                  <Row justify="center" gutter={32}>
                    {projects
                      .filter(
                        (project) =>
                          selectedCategory === 'All' ||
                          (selectedCategory !== 'All' &&
                            project.categories.includes(selectedCategory)),
                      )
                      .slice(0, visible)
                      .map((project, index) => (
                        <Col
                          key={index}
                          xl={6}
                          lg={6}
                          md={12}
                          sm={24}
                          xs={24}
                          style={{ marginBottom: 32 }}
                        >
                          <Card
                            onClick={() => {
                              setSelectedProject(project);
                              setModalVisible(true);
                            }}
                            style={{ width: '100%' }}
                            styles={{ body: { padding: '14px' } }}
                            hoverable
                            size={'small'}
                            className={'z-shadow z-hover'}
                            data-aos="zoom-in"
                            data-aos-offset="10"
                            bordered={true}
                            cover={
                              <div style={{ opacity: '0.7' }}>
                                <Image
                                  src={project.thumbnail}
                                  style={thumbnailStyle}
                                  preview={false}
                                  placeholder={
                                    <LazyLoadPlaceHolderWrapper>
                                      <Spin />
                                    </LazyLoadPlaceHolderWrapper>
                                  }
                                />
                              </div>
                            }
                          >
                            <Card.Meta
                              title={
                                <React.Fragment>
                                  <Row>
                                    <Col span={24}>
                                      <Typography.Text
                                        style={{ width: '100%', color: 'gray' }}
                                        ellipsis={{ tooltip: project.title }}
                                      >
                                        {project.title}
                                      </Typography.Text>
                                    </Col>
                                    <Col span={24}>
                                      <small style={{ color: 'darkgray' }}>
                                        See Details
                                      </small>
                                    </Col>
                                  </Row>
                                </React.Fragment>
                              }
                            />
                          </Card>
                        </Col>
                      ))}
                  </Row>
                </Col>
                {projects.filter(
                  (project) =>
                    selectedCategory === 'All' ||
                    (selectedCategory !== 'All' &&
                      project.categories.includes(selectedCategory)),
                ).length > visible && (
                  <Col span={24} style={{ textAlign: 'center', marginTop: 24 }}>
                    <ReactiveButton
                      idleText={
                        <React.Fragment>
                          Load More <BsArrowBarRight />
                        </React.Fragment>
                      }
                      onClick={loadMore}
                    />
                  </Col>
                )}
              </Row>
            </Col>
          </Row>
        </StyledContainer>
      </div>
      {modalVisible && (
        <ProjectPopup
          title={selectedProject ? selectedProject.title : ''}
          project={selectedProject}
          visible={modalVisible}
          handleCancel={() => {
            setModalVisible(false);
          }}
        />
      )}
    </React.Fragment>
  );
};

export default Project;
