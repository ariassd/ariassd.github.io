import moment from 'moment';
import React from 'react';
import { IconContext } from 'react-icons';
import { BiDonateHeart } from 'react-icons/bi';
import {
  FaBootstrap,
  FaGithubAlt,
  FaGitlab,
  FaNode,
  FaReact,
  FaVuejs,
  FaBalanceScaleRight,
  FaGraduationCap,
  FaFont,
} from 'react-icons/fa';
import { SiNestjs, SiConfluence } from 'react-icons/si';
import { DiScrum, DiJira } from 'react-icons/di';
import { GiArcheryTarget, GiOpenBook, GiCompass } from 'react-icons/gi';
import { FaHandsHoldingChild, FaBinoculars } from 'react-icons/fa6';
import { LuBrainCircuit } from 'react-icons/lu';
import { TbClockDollar, TbBrandCSharp } from 'react-icons/tb';
import { CgWebsite } from 'react-icons/cg';
import {
  SiCss3,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiNpm,
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';

const getExperienceDuration = () => {
  return `${getExperienceDurationNumber()}+ years of experience`;
};

const getExperienceDurationNumber = () => {
  const starts = moment('2008-08-16');
  const ends = moment();
  const duration = moment.duration(ends.diff(starts));
  const years = Math.floor(duration.asYears());
  return years;
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
  details: (
    <React.Fragment>
      <p>
        I&apos;m a professional full-stack since 2008 I really like looking for
        perfection in everything I do.
      </p>
      <ul>
        <li>✓ Leadership.</li>
        <li>✓ Mentoring.</li>
        <li>✓ Process automation.</li>
        <li>✓ Full-stack developer.</li>
        <li>✓ NodeJS, NestJS, React, Angular</li>
        <li>✓ Framework .NET (C#, VB)</li>
        <li>✓ Typescript, javascript, jQuery</li>
        <li>✓ Database (SQL, Mysql, PostgreSQL, MongoDB, sqlite)</li>
        <li>✓ Others like PHP, Python.</li>
      </ul>
      <p>
        I have been creating, designing, fixing and editing software over{' '}
        {getExperienceDurationNumber()}+ years, Nowadays I am part of the
        leadership team and I&apos;m working with cutting edge technologies in a
        innovative company with operations center in Costa Rica, which is part
        of a big company located in Switzerland.
      </p>
      <p>
        I have created, developed and implement lot of automation processes,
        applications, web sites, excel documents and google spreadsheet using
        tailored scripting.
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
        business with any location. I can help you to develop or improve
        software for your business.
      </p>
      <p></p>
    </React.Fragment>
  ),
  languages: [
    { name: 'English', level: 'B2+' },
    { name: 'Spanish', level: 'Native' },
  ],
  taglines: [
    'Full stack developer',
    'Web application developer',
    'Engineer manager',
    'Software architecture',
  ],
  paymentMethods: {
    crypto: {
      show: false,
      accounts: [
        {
          type: 'Bitcoin',
          account: 'bc1qm2k9phlp77fnxa03zkhauh27r4yt9l5sn02zmc',
        },
        {
          type: 'Ethereum',
          account: '0x19d80C9c24002FCFd038d5Abee30766472fDF621',
        },
      ],
    },
    donate: {
      show: true,
      accounts: [
        {
          title: "Keep moving forward! I'll support you",
          type: 'Paypal',
          account: 'https://paypal.me/LuisAriasCR?country.x=CR&locale.x=en_US',
          icon: (
            <IconContext.Provider value={{ size: '1.9rem' }}>
              <BiDonateHeart />
            </IconContext.Provider>
          ),
        },
      ],
    },
  },
};

const skills = [
  {
    type: 'soft',
    title: 'Leadership',
    iconColor: '#FF5733',
    skillQualification: 5,
    icon: <GiCompass />,
  },
  {
    type: 'soft',
    title: 'Team building',
    iconColor: '#1E90FF',
    skillQualification: 7,
    icon: <FaHandsHoldingChild />,
  },
  {
    type: 'soft',
    title: 'Resilient',
    iconColor: '#6A5ACD',
    skillQualification: 9,
    icon: <LuBrainCircuit />,
  },
  {
    type: 'soft',
    title: 'Problem solving',
    iconColor: '#FFD700',
    skillQualification: 9,
    icon: <GiArcheryTarget />,
  },
  {
    type: 'soft',
    title: 'Work Ethic',
    iconColor: '#8B4513',
    skillQualification: 10,
    icon: <FaBalanceScaleRight />,
  },
  {
    type: 'soft',
    title: 'Transparency',
    iconColor: '#00CED1',
    skillQualification: 10,
    icon: <GiOpenBook />,
  },
  {
    type: 'soft',
    title: 'Time management',
    iconColor: '#FF4500',
    skillQualification: 8,
    icon: <TbClockDollar />,
  },
  {
    type: 'soft',
    title: 'Curiosity',
    iconColor: '#7B68EE',
    skillQualification: 10,
    icon: <FaBinoculars />,
  },
  {
    type: 'soft',
    title: 'Continuous learning',
    iconColor: '#4682B4',
    skillQualification: 7,
    icon: <FaGraduationCap />,
  },
  {
    type: 'hard',
    title: 'SCRUM',
    iconColor: '#007ACC',
    skillQualification: 7,
    icon: <DiScrum />,
  },
  {
    type: 'hard',
    title: 'Jira',
    iconColor: '#0052CC',
    skillQualification: 7,
    icon: <DiJira />,
  },
  {
    type: 'hard',
    title: ' Confluence',
    iconColor: '#172B4D',
    skillQualification: 8,
    icon: <SiConfluence />,
  },

  {
    type: 'hard',
    title: 'NestJS',
    iconColor: '#E0234E',
    skillQualification: 7,
    icon: <SiNestjs />,
  },
  {
    type: 'hard',
    title: 'JavaScript',
    iconColor: '#E1CC1B',
    skillQualification: 8,
    icon: <SiJavascript />,
  },
  {
    type: 'hard',
    title: 'React.js',
    iconColor: '#31B2FB',
    skillQualification: 6,
    icon: <FaReact />,
  },
  {
    type: 'hard',
    title: 'Vue.js',
    iconColor: '#42B983',
    skillQualification: 4,
    icon: <FaVuejs />,
  },
  {
    type: 'hard',
    title: 'Node.js',
    iconColor: '#5C9553',
    skillQualification: 8,
    icon: <FaNode />,
  },
  {
    type: 'hard',
    title: 'jQuery',
    iconColor: '#0769AD',
    skillQualification: 7,
    icon: <SiJquery />,
  },
  {
    type: 'hard',
    title: '.net framework',
    iconColor: '#0769AD',
    skillQualification: 5,
    icon: <TbBrandCSharp />,
  },
  {
    type: 'hard',
    title: 'MySQL',
    iconColor: '#4479A1',
    skillQualification: 4,
    icon: <SiMysql />,
  },
  {
    type: 'hard',
    title: 'MongoDB',
    iconColor: '#4479A1',
    skillQualification: 7,
    icon: <SiMongodb />,
  },
  {
    type: 'hard',
    title: 'GitHub',
    iconColor: '#F44D27',
    skillQualification: 8,
    icon: <FaGithubAlt />,
  },
  {
    type: 'hard',
    title: 'GitLab',
    iconColor: '#F44D27',
    skillQualification: 8,
    icon: <FaGitlab />,
  },
  {
    type: 'hard',
    title: 'CSS',
    iconColor: '#2862E9',
    skillQualification: 6,
    icon: <SiCss3 />,
  },
  {
    type: 'hard',
    title: 'Bootstrap',
    iconColor: '#533B78',
    skillQualification: 6,
    icon: <FaBootstrap />,
  },
];

const projects = [
  {
    title: 'Easy Portforward',
    thumbnail: process.env.PUBLIC_URL + '/assets/img/npm.jpeg',
    images: [
      process.env.PUBLIC_URL +
        '/assets/img/projects/easy-portforward/screenshot.png',
    ],
    icon: <SiNpm />,
    skills: [
      {
        title: 'express, websocket',
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
        This is a tiny tool installed via npm that allows you to manage and
        connect kubernetes services using port forward in an easy way.
      </React.Fragment>
    ),
    links: [
      {
        title: 'Homepage',
        url: 'https://github.com/ariassd/easy-portforward',
      },
      {
        title: 'NPM',
        url: 'https://www.npmjs.com/package/easy-portforward',
      },
    ],
  },
  {
    title: 'Techoryze platform',
    thumbnail: process.env.PUBLIC_URL + '/assets/img/projects/techoryze/sm.png',
    icon: <CgWebsite />,
    images: [
      process.env.PUBLIC_URL + '/assets/img/projects/techoryze/sc1.png',
      process.env.PUBLIC_URL + '/assets/img/projects/techoryze/sc2.png',
      process.env.PUBLIC_URL + '/assets/img/projects/techoryze/sc3.png',
    ],
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
    categories: ['Web site'],
    description: (
      <React.Fragment>
        <p>
          Techoryze Delivers the Real-Time Learning Support Needed by Educators
          to Accelerate Technology Use in the Classroom
        </p>
        <p>
          Techoryze was started to solve a simple problem: to make technology
          easier for educators. More than 80% think they don&apos;t get enough
          technology professional development. This limits their ability to
          integrate technology into their curriculum, and to support their
          students in becoming more tech-savvy.
        </p>
      </React.Fragment>
    ),
    links: [
      {
        title: 'Homepage',
        url: 'http://www.techoryze.com',
      },
    ],
  },
  {
    title: 'Easy CSV 2 JSON',
    thumbnail: process.env.PUBLIC_URL + '/assets/img/npm.jpeg',
    images: [process.env.PUBLIC_URL + '/assets/img/npm.jpeg'],
    icon: <SiNpm />,
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
        Convert from simple CSV file to JSON. With this powerful tool you will
        be able to process CSV files and make calculations in seconds
      </React.Fragment>
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
    title: 'Easy ws api proxy',
    thumbnail: process.env.PUBLIC_URL + '/assets/img/npm.jpeg',
    images: [process.env.PUBLIC_URL + '/assets/img/npm.jpeg'],
    icon: <SiNpm />,
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
        This package will help you to send requests to socket.io using a simple
        API rest. Useful for development proposes, using this tool you can send
        socket.io requests from postman or similar tools and get the result
      </React.Fragment>
    ),
    links: [
      {
        title: 'Homepage',
        url: 'github.com/ariassd/easy-wsapiproxy',
      },
      {
        title: 'NPM',
        url: 'https://www.npmjs.com/package/easy-wsapiproxy',
      },
    ],
  },
  {
    title: 'Easy JSON Diff',
    thumbnail: process.env.PUBLIC_URL + '/assets/img/npm.jpeg',
    images: [process.env.PUBLIC_URL + '/assets/img/npm.jpeg'],
    icon: <SiNpm />,
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
    icon: <SiNpm />,
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
        The easiest way to generate a markdown document from postman
        documentation, with this tool you also apply stylish and customization
        to your documents.
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
    icon: <FaFont />,
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
    icon: <SiNpm />,
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
    icon: <SiNestjs />,
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
        This plugin allows you to intercept dates and format them in multiple
        ways
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
    icon: <TbBrandCSharp />,
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
    icon: <TbBrandCSharp />,
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
        MongoDB. This project doesn&apos;t have any type of security in this
        first version.
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
    icon: <TbBrandCSharp />,
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
    icon: <VscVscode />,
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
        url: 'https://marketplace.visualstudio.com/items?itemName=ariassd.terminal-loader',
      },
    ],
  },
];

