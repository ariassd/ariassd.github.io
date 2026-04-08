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
  return `${getExperienceDurationNumber()}+ años de experiencia`;
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
        Soy un Ingeniero Full-Stack Senior y Engineering Manager con más de 15 años de experiencia desarrollando soluciones de software escalables. Me especializo en desarrollo backend con Node.js y TypeScript, con un fuerte enfoque en diseño de sistemas, rendimiento y mantenibilidad.
      </p>

      <ul>
        <li>✓ Liderazgo técnico y gestión de equipos</li>
        <li>✓ Mentoría y desarrollo de talento</li>
        <li>✓ Automatización y optimización de procesos</li>
        <li>✓ Arquitectura backend (Node.js, NestJS)</li>
        <li>✓ Desarrollo frontend (React, Angular)</li>
        <li>✓ Ecosistema .NET (C#, VB)</li>
        <li>✓ Bases de datos: PostgreSQL, MySQL, MongoDB</li>
        <li>✓ Cloud, CI/CD y sistemas distribuidos</li>
      </ul>

      <p>
        A lo largo de mi carrera, he diseñado e implementado sistemas escalables, procesos de automatización y aplicaciones críticas para el negocio en múltiples industrias. Disfruto resolver problemas complejos y transformarlos en soluciones simples, eficientes y fáciles de mantener.
      </p>

      <p>
        Me apasiona construir software confiable, mejorar procesos de desarrollo y ayudar a los equipos a entregar productos de alta calidad.
      </p>
    </React.Fragment>
  ),
  languages: [
    { name: 'English', level: 'B2+' },
    { name: 'Spanish', level: 'Native' },
  ],
  taglines: [
    'Desarrollador full stack',
    'Desarrollador web',
    'Arquitectura de software',
    'Freelance',
  ],
};

