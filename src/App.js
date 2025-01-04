import React, { useContext, useEffect, useState } from 'react';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import Project from './components/Project';
import Skill from './components/Skill';
import { ThemeContext } from './contexts/ThemeContext';
import 'antd/dist/reset.css';
import { changeAntdTheme } from 'mini-dynamic-antd-theme';
import { Languages } from './components/Data';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [theme] = useContext(ThemeContext);
  const [data, setData] = useState(Languages.EN);

  const onLanguageChange = (language) => {
    console.log('language', language);
    if (language === 'ES') {
      setData(Languages.ES);
    } else {
      setData(Languages.EN);
    }
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  useEffect(() => {
    if (theme) {
      changeAntdTheme(theme.hex);
      changeTheme(theme);
    } else {
      // changeAntdTheme('#00bfa5');
      // console.log(Data.defaultThemeColor);
      localStorage.setItem(
        'portfolio-theme',
        JSON.stringify(data.defaultThemeColor),
      );
      changeAntdTheme('#cc0000');
      changeTheme(data.defaultThemeColor);
    }
  }, [theme]);

  function changeTheme(theme) {
    document.documentElement.style.setProperty('--theme-color', theme.hex);
    document.documentElement.style.setProperty(
      '--theme-color-light',
      `rgba(${theme.rgb.r}, ${theme.rgb.g}, ${theme.rgb.b}, 0.5)`,
    );
    document.documentElement.style.setProperty(
      '--theme-color-lighter',
      `rgba(${theme.rgb.r}, ${theme.rgb.g}, ${theme.rgb.b}, 0.3)`,
    );
    document.documentElement.style.setProperty(
      '--theme-color-lightest',
      `rgba(${theme.rgb.r}, ${theme.rgb.g}, ${theme.rgb.b}, 0.1)`,
    );
  }

  return (
    <React.Fragment>
      <Header Data={data} OnLanguageChange={onLanguageChange} />
      <div className="page-content">
        <Profile Data={data} />
        <About Data={data} />
        <Skill Data={data} />
        <Experience Data={data} />
        <Education Data={data} />
        <Project Data={data} />
        <Contact Data={data} />
      </div>
      <Footer Data={data} />
    </React.Fragment>
  );
}

export default App;
