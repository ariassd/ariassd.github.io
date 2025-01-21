import DataEn from './Data-en';
import DataEs from './Data-es';

import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { SiUpwork, SiNpm } from 'react-icons/si';
import { RiTwitterFill } from 'react-icons/ri';
import { ImMail4 } from 'react-icons/im';

const aboutData = {
  name: 'Luis Arias',
  phone: '+506-xxxx-xx83',
  email: 'arxxxxx@gmail.com',
  address: 'Santa Bárbara, Heredia, CR',
  university: 'Universidad Nacional de Costa Rica',
  github: 'https://github.com/ariassd',
  npm: 'https://www.npmjs.com/~ariassd',
  upWork: 'https://www.upwork.com/freelancers/~01eb5047d927060e0f',
  googleEmbeddedMapUrl:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11653.21700921115!2d-84.16416618181975!3d10.038257274729204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa0f09a2eb5610b%3A0x9f71395e8321ff2b!2sSanta%20B%C3%A1rbara%2C%20Heredia%20Province%2C%20Santa%20B%C3%A1rbara%2C%20Costa%20Rica!5e1!3m2!1sen!2sch!4v1736976360481!5m2!1sen!2sch',
  hideCv: false,
  hidePhone: true,
  hideEmail: true,
  hideMap: false,
  cv: '',
  formspree: 'https://formspree.io/f/xzbydyqb',
  openToWork: true,
};

const socialLinks = [
  {
    title: 'linkedin',
    icon: <FaLinkedin />,
    link: 'https://www.linkedin.com/in/ariassd/',
  },
  {
    title: 'github',
    icon: <FaGithub />,
    link: aboutData.github,
  },
  {
    title: 'npm',
    icon: <SiNpm />,
    link: aboutData.npm,
  },
  {
    title: 'Upwork',
    icon: <SiUpwork />,
    link: aboutData.upWork,
  },
  {
    title: 'twitter',
    icon: <RiTwitterFill />,
    link: 'https://www.twitter.com/ariassd',
  },
];

if (aboutData.hideEmail == false) {
  socialLinks.push({
    title: 'email',
    icon: <ImMail4 />,
    link: `mailto:${aboutData.email}`,
  });
}

DataEn.about = { ...DataEn.about, ...aboutData };
DataEs.about = { ...DataEs.about, ...aboutData };
DataEn.socialLinks = socialLinks;
DataEs.socialLinks = socialLinks;

export const Languages = {
  EN: DataEn,
  ES: DataEs,
};
