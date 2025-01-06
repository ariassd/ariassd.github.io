import moment from 'moment';
import React from 'react';
import { IconContext } from 'react-icons';
import { BiDonateHeart } from 'react-icons/bi';
import {
  FaBootstrap,
  FaGithub,
  FaGithubAlt,
  FaGitlab,
  FaNode,
  FaReact,
  FaVuejs,
  FaBalanceScaleRight,
  FaGraduationCap,
  FaFont,
} from 'react-icons/fa';
import { SiNestjs, SiConfluence, SiUpwork } from 'react-icons/si';
import { DiScrum, DiJira } from 'react-icons/di';
import { ImMail4 } from 'react-icons/im';
import { GiArcheryTarget, GiOpenBook, GiCompass } from 'react-icons/gi';
import { RiTwitterFill } from 'react-icons/ri';
import { FaHandsHoldingChild, FaBinoculars } from 'react-icons/fa6';
import { LuBrainCircuit } from 'react-icons/lu';
import { TbClockDollar, TbBrandCSharp } from 'react-icons/tb';
import { CgWebsite } from 'react-icons/cg';

import {
  // SiCsharp,
  SiCss3,
  SiJavascript,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiNpm,
} from 'react-icons/si';
import { TiSocialLinkedinCircular } from 'react-icons/ti';
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
  name: 'Luis Arias',
  details: (
    <React.Fragment>
      <p>
        Soy un profesional full-stack desde 2008. Realmente me gusta buscar la
        perfección en todo lo que hago.
      </p>
      <ul>
        <li>✓ Liderazgo.</li>
        <li>✓ Mentoría.</li>
        <li>✓ Automatización de procesos.</li>
        <li>✓ Desarrollador Full-stack.</li>
        <li>✓ NodeJS, NestJS, React, Angular</li>
        <li>✓ Framework .NET (C#, VB)</li>
        <li>✓ Typescript, javascript, jQuery</li>
        <li>✓ Bases de datos (SQL, Mysql, PostgreSQL, MongoDB, sqlite)</li>
        <li>✓ Otros como PHP, Python.</li>
      </ul>

      <p>
        He estado creando, diseñando, corrigiendo y editando software durante
        más de {getExperienceDurationNumber()}+ años. Actualmente, soy parte del
        equipo de liderazgo y estoy trabajando con tecnologías de vanguardia en
        una empresa innovadora con centro de operaciones en Costa Rica, que
        forma parte de una gran compañía ubicada en Suiza.
      </p>

      <p>
        He creado, desarrollado, inventado e implementado muchos procesos de
        automatización, aplicaciones, sitios web, documentos de Excel y hojas de
        cálculo de Google utilizando scripts y scripts a medida. También tengo
        buen ojo para el diseño.
      </p>

      <p>
        Me especializo en crear soluciones simples para problemas complejos y
        tengo una verdadera habilidad para hacer que mi software sea fácil de
        operar, añadiendo configuraciones y documentación útil también. Creo que
        una solución bien diseñada no solo se verá mucho mejor, sino que será
        mucho más fácil de entender y operar.
      </p>

      <p>
        He trabajado con clientes de todo el mundo. No tengo problemas para
        hacer negocios con cualquier ubicación. Puedo ayudarte a desarrollar o
        mejorar software para tu negocio.
      </p>
      <p></p>
    </React.Fragment>
  ),
  languages: [
    { name: 'English', level: 'B2+' },
    { name: 'Spanish', level: 'Native' },
  ],
  phone: '8735-3483',
  email: 'ariassd@gmail.com',
  address: 'Santa Bárbara, Heredia, CR',
  university: 'Universidad Nacional de Costa Rica',
  github: 'https://github.com/ariassd',
  npm: 'https://www.npmjs.com/~ariassd',
  upWork: 'https://www.upwork.com/freelancers/~01eb5047d927060e0f',
  googleEmbeddedMapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3928.3263166936113!2d-84.15768331774679!3d10.072325737623318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTDCsDA0JzIwLjQiTiA4NMKwMDknMjIuMSJX!5e0!3m2!1sen!2scr!4v1620427865488!5m2!1sen!2scr',
  hideCv: false,
  hidePhone: true,
  hideEmail: true,
  hideMap: false,
  cv: '',
  formspree: 'https://formspree.io/f/xzbydyqb',
  taglines: [
    'Desarrollador full stack',
    'Desarrollador web',
    'Gestion de equipos',
    'Arquitectura de software',
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
          title: 'Hacer un donativo!',
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
    icon: <SiCss3 />,
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
        <p>
          Techoryze se fundó para resolver un problema sencillo: hacer que la
          tecnología sea más accesible para los educadores. Más del 80% cree que
          no reciben suficiente desarrollo profesional en tecnología. Esto
          limita su capacidad para integrar la tecnología en su currículo y para
          apoyar a sus estudiantes a convertirse en más expertos en tecnología.
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
    categories: ['Librería'],
    description: (
      <React.Fragment>
        Este utilitario te ayudará a enviar solicitudes a socket.io utilizando
        una API REST simple. Es útil para propósitos de desarrollo, ya que con
        esta herramienta puedes enviar solicitudes de socket.io desde Postman o
        herramientas similares y obtener el resultado.
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
    to: 'present',
    position: 'Lider de equipo',
    responsibilities: [
      '✓ Gestión de equipos',
      '✓ Proceso de toma de decisiones',
      '✓ Arquitectura de software',
      '✓ Implementación del sistema de gamificación Gamanza',
      '✓ Implementación del sistema CRM Gamanza',
      '✓ Typescript, NestJs, NodeJs, MongoDb, Postgre, Rabbit',
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
    degree: 'Certificación en HTML5, CSS, Javascript and MVC.net',
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
    degree: 'Certificación en XML with Visual Studio',
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
    degree: 'Ingenieria de sistemas',
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
    degree: 'Estudios secundarios',
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
    degree: 'Escuela primaria',
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
    title: 'npm',
    icon: (
      <IconContext.Provider value={{ size: '1.4rem' }}>
        <SiNpm />
      </IconContext.Provider>
    ),
    link: about.npm,
  },
  {
    title: 'Upwork',
    icon: (
      <IconContext.Provider value={{ size: '1.4rem' }}>
        <SiUpwork />
      </IconContext.Provider>
    ),
    link: about.upWork,
  },
  {
    title: 'twitter',
    icon: (
      <IconContext.Provider value={{ size: '1.5rem' }}>
        <RiTwitterFill />
      </IconContext.Provider>
    ),
    link: 'https://www.twitter.com/ariassd',
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

const DataEs = {
  defaultThemeColor,
  about,
  skills,
  projects,
  experiences,
  education,
  socialLinks,
  getExperienceDuration,
};

export default DataEs;
