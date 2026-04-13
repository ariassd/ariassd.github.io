import moment from 'moment';
import React from 'react';

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
  FaCss3Alt
} from 'react-icons/fa';
import { SiNestjs, SiConfluence } from 'react-icons/si';
import { HiChatAlt2 } from 'react-icons/hi';
import { DiScrum, DiJira } from 'react-icons/di';
import { GiArcheryTarget, GiOpenBook, GiCompass } from 'react-icons/gi';
import { FaHandsHoldingChild, FaBinoculars } from 'react-icons/fa6';
import { LuBrainCircuit } from 'react-icons/lu';
import { TbClockDollar, TbBrandCSharp } from 'react-icons/tb';
import { CgWebsite } from 'react-icons/cg';
import {
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
        I am a Senior Full-Stack Engineer and Engineering Manager with {getExperienceDurationNumber()}+ years of experience building scalable software solutions. I specialize in backend development using Node.js and TypeScript, with a strong focus on system design, performance, and maintainability.
      </p>

      <ul>
        <li>✓ Technical leadership and team management</li>
        <li>✓ Mentoring and developer growth</li>
        <li>✓ Process automation and optimization</li>
        <li>✓ Backend architecture (Node.js, NestJS)</li>
        <li>✓ Frontend development (React, Angular)</li>
        <li>✓ .NET ecosystem (C#, VB)</li>
        <li>✓ Databases: PostgreSQL, MySQL, MongoDB</li>
        <li>✓ Cloud, CI/CD, and distributed systems</li>
      </ul>

      <p>
        Throughout my career, I have designed and implemented scalable systems, automation processes, and business-critical applications across multiple industries. I enjoy solving complex problems and transforming them into simple, efficient, and maintainable solutions.
      </p>

      <p>
        I am passionate about building reliable software, improving development processes, and helping teams deliver high-quality products.
      </p>
    </React.Fragment>
  ),
  languages: [
    { name: 'English', level: 'B2+' },
    { name: 'Spanish', level: 'Native' },
  ],
  taglines: [
    'Full stack developer',
    'Web application developer',
    'Software architecture',
    'Freelance'
  ],
};

