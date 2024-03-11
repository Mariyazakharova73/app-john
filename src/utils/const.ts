/* eslint-disable max-len */
import works1 from '../assets/works1.jpg';
import works2 from '../assets/works2.jpg';
import works3 from '../assets/works3.jpg';

export const baseURL = 'http://localhost:5000';

export const REFRESH_PATH = '/refresh';
export const LOGOUT_PATH = '/logout';

export const UNAUTHORIZED_STATUS_CODE = '401';

export const TOKEN_KEY = 'token';

export const cardData = [
  {
    id: 0,
    cardTitle: 'Making a design system from scratch',
    date: '12 Feb 2020',
    link: 'Design, Pattern',
    cardText:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
  {
    id: 1,
    cardTitle: 'Creating pixel perfect icons in Figma',
    date: '12 Feb 2020',
    link: 'Figma, Icon Design',
    cardText:
      'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
  },
];

export const worksData = [
  {
    id: 0,
    title: 'Designing Dashboards',
    year: '2020',
    theme: 'Dashboard',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    img: works1,
  },
  {
    id: 1,
    title: 'Vibrant Portraits of 2020',
    year: '2018',
    theme: 'Illustration',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    img: works2,
  },
  {
    id: 2,
    title: '36 Days of Malayalam type',
    year: '2018',
    theme: 'Typography',
    text: 'Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.',
    img: works3,
  },
];
