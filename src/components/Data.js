import React from 'react';
import {
  FaBootstrap,
  FaGithub,
  FaGitlab,
  FaGithubAlt,
  FaNode,
  FaReact,
  FaVuejs,
  FaNodeJs,
} from 'react-icons/fa';
import {
  SiCss3,
  SiJavascript,
  SiJquery,
  SiMysql,
  SiMongodb,
  SiCsharp,
} from 'react-icons/si';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
import { RiFacebookCircleFill } from 'react-icons/ri';
import { IconContext } from 'react-icons';
import { ImMail4 } from 'react-icons/im';
import moment from 'moment';
import HumanizeDuration from 'humanize-duration';

const skillIconSize = '4rem';

const getExperienceDuration = (units = ['y', 'mo']) => {
  let starts = moment('2018-08-16');
  let ends = moment();

  let duration = moment.duration(ends.diff(starts));

  return HumanizeDuration(duration, {
    units: units,
    round: true,
    delimiter: ' and ',
  });
};

const defaultThemeColor = {
  hsl: {
    h: 0,
    s: 1,
    l: 0.4,
    a: 1,
  },
  hex: '#cc0000',
  rgb: {
    r: 204,
    g: 0,
    b: 0,
    a: 1,
  },
  hsv: {
    h: 0,
    s: 1,
    v: 0.8,
    a: 1,
  },
  oldHue: 352.71844660194176,
  source: 'hex',
};