const skills = [
  {
    type: 'soft',
    title: 'Communication',
    iconColor: '#7B68EE',
    icon: <HiChatAlt2 />,
    skillQualification: 10,
  },
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
    icon: <FaCss3Alt />,
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
    company: 'Freelance',
    from: '2026',
    to: 'present',
    position: 'Full-Stack Engineer / Backend Specialist',
    responsibilities: [
      'Systems & Information Management: Expert in maintaining and updating digital platforms, ensuring high system availability and data accuracy.',
      'Operational Support: Proficient in managing complex digital environments and troubleshooting operational workflows.',
      'Process Automation: Specialized in streamlining repetitive tasks and integrating digital tools to improve organizational efficiency.',
      'Information Architecture: Skilled in organizing, structuring, and maintaining large datasets for easy retrieval and reporting.',
      'Database Auditing & Optimization: Experienced in auditing records and optimizing data storage to ensure information is clean, organized, and reliable.',
      'Performance & Accuracy: Committed to high-speed data processing while maintaining strict quality standards and system reliability.',
    ],
    techStack: [
      '​✓ Full-stack applications: React, Angular, Wordpress',
      '​✓ API design: RESTful services, microservices',
      '​✓ Database: PostgreSQL, MongoDB, MySQL, SQLServer',
      '​✓ Backend development: Node.js, NestJS, RabbitMQ, TypeScript, JavaScript, C#, .NET, Python, PHP'
    ],
  },
  {
    company: 'Gamanza Costa Rica',
    from: '2021',
    to: '2026',
    position: 'Backend developer | Leadership',
    responsibilities: [
      'Team Leadership & Mentoring: Led and mentored teams in the management of CRM and data-heavy systems, overseeing decision-making for complex operational architectures.',
      'System Design Oversight: Responsible for the information architecture and structure of internal systems to ensure long-term data reliability and scalability.',
      'System Oversight: Managed and maintained large-scale data systems, ensuring 100% accuracy in record processing and system reliability.',
      'Workflow Automation: Streamlined data entry and administrative workflows through the implementation of automated digital tools and process integrations.',
      'Reporting & Analysis: Generated detailed operational reports and maintained organized digital archives to support executive decision-making.'
    ],
    techStack: [
      '✓ Core Systems: Gamanza Gamification & CRM Systems.',
      '✓ Database Management: MongoDB, PostgreSQL, Redis.',
      '✓ Backend development: Typescript, NodeJS, NestJS, RabbitMQ, Docker, CI/CD,',
    ],
  },
  {
    company: 'Gamanza Costa Rica',
    from: '2020',
    to: '2021',
    position: 'Senior Back end developer',
    responsibilities: [
      'Systems & Information Management: Expert in maintaining and updating digital platforms, ensuring high system availability and data accuracy.',
      'Operational Support: Proficient in managing complex digital environments and troubleshooting operational workflows.',
      'Process Automation: Specialized in streamlining repetitive tasks and integrating digital tools to improve organizational efficiency.',
      'Information Architecture: Skilled in organizing, structuring, and maintaining large datasets for easy retrieval and reporting.',
      'Database Auditing & Optimization: Experienced in auditing records and optimizing data storage to ensure information is clean, organized, and reliable.',
      'Performance & Accuracy: Committed to high-speed data processing while maintaining strict quality standards and system reliability.',
    ],
    techStack: [
      '✓ Core System: Gamanza CRM System.',
      '✓ Database Management: MongoDB, PostgreSQL, Redis.',
      '✓ Backend development: Typescript, NodeJS, NestJS, RabbitMQ, Docker, CI/CD,',
    ],
  },
  {
    company: 'Techoryze',
    from: '2021',
    to: '2021',
    position: 'Full stack developer ( freelance )',
    responsibilities: [
      'Systems & Information Management: Expert in maintaining and updating digital platforms, ensuring high system availability and data accuracy.',
      'Information Architecture: Skilled in organizing, structuring, and maintaining large datasets for easy retrieval and reporting.',
      'Techoryze platform design and implementation https://techoryze.com',
    ],
    techStack: [
      '✓ Core System: Techoryze help desk design',
      '✓ Database Management: MongoDB, PostgreSQL, Redis.',
      '✓ Backend development: Typescript, NodeJS, NestJS, RabbitMQ, Docker, CI/CD,',
    ],
  },
  {
    company: 'Creative Drive',
    from: '2018',
    to: '2020',
    position: 'Senior .NET Back end developer ',
    responsibilities: [
      'Records Auditing: Responsible for updating and auditing institutional records within PROCOMER\'s governmental platforms.',
      'Data Integrity: Guaranteed data consistency across multiple relational databases and digital filing systems using SQL Server.',
      'Operational Support: Provided technical and operational support in data management to ensure the correct functioning of institutional services.',
      'Archive Optimization: Implemented improvements in digital information organization to facilitate quick access and retrieval.',
    ],
    techStack: [
      '✓ Core System: VUE System PROCOMER Costa Rica.',
      '✓ Database Management: SQL Server',
      '✓ Backend development: C#, AppFabric, Microservices, SQL Server, XML, Angular, jQuery, Mvc .NET',
    ],
  },
  {
    company: 'Corporación BCT S.A ',
    from: '2008',
    to: '2018',
    position: 'Senior Software engineer / software architect',
    responsibilities: [
      'Critical Operational Support: Provided technical and operational support for the online banking system, prioritizing service reliability and information security.',
      'Financial Data Management: Performed high-volume data entry and verification under the strict precision standards of the banking industry.',
      'Systems Maintenance: Ensured record integrity through continuous support and improvements to internal management systems.',
      'Documentation & Quality: Responsible for the auditing and constant updating of relational databases to guarantee the accuracy of financial information.',
    ],
    techStack: [
      '✓ Core System: Enl@ce on-line banking system.',
      '✓ Database Management: SQL Server',
      '✓ Backend development: VB.NET, C#, SQL Server, XML, HTML, Javascript, jQuery, MVC .NET, iOS',
    ],
  },
  {
    company: 'Sysde Costa Rica',
    from: '2007',
    to: '2008',
    position: 'Software developer',
    responsibilities: [
      'Data Cleaning & Migration: Performed extensive data cleansing and validation for Roche client databases within the Siebel CRM platform.',
      'Quality Assurance: Identified and corrected inconsistencies, duplicates, and errors in customer records to ensure high-quality information for marketing campaigns in Costa Rica and Mexico.',
      'Information Maintenance: Managed and updated electronic marketing web systems, focusing on data integrity and system reliability.',
      'Regional Support: Coordinated data management tasks for international accounts, meeting strict accuracy standards for corporate clients.',
    ],
    techStack: [
      '✓ Core System: CMS',
      '✓ Database Management: SQL Server',
      '✓ Backend development: VB.NET, C#, HTML, Javascript, jQuery, MVC .NET, ASP',
    ],
  },
];