const skills = [
  {
    type: 'soft',
    title: 'Communicación',
    iconColor: '#7B68EE',
    icon: <HiChatAlt2 />,
    skillQualification: 10,
  },
  {
    type: 'soft',
    title: 'Liderazgo',
    iconColor: '#FF5733',
    icon: <GiCompass />,
    skillQualification: 5,
  },
  {
    type: 'soft',
    title: 'Creación de equipos',
    iconColor: '#1E90FF',
    icon: <FaHandsHoldingChild />,
    skillQualification: 7,
  },
  {
    type: 'soft',
    title: 'Resilencia',
    iconColor: '#6A5ACD',
    icon: <LuBrainCircuit />,
    skillQualification: 9,
  },
  {
    type: 'soft',
    title: 'Resolución de problemas',
    iconColor: '#FFD700',
    icon: <GiArcheryTarget />,
    skillQualification: 9,
  },
  {
    type: 'soft',
    title: 'Etica Laboral',
    iconColor: '#8B4513',
    icon: <FaBalanceScaleRight />,
    skillQualification: 10,
  },
  {
    type: 'soft',
    title: 'Transparencia',
    iconColor: '#00CED1',
    icon: <GiOpenBook />,
    skillQualification: 10,
  },
  {
    type: 'soft',
    title: 'Control del tiempo',
    iconColor: '#FF4500',
    icon: <TbClockDollar />,
    skillQualification: 8,
  },
  {
    type: 'soft',
    title: 'Curiosidad',
    iconColor: '#7B68EE',
    icon: <FaBinoculars />,
    skillQualification: 10,
  },
  {
    type: 'soft',
    title: 'Aprendizaje continuo',
    iconColor: '#4682B4',
    icon: <FaGraduationCap />,
    skillQualification: 7,
  },
  {
    type: 'hard',
    title: 'SCRUM',
    iconColor: '#007ACC',
    icon: <DiScrum />,
    skillQualification: 7,
  },
  {
    type: 'hard',
    title: 'Jira',
    iconColor: '#0052CC',
    icon: <DiJira />,
    skillQualification: 7,
  },
  {
    type: 'hard',
    title: ' Confluence',
    iconColor: '#172B4D',
    icon: <SiConfluence />,
    skillQualification: 8,
  },

  {
    type: 'hard',
    title: 'NestJS',
    iconColor: '#E0234E',
    icon: <SiNestjs />,
    skillQualification: 7,
  },
  {
    type: 'hard',
    title: 'JavaScript',
    iconColor: '#E1CC1B',
    icon: <SiJavascript />,
    skillQualification: 8,
  },
  {
    type: 'hard',
    title: 'React.js',
    iconColor: '#31B2FB',
    icon: <FaReact />,
    skillQualification: 6,
  },
  {
    type: 'hard',
    title: 'Vue.js',
    iconColor: '#42B983',
    icon: <FaVuejs />,
    skillQualification: 4,
  },
  {
    type: 'hard',
    title: 'Node.js',
    iconColor: '#5C9553',
    icon: <FaNode />,
    skillQualification: 8,
  },
  {
    type: 'hard',
    title: 'jQuery',
    iconColor: '#0769AD',
    icon: <SiJquery />,
    skillQualification: 7,
  },
  {
    type: 'hard',
    title: '.net framework',
    iconColor: '#0769AD',
    icon: <TbBrandCSharp />,
    skillQualification: 5,
  },
  {
    type: 'hard',
    title: 'MySQL',
    iconColor: '#4479A1',
    icon: <SiMysql />,
    skillQualification: 4,
  },
  {
    type: 'hard',
    title: 'MongoDB',
    iconColor: '#4479A1',
    icon: <SiMongodb />,
    skillQualification: 7,
  },
  {
    type: 'hard',
    title: 'GitHub',
    iconColor: '#F44D27',
    icon: <FaGithubAlt />,
    skillQualification: 8,
  },
  {
    type: 'hard',
    title: 'GitLab',
    iconColor: '#F44D27',
    icon: <FaGitlab />,
    skillQualification: 8,
  },
  {
    type: 'hard',
    title: 'CSS',
    iconColor: '#2862E9',
    icon: <FaCss3Alt />,
    skillQualification: 6,
  },
  {
    type: 'hard',
    title: 'Bootstrap',
    iconColor: '#533B78',
    icon: <FaBootstrap />,
    skillQualification: 6,
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
    categories: ['Librería'],
    description: (
      <React.Fragment>
        Esta es un utilitario instalado a través de npm que te permite gestionar
        y conectar servicios de Kubernetes utilizando el reenvío de puertos de
        manera sencilla.
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
    categories: ['Página web'],
    description: (
      <React.Fragment>
        <p>
          Techoryze ofrece el soporte de aprendizaje en tiempo real necesario
          para que los educadores aceleren el uso de la tecnología en el aula.
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
    categories: ['Librería'],
    description: (
      <React.Fragment>
        Convierte de un archivo CSV simple a JSON. Con esta poderosa herramienta
        podrás procesar archivos CSV y hacer cálculos en segundos.
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
    categories: ['Librería'],
    description: (
      <React.Fragment>
        Paquete que permite obtener la diferencia entre dos objetos JSON
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
    categories: ['Librería'],
    description: (
      <React.Fragment>
        La manera más fácil de generar un documento markdown a partir de la
        documentación de Postman. Con esta herramienta también puedes aplicar
        estilo y personalización a tus documentos.
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
    categories: ['Otros'],
    description: (
      <React.Fragment>
        Esta fuente convierte caracteres alfabéticos en símbolos. Fácil de usar
        y divertida para niños y proyectos escolares. La versión ordenada en
        inglés utiliza animales cuyo nombre comienza con la misma letra.
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
    categories: ['Librería'],
    description: (
      <React.Fragment>
        Snack Query Builder NPM es una herramienta útil para construir consultas
        SQL directamente desde TypeScript utilizando una sintaxis clara y fácil
        de entender.
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
    categories: ['Librería'],
    description: (
      <React.Fragment>
        Este complemento te permite interceptar fechas y formatearlas de
        múltiples maneras.
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
        Esta es una extensión de la clase Decimal para convertir números a
        texto, útil para bancos y aplicaciones financieras.
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
        Agenda de direcciones simple realizada con Visual Studio para Mac
        (Community) y MongoDB. Este proyecto no tiene ningún tipo de seguridad
        en esta primera versión.
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
        Aplicación de dibujo en pantalla simple. Dibuja directamente en la
        pantalla, realiza una captura de pantalla y guarda los resultados en la
        carpeta de escritorio.
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
        Esta extensión permite abrir múltiples terminales apiladas lado a lado y
        ejecutar un comando diferente en cada una. Perfecto para trabajar en un
        espacio de trabajo con múltiples proyectos.
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
    to: '2026',
    position: 'Desarrollador Backend | Lider de equipo',
    responsibilities: [
      '✓ Gestión de equipos',
      '✓ Proceso de toma de decisiones',
      '✓ Arquitectura de software',
      '✓ Implementación del sistema de gamificación Gamanza',
      '✓ Implementación del sistema CRM Gamanza',
      '✓ Typescript, NestJs, NodeJs, MongoDb, Postgre, Rabbit, Redis',
    ],
  },
  {
    company: 'Gamanza Costa Rica',
    from: '2020',
    to: '2021',
    position: 'Desarrollador Backend Senior',
    responsibilities: [
      '✓ Implementación del sistema CRM de Gamanza',
      '✓ Typescript, NestJs, NodeJs, MongoDb, Postgre, Rabbit',
    ],
  },
  {
    company: 'Techoryze',
    from: '2021',
    to: '2021',
    position: 'Desarrollador Full Stack (freelance)',
    responsibilities: [
      '✓ Diseño e implementación de la plataforma Techoryze https://techoryze.com',
      '✓ Typescript, NestJs, ReactJs, MongoDb',
    ],
  },
  {
    company: 'Creative Drive',
    from: '2018',
    to: '2020',
    position: 'Desarrollador Backend Senior .NET',
    responsibilities: [
      '✓ Desarrollar software para PROCOMER Costa Rica.',
      '✓ C#, AppFabric, Microservicios, SQL Server, XML, Angular, jQuery, Mvc .NET',
    ],
  },
  {
    company: 'Corporación BCT S.A ',
    from: '2008',
    to: '2018',
    position: 'Desarrollador de software senior / arquitecto de software',
    responsibilities: [
      '✓ Desarrollar, diseñar software, dar soporte, mejoras e integración continua del sistema bancario en línea.',
      '✓ Tecnologías: VB.NET, C#, SQL Server, XML, HTML, Javascript, jQuery, MVC .NET, iOS',
    ],
  },
  {
    company: 'Sysde Costa Rica',
    from: '2007',
    to: '2008',
    position: 'Desarrollador de software',
    responsibilities: [
      '✓ Desarrollo y mantenimiento de e-marketing en Costa Rica y México',
      '✓ Tecnologías: CMS, SQL Server, C#, ASP, HTML',
    ],
  },
];

const education = [
  {
    institution: 'Centro Cultural de Idiomas',
    from: '2017',
    to: '2019',
    degree: 'Ingles conversasional, Level 12 ( level: 60% )',
    category: 'Languages',
    certificate: [
      {
        title: 'TOEIC',
        value: 'B1',
      },
    ],
    images: ['/assets/img/certificates/centro-cultural-idiomas.jpg'],
  },
  {
    institution: 'New horizons',
    from: '2015',
    to: '2015',
    degree: 'Certificación en HTML5, CSS, Javascript and MVC.net',
    category: 'Technical',
    certificate: [
      {
        title: 'Certificado',
        value: 'Conclusión',
      },
    ],
    images: ['/assets/img/education/new-horizons.png'],
  },
  {
    institution: 'Cenfotec',
    from: '2009',
    to: '2009',
    degree: 'Certificación en XML with Visual Studio',
    category: 'Technical',
    certificate: [
      {
        title: 'Certificado',
        value: 'Conclusión',
      },
    ],
    images: ['/assets/img/education/cenfotec.png'],
  },
  {
    institution: 'Universidad Nacional de Costa Rica',
    from: '2004',
    to: '2008',
    degree: 'Ingenieria de sistemas',
    category: 'Universidad',
    certificate: [
      {
        title: 'Bachillerato',
        value: 'Incompleto',
      },
    ],
    images: ['/assets/img/education/una.png'],
  },
  {
    institution: 'Liceo El Roble',
    from: '1997',
    to: '2002',
    degree: 'Estudios secundarios',
    category: 'Colegio',
    certificate: [
      {
        title: 'Certificado',
        value: 'Conclusión',
      },
    ],
    images: ['/assets/img/education/liceo-roble.jpeg'],
  },
  {
    institution: 'Liceo El Roble',
    from: '1990',
    to: '1996',
    degree: 'Escuela primaria',
    category: 'Escuela',
    certificate: [
      {
        title: 'Certificado',
        value: 'Conclusión',
      },
    ],
    images: ['/assets/img/education/liceo-roble.jpeg'],
  },
];


const DataEs = {
  defaultThemeColor,
  about,
  skills,
  projects,
  experiences,
  education,
  getExperienceDuration,
};

export default DataEs;
