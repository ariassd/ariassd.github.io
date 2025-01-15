import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Col, Row, Typography } from 'antd';
import { IconContext } from 'react-icons';

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
import { useNavigate } from 'react-router-dom';

const cssPageColumn = {
  padding: '0 20px',
};

const Printable = ({ Data, i18 }) => {
  const navigate = useNavigate();
  let [searchParams] = useSearchParams();
  let [printCounter, setPrintCounter] = useState(0);

  const links = Data.socialLinks.filter(
    (i) => i.link.includes('linkedin') || i.link.includes('git'),
  );

  const handleAfterPrint = () => {
    navigate('/');
    window.removeEventListener('afterprint', handleAfterPrint);
  };

  links.unshift({
    icon: <MdMarkEmailUnread />,
    link: Data.about.email,
  });

  useEffect(() => {
    document.title = `${Data.about.name} ${i18.TIT_PAGE_TITLE}`;
    setPrintCounter(printCounter + 1);
  }, []);

  useEffect(() => {
    const isMobile =
      /iPhone|iPad|iPod|Android|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent,
      );
    if (isMobile == false) {
      window.addEventListener('afterprint', handleAfterPrint);
      if (printCounter === 1 && searchParams.get('f') == 'pdf') {
        window.print();
      }
    } else {
      window.print();
    }
  }, [printCounter]);

  return (
    <React.Fragment>
      <div
        className="section"
        id="printable"
        style={{ maxWidth: '900', margin: 'auto' }}
      >
        <Row>
          <Col span={6}>
            <Avatar
              src={process.env.PUBLIC_URL + '/assets/img/LuisArias.jpeg'}
              size={{ xs: 1, sm: 64, md: 80, lg: 128, xl: 128, xxl: 200 }}
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
                {links.map((i, ix) => (
                  <div key={ix}>
                    <IconContext.Provider value={{ size: '1.4rem' }}>
                      {i.icon}
                    </IconContext.Provider>{' '}
                    {i.link}
                  </div>
                ))}
              </Typography.Text>
            </Typography.Paragraph>
          </Col>
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
        {/* <div style={{ breakAfter: 'page' }}></div> */}
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
