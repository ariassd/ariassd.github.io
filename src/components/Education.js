import { Card, Col, List, Row, Timeline, Typography } from 'antd';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useBreakpoint } from '../hooks/breakpoint';
import StyledContainer from './StyledContainer';
import CertificatePopup from './CertificatePopup';
import { IconContext } from 'react-icons';
import { PiCertificateLight } from 'react-icons/pi';

const StyledListItem = styled(List.Item)`
  padding: 6px 16px !important;
`;

const Education = ({ Data, i18 }) => {
  const [loading, setLoading] = useState(true);
  const education = Data.education;
  const isMD = useBreakpoint();
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCertificate, setSelectedCertificate] = useState(null);

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
            dataSource={item.certificate}
            renderItem={(subItem) => {
              return (
                <StyledListItem>
                  <Typography.Text style={{ fontSize: 12, color: 'gray' }}>
                    <strong>{subItem?.title}: </strong>
                    {subItem?.value}
                  </Typography.Text>
                </StyledListItem>
              );
            }}
          />
        </Col>
        <Col span={24}>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a
            href="javascript:void(0)"
            onClick={() => {
              setSelectedCertificate(item);
              setModalVisible(true);
            }}
          >
            <React.Fragment>
              <IconContext.Provider value={{ size: '1.5rem' }}>
                <PiCertificateLight />
              </IconContext.Provider>{' '}
            </React.Fragment>
          </a>
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
                {i18.TIT_EDUCATION}
              </Typography.Title>
            </Col>
            <Col span={24}>
              <Card
                loading={loading}
                style={{ cursor: 'default' }}
                hoverable
                bordered={true}
                className="z-shadow"
                data-aos="zoom-in"
                data-aos-offset="10"
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
      {modalVisible && (
        <CertificatePopup
          title={selectedCertificate ? selectedCertificate.title : ''}
          educationItem={selectedCertificate}
          visible={modalVisible}
          handleCancel={() => {
            setModalVisible(false);
          }}
        />
      )}
    </React.Fragment>
  );
};

export default Education;
