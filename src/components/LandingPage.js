import React, { useEffect } from 'react';

import Experience from './Experience';
import About from './About';
import Project from './Project';
import Profile from './Profile';
import Skill from './Skill';
import Contact from './Contact';

import Education from './Education';


const LandingPage = ({ Data, i18 }) => {

  const onBeforePrint = function () {
    window.removeEventListener('afterprint', onBeforePrint);
    window.location.href = '/print';
  };

  useEffect(() => {
    window.addEventListener('beforeprint', onBeforePrint);
  }, []);

  return (
    <React.Fragment>
      <Profile Data={Data} i18={i18} />
      <About Data={Data} i18={i18} />
      <Skill Data={Data} i18={i18} />
      <Experience Data={Data} i18={i18} />
      <Education Data={Data} i18={i18} />
      <Project Data={Data} i18={i18} />
      <Contact Data={Data} i18={i18} />
    </React.Fragment>
  );
};

export default LandingPage;