const education = [
  {
    institution: 'Universidad Estatal a Distancia (UNED)',
    from: '2026',
    to: 'Present',
    degree: 'Diploma in computer science',
    category: 'University',
    certificate: [
      {
        title: 'Diploma',
        value: 'In Progress',
      },
    ],
    images: ['/assets/img/education/uned.png'],
  },
  {
    institution: 'Udemy',
    from: '2025',
    to: '2025',
    degree: 'Continous education courses',
    category: 'Technology',
    certificate: [
      {
        title: 'Certificate',
        value: 'Python Flask: Make Web Apps with Python',
      },
      {
        title: 'Certificate',
        value: 'Javscript Essentials for Node-RED',
      },
      {
        title: 'Certificate',
        value: 'Mastering C++ Programming for beginners',
      },
      {
        title: 'Certificate',
        value: 'Aprende Lenguaje C de CERO a EXPERTO',
      },
    ],
    images: ['/assets/img/education/udemy.png'],
  },
  {
    institution: 'Cisco Netacad',
    from: '2025',
    to: '2025',
    degree: 'Continuing education course',
    category: 'Technology',
    certificate: [
      {
        title: 'Certificate',
        value: 'English for IT 1',
      },
      {
        title: 'Certificate',
        value: 'Introduction to data cience',
      },
    ],
    images: ['/assets/img/education/cisco_netacad.png'],
  },
  {
    institution: 'Centro Cultural de Idiomas',
    from: '2017',
    to: '2019',
    degree: 'Speaking english, Level 12 ( level: 60% )',
    category: 'Languages',
    certificate: [
      {
        title: 'TOEIC',
        value: 'B1',
      },
    ],
    images: ['/assets/img/education/centro-cultural-idiomas.jpg'],
  },
  {
    institution: 'New horizons',
    from: '2015',
    to: '2015',
    degree: 'Certification: in HTML5, CSS, Javascript and MVC.net',
    category: 'Technical',
    certificate: [
      {
        title: 'Certificate',
        value: 'Completion',
      },
    ],
    images: ['/assets/img/education/new-horizons.png'],
  },
  {
    institution: 'Cenfotec',
    from: '2009',
    to: '2009',
    degree: 'Certification: XML with Visual Studio',
    category: 'Technical',
    certificate: [
      {
        title: 'Certificate',
        value: 'Completion',
      },
    ],
    images: ['/assets/img/education/cenfotec.png'],
  },
  {
    institution: 'Universidad Nacional de Costa Rica',
    from: '2004',
    to: '2008',
    degree: 'System engineer',
    category: 'University',
    certificate: [
      {
        title: 'Bachelor',
        value: 'Incomplete',
      },
    ],
    images: ['/assets/img/education/una.png'],
  },
  {
    institution: 'Liceo El Roble',
    from: '1997',
    to: '2002',
    degree: 'Secondary studies',
    category: 'High school',
    certificate: [
      {
        title: 'Certificate',
        value: 'Completion',
      },
    ],
    images: ['/assets/img/education/liceo-roble.jpeg'],
  },
  {
    institution: 'Liceo El Roble',
    from: '1990',
    to: '1996',
    degree: 'Primary studies',
    category: 'Elementary school',
    certificate: [
      {
        title: 'Certificate',
        value: 'Completion',
      },
    ],
    images: ['/assets/img/education/liceo-roble.jpeg'],
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
};

export default DataEn;
