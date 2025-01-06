import React, { useContext, useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Header from './components/Header';
import Profile from './components/Profile';
import Project from './components/Project';
import Printable from './components/Printable/Printable';
import Skill from './components/Skill';
import { ThemeContext } from './contexts/ThemeContext';
import 'antd/dist/reset.css';
import { changeAntdTheme } from 'mini-dynamic-antd-theme';
import { Languages } from './components/Data';
import { I18 } from './i18/i18';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useLocalStorage } from './hooks/useLocalStorage';

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const [theme] = useContext(ThemeContext);
  const [language, setLanguage] = useLocalStorage('language', 'EN');
  const [data, setData] = useState(Languages.EN);
  const [i18, setI18] = useState(I18.EN);

  const location = useLocation();
  const showHeaderFooter = location.pathname !== '/print';

  const onLanguageChange = (language) => {
    if (language === 'ES') {
      setLanguage(language);
    } else {
      setLanguage('EN');
    }
  };

  useEffect(() => {
    if (language === 'ES') {
      setData(Languages.ES);
      setI18(I18.ES);
    } else {
      setData(Languages.EN);
      setI18(I18.EN);
    }
  }, [language]);

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
      {showHeaderFooter && (
        <Header Data={data} i18={i18} OnLanguageChange={onLanguageChange} />
      )}

      <div className="page-content">
        <Routes>
          <Route path="/" element={<LandingPage Data={data} i18={i18} />} />
          <Route path="/print" element={<Printable Data={data} i18={i18} />} />
        </Routes>
      </div>

      {showHeaderFooter && <Footer Data={data} i18={i18} />}
    </React.Fragment>
  );
};

const LandingPage = ({ Data, i18 }) => {
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

export default App;