const about = {
  name: 'Luis Arias',
  details: (
    <React.Fragment>
      <p>
        I'm a professional full-stack since 2008 I really like looking for
        perfection in everything I do.
      </p>
      <ul>
        <li>✓ Process automation.</li>
        <li>✓ Full-stack.</li>
        <li>✓ NodeJS, NestJS, React, Angular</li>
        <li>✓ Framework .NET (C#, VB)</li>
        <li>✓ Typescript, javascript, jQuery</li>
        <li>✓ Database (SQL, Mysql, PostgreSQL, MongoDB, sqlite)</li>
        <li>✓ PHP, Python.</li>
      </ul>
      <p>
        I have been creating, designing, fixing and editing software over 12
        years, I have worked for a large company as a software engineer and now
        I'm starting my own startup.
      </p>
      <p>
        I have created, developed, invented and implement lot of automation
        processes, applications, web sites, excel documents and google
        spreadsheet using scripting and tailored scripts. I also have a good eye
        for design.
      </p>
      <p>
        I specialize in creating simple solutions to complex problems and I have
        a real skill for making my software easy to operate adding
        configurations and useful documentation too. I believe a well designed
        solution will not only look a lot nicer but will be much easier to
        understand and operate.
      </p>
      <p>
        I have worked with clients around the world. I have no problem doing
        business with any location . I can help you to develop or improve
        software for your business.
      </p>
    </React.Fragment>
  ),
  phone: '8735-3483',
  email: 'ariassd@gmail.com',
  address: 'El Roble, Heredia, CR',
  university: 'Universidad Nacional de Costa Rica',
  github: 'https://github.com/ariassd',
  googleEmbeddedMapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.3263166936113!2d-84.15768331774679!3d10.072325737623318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA0JzIwLjQiTiA4NMKwMDknMjIuMSJX!5e0!3m2!1sen!2scr!4v1620427865488!5m2!1sen!2scr',
  hideCv: true,
  hidePhone: true,
  hideEmail: true,
  hideMap: true,
  cv: '',
  formspree: 'https://formspree.io/f/xzbydyqb',
  taglines: [
    'FULL STACK DEVELOPER',
    'WEB APPLICATION DEVELOPER',
    'SOFTWARE ENGINEER',
  ],
};

const skills = [
  {
    title: 'NestJS',
    icon: (
      <IconContext.Provider value={{ size: skillIconSize, color: '#7377AD' }}>
        <FaNodeJs />
      </IconContext.Provider>
    ),
  },

  {
    title: 'JavaScript',
    icon: (
      <IconContext.Provider value={{ size: skillIconSize, color: '#E1CC1B' }}>
        <SiJavascript />
      </IconContext.Provider>
    ),
  },
  {
    title: 'React.js',
    icon: (
      <IconContext.Provider value={{ size: skillIconSize, color: '#31B2FB' }}>
        <FaReact />
      </IconContext.Provider>
    ),
  },
  {
    title: 'Vue.js',
    icon: (
      <IconContext.Provider value={{ size: skillIconSize, color: '#42B983' }}>
        <FaVuejs />
      </IconContext.Provider>
    ),
  },
  {
    title: 'Node.js',
    icon: (
      <IconContext.Provider value={{ size: skillIconSize, color: '#5C9553' }}>
        <FaNode />
      </IconContext.Provider>
    ),
  },
  {
    title: 'jQuery',
    icon: (
      <IconContext.Provider value={{ size: skillIconSize, color: '#0769AD' }}>
        <SiJquery />
      </IconContext.Provider>
    ),
  },
  {
    title: '.net framework',
    icon: (
      <IconContext.Provider value={{ size: skillIconSize, color: '#0769AD' }}>
        <SiCsharp />
      </IconContext.Provider>
    ),
  },
  {
    title: 'MySQL',
    icon: (
      <IconContext.Provider value={{ size: skillIconSize, color: '#4479A1' }}>
        <SiMysql />
      </IconContext.Provider>
    ),
  },
  {
    title: 'MongoDB',
    icon: (
      <IconContext.Provider value={{ size: skillIconSize, color: '#4479A1' }}>
        <SiMongodb />
      </IconContext.Provider>
    ),
  },
  {
    title: 'GitHub',
    icon: (
      <IconContext.Provider value={{ size: skillIconSize, color: '#F44D27' }}>
        <FaGithubAlt />
      </IconContext.Provider>
    ),
  },
  {
    title: 'GitLab',
    icon: (
      <IconContext.Provider value={{ size: skillIconSize, color: '#F44D27' }}>
        <FaGitlab />
      </IconContext.Provider>
    ),
  },
  {
    title: 'CSS',
    icon: (
      <IconContext.Provider value={{ size: skillIconSize, color: '#2862E9' }}>
        <SiCss3 />
      </IconContext.Provider>
    ),
  },

  {
    title: 'Bootstrap',
    icon: (
      <IconContext.Provider value={{ size: skillIconSize, color: '#533B78' }}>
        <FaBootstrap />
      </IconContext.Provider>
    ),
  },
];

const projects = [
  {
    title: 'Easy CSV 2 JSON',
    thumbnail: process.env.PUBLIC_URL + '/assets/img/npm.jpeg',
    images: [process.env.PUBLIC_URL + '/assets/img/npm.jpeg'],
    skills: [
      {
        title: 'Typescript.js',
        color: '#31B2FB',
      },
      {
        title: 'Node.js',
        color: '#5C9553',
      },
    ],
    categories: ['Package'],
    description: (
      <React.Fragment>Convert from simple CSV file to JSON </React.Fragment>
    ),
    links: [
      {
        title: 'Homepage',
        url: 'https://github.com/ariassd/easy-csv2json',
      },
      {
        title: 'NPM',
        url: 'https://www.npmjs.com/package/easy-csv2json',
      },
    ],
  },
  {
    title: 'Easy JSON Diff',
    thumbnail: process.env.PUBLIC_URL + '/assets/img/npm.jpeg',
    images: [process.env.PUBLIC_URL + '/assets/img/npm.jpeg'],
    skills: [
      {
        title: 'Typescript.js',
        color: '#31B2FB',
      },
      {
        title: 'Node.js',
        color: '#5C9553',
      },
    ],
    categories: ['Package'],
    description: (
      <React.Fragment>
        Get differences between two object instances
      </React.Fragment>
    ),
    links: [
      {
        title: 'Homepage',
        url: 'https://github.com/ariassd/easy-json-diff',
      },
    ],
  },
  {
    title: 'Easy postman 2 markdown',
    thumbnail: process.env.PUBLIC_URL + '/assets/img/npm.jpeg',
    images: [process.env.PUBLIC_URL + '/assets/img/npm.jpeg'],
    skills: [
      {
        title: 'Typescript.js',
        color: '#31B2FB',
      },
      {
        title: 'Node.js',
        color: '#5C9553',
      },
    ],
    categories: ['Package'],
    description: (
      <React.Fragment>
        The easiest way to generate a markdown document from postman.
      </React.Fragment>
    ),
    links: [
      {
        title: 'Homepage',
        url: 'https://github.com/ariassd/easy-postman2md',
      },
      {
        title: 'NPM',
        url: 'https://www.npmjs.com/package/easy-postman2md',
      },
    ],
  },
  {
    title: 'Crypto animal font',
    thumbnail:
      'https://github.com/ariassd/crypto-animal-font/raw/master/assets/ancient-egypt-banner.png',
    images: [
      'https://github.com/ariassd/crypto-animal-font/raw/master/assets/ancient-egypt-banner.png',
    ],
    skills: [
      {
        title: 'FontLab7',
        color: '#31B2FB',
      },
    ],
    categories: ['Other'],
    description: (
      <React.Fragment>
        This font becomes alphabet characters into symbols. Easy to use and
        funny for kids and school projects. The english ordered version uses
        animals matching the first letter of their name.
      </React.Fragment>
    ),
    links: [
      {
        title: 'Homepage',
        url: 'https://github.com/ariassd/crypto-animal-font',
      },
    ],
  },
  {
    title: 'Snack Query Builder NPM',
    thumbnail: process.env.PUBLIC_URL + '/assets/img/npm.jpeg',
    images: [process.env.PUBLIC_URL + '/assets/img/npm.jpeg'],
    skills: [
      {
        title: 'Typescript.js',
        color: '#31B2FB',
      },
      {
        title: 'Node.js',
        color: '#5C9553',
      },
    ],
    categories: ['Package'],
    description: (
      <React.Fragment>
        Snack Query Builder NPM is just a helper useful to build SQL Queries
        directly from typescript using clear and easy to understand syntax.
      </React.Fragment>
    ),
    links: [
      {
        title: 'Homepage',
        url: 'https://github.com/ariassd/snack-query-builder',
      },
      {
        title: 'NPM',
        url: 'https://www.npmjs.com/package/snack-query-builder',
      },
    ],
  },
  {
    title: 'NestJS Date format interceptor',
    thumbnail: process.env.PUBLIC_URL + '/assets/img/npm.jpeg',
    images: [process.env.PUBLIC_URL + '/assets/img/npm.jpeg'],
    skills: [
      {
        title: 'Typescript.js',
        color: '#31B2FB',
      },
      {
        title: 'Nest.js',
        color: '#5C9553',
      },
    ],
    categories: ['Package'],
    description: (
      <React.Fragment>
        Snack Query Builder NPM is just a helper useful to build SQL Queries
        directly from typescript using clear and easy to understand syntax.
      </React.Fragment>
    ),
    links: [
      {
        title: 'Homepage',
        url: 'https://github.com/ariassd/nestjs-date-format-interceptor',
      },
      {
        title: 'NPM',
        url: 'https://www.npmjs.com/package/nestjs-date-format-interceptor',
      },
    ],
  },
  {
    title: 'Numbers To Words Spanish',
    thumbnail: process.env.PUBLIC_URL + '/assets/img/csharp.png',
    images: [process.env.PUBLIC_URL + '/assets/img/csharp.png'],
    skills: [
      {
        title: 'C#',
        color: '#31B2FB',
      },
      {
        title: '.NET',
        color: '#5C9553',
      },
    ],
    categories: ['.NET'],
    description: (
      <React.Fragment>
        Spanish <br />
        This is a Decimal class extension to convert numbers to text, useful for
        banks and financial apps.
      </React.Fragment>
    ),
    links: [
      {
        title: 'Homepage',
        url: 'https://github.com/ariassd/NumberToWords',
      },
    ],
  },
  {
    title: 'Address book',
    thumbnail: process.env.PUBLIC_URL + '/assets/img/csharp.png',
    images: [process.env.PUBLIC_URL + '/assets/img/csharp.png'],
    skills: [
      {
        title: 'C#',
        color: '#31B2FB',
      },
      {
        title: '.NET',
        color: '#5C9553',
      },
    ],
    categories: ['.NET'],
    description: (
      <React.Fragment>
        Simple address book made with Visual Studio for Mac (Community) and
        MongoDB. This project doesn't have any type of security in this first
        version.
      </React.Fragment>
    ),
    links: [
      {
        title: 'Homepage',
        url: 'https://github.com/ariassd/AddressBook',
      },
    ],
  },
  {
    title: 'ScreenDraw 1.0 For Windows',
    thumbnail: process.env.PUBLIC_URL + '/assets/img/csharp.png',
    images: [process.env.PUBLIC_URL + '/assets/img/csharp.png'],
    skills: [
      {
        title: 'C#',
        color: '#31B2FB',
      },
      {
        title: '.NET',
        color: '#5C9553',
      },
    ],
    categories: ['.NET'],
    description: (
      <React.Fragment>
        Simple screen draw application. Draw directly on screen, make a screen
        shoot and save results on desktop folder.
      </React.Fragment>
    ),
    links: [
      {
        title: 'Homepage',
        url: 'https://github.com/ariassd/ScreenDraw',
      },
    ],
  },
  {
    title: 'Terminal loader',
    thumbnail: process.env.PUBLIC_URL + '/assets/img/vscode.png',
    images: [process.env.PUBLIC_URL + '/assets/img/vscode.png'],
    skills: [
      {
        title: 'typescript',
        color: '#31B2FB',
      },
      {
        title: 'VSCode',
        color: '#5C9553',
      },
    ],
    categories: ['VS Code'],
    description: (
      <React.Fragment>
        This extension allow to open multiple terminals stacked side by side and
        run a different command on each one. Perfect to work in a workspace with
        multiple projects.
      </React.Fragment>
    ),
    links: [
      {
        title: 'Homepage',
        url: 'https://github.com/ariassd/vscode-load-terminals',
      },
      {
        title: 'Visual Studio',
        url:
          'https://marketplace.visualstudio.com/items?itemName=ariassd.terminal-loader',
      },
    ],
  },
];

const experiences = [
  {
    company: 'Gamanza Costa Rica',
    from: '2020',
    to: 'present',
    position: 'Senior Back end developer',
    responsibilities: [
      'Gamanza CRM',
      'Typescript, NestJs, NodeJs, MongoDb, Postgre, Rabbit',
    ],
  },
  {
    company: 'Creative Drive',
    from: '2018',
    to: '2020',
    position: 'Senior .NET Back end developer ',
    responsibilities: [
      'Develop software for PROCOMER Costa Rica.',
      'C#, AppFabric, Microservices, SQL Server, XML, Angular, jQuery, Mvc .NET',
    ],
  },
  {
    company: 'Corporación BCT S.A ',
    from: '2008',
    to: '2018',
    position: 'Senior Software engineer',
    responsibilities: [
      'Develop, support, improvements and continuous integration of the on-line banking system. ',
      'Technologies: VB.NET, C#, SQL Server, XML, HTML, Javascript, jQuery, MVC .NET, iOS',
    ],
  },
  {
    company: 'Sysde Costa Rica',
    from: '2007',
    to: '2008',
    position: 'Software developer',
    responsibilities: [
      'Development and maintenance of e-marketing web systems in Costa Rica and Mexico',
      'Technologies: CMS, Sql Server, C#, ASP, HTML',
    ],
  },
];

const education = [
  {
    institution: 'Centro Cultural de Idiomas',
    from: '2017',
    to: '2019',
    degree: 'Speaking english, Level 12 ( level: 60% )',
    info: [
      {
        title: 'TOEIC',
        value: 'B1',
      },
    ],
  },
  {
    institution: 'New horizons',
    from: '2015',
    to: '2015',
    degree: 'Certification: in HTML5, CSS, Javascript and MVC.net',
    info: [
      {
        title: undefined,
        value: undefined,
      },
    ],
  },
  {
    institution: 'Cenfotec',
    from: '2009',
    to: '2009',
    degree: 'Certification: XML with Visual Studio',
    info: [
      {
        title: undefined,
        value: undefined,
      },
    ],
  },
  {
    institution: 'Universidad Nacional de Costa Rica',
    from: '2004',
    to: '2008',
    degree: 'System engineer',
    info: [
      {
        title: undefined,
        value: undefined,
      },
    ],
  },
  {
    institution: 'Liceo El Roble',
    from: '1997',
    to: '2002',
    degree: 'Secondary studies',
    info: [
      {
        title: undefined,
        value: undefined,
      },
    ],
  },
  {
    institution: 'Liceo El Roble',
    from: '1990',
    to: '1996',
    degree: 'Primary studies',
    info: [
      {
        title: undefined,
        value: undefined,
      },
    ],
  },
];

const socialLinks = [
  {
    title: 'linkedin',
    icon: (
      <IconContext.Provider value={{ size: '1.9rem' }}>
        <TiSocialLinkedinCircular />
      </IconContext.Provider>
    ),
    link: 'https://www.linkedin.com/in/ariassd/',
  },
  {
    title: 'github',
    icon: (
      <IconContext.Provider value={{ size: '1.4rem' }}>
        <FaGithub />
      </IconContext.Provider>
    ),
    link: about.github,
  },
  {
    title: 'facebook',
    icon: (
      <IconContext.Provider value={{ size: '1.5rem' }}>
        <RiFacebookCircleFill />
      </IconContext.Provider>
    ),
    link: 'https://www.facebook.com/ariassl',
  },
  {
    title: 'email',
    icon: (
      <IconContext.Provider value={{ size: '1.4rem' }}>
        <ImMail4 />
      </IconContext.Provider>
    ),
    link: `mailto:${about.email}`,
  },
];

const Data = {
  defaultThemeColor,
  about,
  skills,
  projects,
  experiences,
  education,
  socialLinks,
  getExperienceDuration,
};

export default Data;
