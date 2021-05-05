import React, { useContext, useEffect } from 'react';
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
import 'antd/dist/antd.css';
import { changeAntdTheme } from 'mini-dynamic-antd-theme';
import Data from './components/Data';

function App() {
  const [theme] = useContext(ThemeContext);

  useEffect(() => {
    if (theme) {
      changeAntdTheme(theme.hex);
      changeTheme(theme);
    } else {
      // changeAntdTheme('#00bfa5');
      console.log(Data.defaultThemeColor);
      localStorage.setItem(
        'portfolio-theme',
        JSON.stringify(Data.defaultThemeColor),
      );
      changeAntdTheme('#cc0000');
      changeTheme(Data.defaultThemeColor);
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
      <Header />
      <div className="page-content">
        <Profile />
        <About />
        <Skill />
        <Experience />
        <Education />
        <Project />
        <Contact />
      </div>
      <Footer />
    </React.Fragment>
  );
}

export default App;