const experiences = [
  {
    company: 'Gamanza Costa Rica',
    from: '2021',
    to: 'present',
    position: 'Leadership',
    responsibilities: [
      '✓ Team management',
      '✓ Decision making process',
      '✓ Software architecture',
      '✓ Gamanza Gamification system implementation',
      '✓ Gamanza CRM system implementation',
      '✓ Typescript, NestJs, NodeJs, MongoDb, Postgre, Rabbit',
    ],
  },
  {
    company: 'Gamanza Costa Rica',
    from: '2020',
    to: '2021',
    position: 'Senior Back end developer',
    responsibilities: [
      '✓ Gamanza CRM system implementation',
      '✓ Typescript, NestJs, NodeJs, MongoDb, Postgre, Rabbit',
    ],
  },
  {
    company: 'Techoryze',
    from: '2021',
    to: '2021',
    position: 'Full stack developer ( freelance )',
    responsibilities: [
      '✓ Techoryze platform design and implementation https://techoryze.com',
      '✓ Typescript, NestJs, ReactJs, MongoDb',
    ],
  },
  {
    company: 'Creative Drive',
    from: '2018',
    to: '2020',
    position: 'Senior .NET Back end developer ',
    responsibilities: [
      '✓ Develop software for PROCOMER Costa Rica.',
      '✓ C#, AppFabric, Microservices, SQL Server, XML, Angular, jQuery, Mvc .NET',
    ],
  },
  {
    company: 'Corporación BCT S.A ',
    from: '2008',
    to: '2018',
    position: 'Senior Software engineer / software architect',
    responsibilities: [
      '✓ Develop, software design, support, improvements and continuous integration of the on-line banking system.',
      '✓ Technologies: VB.NET, C#, SQL Server, XML, HTML, Javascript, jQuery, MVC .NET, iOS',
    ],
  },
  {
    company: 'Sysde Costa Rica',
    from: '2007',
    to: '2008',
    position: 'Software developer',
    responsibilities: [
      '✓ Develop and maintenance of e-marketing in Costa Rica and Mexico',
      '✓ Technologies: CMS, Sql Server, C#, ASP, HTML',
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

const references = [
  {
    name: 'Leonardo Monge',
    contact: '+506 8706-8185',
    position: 'Engineer Manager @ Gamanza Costa Rica',
    from: 2022,
    to: 'current',
    company: 'Gamanza Engage',
    relationShip:
      'I worked side by side with Leonardo making decisions, planning and supporting the gamification platform for Gamanza',
  },
  {
    name: 'Evans García Sánchez',
    contact: '+506 8740-0111',
    position: 'Project Manager @ Creative Drive',
    from: 2020,
    to: 2020,
    company: 'Creative Drive',
    relationShip:
      'I Worked with Evans in Creative Drive and I reported the status of issues, changes and advance of the system',
  },
  {
    name: 'Orlando Solano',
    contact: '+506 8730-2461',
    position: 'Project Manager @ Grupo LAFISE San José CR',
    from: 2008,
    to: 2017,
    company: 'Banco BCT S.A',
    relationShip:
      'Firstly I worked side by side with Orlando in the department of Online Banking, later Orlando become a manager',
  },
  {
    name: 'Lisette Ureña Porras',
    contact: '+506 8386-0430',
    position: 'Teacher @ UNED',
    from: 2008,
    to: 2015,
    company: 'Banco BCT S.A',
    relationShip:
      'Lisette was a coworker on different department in BCT, I worked side by side with her integrating the online banking and core systems',
  },
  {
    name: 'Marco Campos Quesada',
    contact: '+506 8371-7988',
    position: 'Project Manager, Scrum master @ IBM',
    from: 2008,
    to: 2010,
    company: 'Banco BCT S.A',
    relationShip:
      'Marco Campos was the manager of the Online Banking department, I worked with Marco maintaining such system',
  },
];

const DataEn = {
  defaultThemeColor,
  about,
  skills,
  projects,
  experiences,
  education,
  getExperienceDuration,
  references,
};

export default DataEn;
