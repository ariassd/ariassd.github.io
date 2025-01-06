import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Col, Row, Typography } from 'antd';

import { AntDesignOutlined } from '@ant-design/icons';
import { Avatar } from 'antd';

import Experience from './Experience';
import About from './About';
import Project from './Project';
import Skills from './Skills';
import References from './References';
import Footer from './Footer';
import Education from './Education';
import { FaLanguage } from 'react-icons/fa';
import { MdMarkEmailUnread } from 'react-icons/md';
import { FaLocationDot } from 'react-icons/fa6';

const cssPageColumn = {
  padding: '0 20px',
};

const Printable = ({ Data, i18 }) => {
  let [searchParams] = useSearchParams();
  let [printCounter, setPrintCounter] = useState(0);

  const links = Data.socialLinks.filter(
    (i) => i.link.includes('linkedin') || i.link.includes('git'),
  );

  useEffect(() => {
    document.title = `${Data.about.name} ${i18.TIT_PAGE_TITLE}`;
    setPrintCounter(printCounter + 1);
  }, []);

  useEffect(() => {
    if (printCounter === 1 && searchParams.get('f') == 'pdf') {
      window.print();
      window.history.back();
    }
  }, [printCounter]);

  return (
    <React.Fragment>
      <div className="section" id="printable">
        <Row>
          <Col span={3}>
            <Avatar
              src={process.env.PUBLIC_URL + '/assets/img/LuisArias.jpeg'}
              size={{ xs: 24, sm: 32, md: 40, lg: 64, xl: 100, xxl: 100 }}
              icon={<AntDesignOutlined />}
            />
          </Col>
          <Col span={6}>
            <Typography.Title level={4} style={{ textAlign: 'left' }}>
              {Data.about.name}
            </Typography.Title>
            <Typography.Paragraph
              style={{ textAlign: 'justify', marginBottom: 0 }}
            >
              {Data.about.taglines.map((item, ix) => (
                <div key={ix}>✓ {item}</div>
              ))}
            </Typography.Paragraph>
          </Col>
          <Col span={6}>
            <Typography.Paragraph>
              <Typography.Text>
                <FaLanguage /> {i18.LBL_LANGUAGES}:
                {Data.about.languages.map((i, ix) => (
                  <div key={ix}>
                    &emsp; ✓ {i.name}: {i.level}
                  </div>
                ))}
                <div>
                  <FaLocationDot /> {Data.about.address}
                </div>
              </Typography.Text>
            </Typography.Paragraph>
          </Col>
          <Col span={6}>
            <Typography.Paragraph>
              <Typography.Text>
                <div>
                  <MdMarkEmailUnread /> {Data.about.email}
                </div>
                {links.map((i, ix) => (
                  <div key={ix}>
                    {i.icon} {i.link}
                  </div>
                ))}
              </Typography.Text>
            </Typography.Paragraph>
          </Col>
          <Col span={3}></Col>
        </Row>
        <Row>
          <Col span={12} style={cssPageColumn}>
            <About Data={Data} i18={i18} />
            <Education Data={Data} i18={i18} />
          </Col>
          <Col span={12} style={cssPageColumn}>
            <Experience Data={Data} i18={i18} />
          </Col>
        </Row>
        {/* Page number 2 */}
        <div style={{ breakAfter: 'page' }}></div>
        <Row>
          <Col span={24} style={cssPageColumn}>
            <Skills Data={Data} i18={i18} type="soft" />
          </Col>
        </Row>
        <Row>
          <Col span={24} style={cssPageColumn}>
            <Skills Data={Data} i18={i18} type="hard" />
          </Col>
        </Row>

        {/* Page number 3 */}
        <div style={{ breakAfter: 'page' }}></div>
        <Row>
          <Col span={24} style={cssPageColumn}>
            <Project Data={Data} i18={i18} />
          </Col>
        </Row>

        {/* Page number 4 */}
        <div style={{ breakAfter: 'page' }}></div>
        <Row>
          <Col span={12} style={cssPageColumn}>
            <References Data={Data} i18={i18} type="soft" />
          </Col>
          <Col span={12} style={cssPageColumn}>
            <Footer Data={Data} i18={i18} type="soft" />
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default Printable;
