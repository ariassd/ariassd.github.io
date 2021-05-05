import React, { useEffect, useState } from 'react';
import { Drawer, Spin, Divider, Carousel, Row, Col, Image, Tag } from 'antd';
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

const ProjectPopup = (props) => {
    const [visible, setVisible] = useState(false);
    const [componentLoading, setComponentLoading] = useState((typeof props.componentLoading !== 'undefined') ? props.componentLoading : false);

    useEffect(() => {
        setTimeout(() => {
            setVisible(props.visible);
        }, 100);
    }, [props.visible])

    useEffect(() => {
        if (typeof props.componentLoading !== 'undefined') {
            setComponentLoading(props.componentLoading)
        }
    }, [props.componentLoading])

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
                            {
                                props.project.images.map((image, index) => (
                                    <div key={index}>
                                        <Image
                                            src={image}
                                            preview={false}
                                            placeholder={true}
                                            style={{
                                                maxHeight: '230px',
                                                transition: '0.3s ease',
                                                objectFit: 'cover'
                                            }}
                                        />
                                    </div>
                                ))
                            }
                        </Carousel>
                    </Col>
                </Row>
                <Divider />
                <StyledTitle>Skill</StyledTitle>
                <Row>
                    <Col span={24}>
                        {
                            props.project.skills.map((skill, index) => (
                                <Tag key={index} color={skill.color}>
                                    {skill.title}
                                </Tag>
                            ))
                        }
                    </Col>
                </Row>
                <Divider />
                <StyledTitle>Category</StyledTitle>
                <Row>
                    <Col span={24}>
                        {
                            props.project.categories.map((category, index) => (
                                <Tag 
                                    key={index} 
                                    style={{
                                        textTransform: 'capitalize',
                                    }}>
                                        {category}
                                    </Tag>
                            ))
                        }
                    </Col>
                </Row>
                {
                    (props.project.details !== null) && props.project.details !== '' && (
                        <React.Fragment>
                            <Divider/>
                            <StyledTitle>Description</StyledTitle>
                            <Row>
                                <Col span={24}>
                                    {props.project.description}
                                </Col>
                            </Row>
                        </React.Fragment>
                    )
                }
                {
                    props.project.links.map((link, index) => (
                        <React.Fragment key={index}>
                            <Divider/>
                            <StyledTitle>{link.title}</StyledTitle>
                            <Row>
                                <Col span={24}>
                                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                                        {link.url}
                                    </a>
                                </Col>
                            </Row>
                        </React.Fragment>
                    ))
                }
            </Spin>
        </StyledDrawer>
    )
}

export default ProjectPopup;