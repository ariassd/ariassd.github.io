import React, { useEffect, useState } from 'react';
import {
  Col,
  List,
  Row,
  Typography,
  Drawer,
  Spin,
  Divider,
  Carousel,
  Image,
} from 'antd';
import styled from 'styled-components';
import ReactiveButton from 'reactive-button';

const StyledDrawer = styled(Drawer)`
  .ant-drawer-content-wrapper {
    width: 520px !important;
    @media (max-width: 768px) {
      max-width: calc(100vw - 16px) !important;
    }
  }
`;

const StyledTitle = styled.p`
  display: block;
  margin-bottom: 16px;
  color: rgba(0, 0, 0, 0.85);
  font-size: 16px;
  line-height: 1.5715;
  margin-bottom: 16px;
`;

const CertificatePopup = (props) => {
  const [visible, setVisible] = useState(false);
  const [componentLoading, setComponentLoading] = useState(
    typeof props.componentLoading !== 'undefined'
      ? props.componentLoading
      : false,
  );

  useEffect(() => {
    setTimeout(() => {
      setVisible(props.visible);
    }, 100);
  }, [props.visible]);

  useEffect(() => {
    if (typeof props.componentLoading !== 'undefined') {
      setComponentLoading(props.componentLoading);
    }
  }, [props.componentLoading]);

  const handleClose = () => {
    setVisible(false);
    setTimeout(() => {
      props.handleCancel();
    }, 400);
  };

  return (
    <StyledDrawer
      zIndex={999999999}
      title={props.title}
      onClose={handleClose}
      visible={visible}
      destroyOnClose={true}
      maskClosable={true}
      forceRender={true}
      footer={
        <div
          style={{
            textAlign: 'right',
          }}
        >
          <div style={{ marginRight: 8 }}>
            <ReactiveButton
              idleText={'Close'}
              disabled={componentLoading}
              onClick={handleClose}
              size={'small'}
            />
          </div>
        </div>
      }
    >
      <Spin spinning={componentLoading} size="large" delay={500}>
        <StyledTitle>Images</StyledTitle>
        <Row>
          <Col span={24}>
            <Carousel autoplay pauseOnHover={false}>
              {props?.educationItem?.images?.map((image, index) => (
                <div key={index}>
                  <Image
                    src={image}
                    preview={false}
                    placeholder={true}
                    style={{
                      maxHeight: '230px',
                      transition: '0.3s ease',
                      objectFit: 'cover',
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </Col>
        </Row>
        <Divider />
        <StyledTitle>Institute</StyledTitle>
        <Row>
          <Col span={24}>{props?.educationItem?.institution}</Col>
        </Row>
        <Divider />
        <StyledTitle>Year</StyledTitle>
        <Row>
          <Col span={24}>
            {props.educationItem.from} - {props.educationItem.to}
          </Col>
        </Row>
        <Divider />
        <StyledTitle>Degree</StyledTitle>
        <Row>
          <Col span={24}>
            {props.educationItem.degree}
            <List
              size="small"
              split={false}
              dataSource={props.educationItem.certificate}
              renderItem={(subItem) => {
                if (subItem.title && subItem.value) {
                  return (
                    <Typography.Text style={{ fontSize: 12, color: 'gray' }}>
                      <strong>{subItem.title}: </strong>
                      {subItem.value}
                    </Typography.Text>
                  );
                }
              }}
            />
          </Col>
        </Row>
        <Divider />
        <StyledTitle>Category</StyledTitle>
        <Row>
          <Col span={24}>{props.educationItem.category}</Col>
        </Row>
      </Spin>
    </StyledDrawer>
  );
};

export default CertificatePopup;
