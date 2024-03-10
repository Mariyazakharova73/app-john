import cn from 'classnames';
import fb from '../../assets/fb.svg';
import inst from '../../assets/insta.svg';
import linkedin from '../../assets/linkedin.svg';
import twitter from '../../assets/twitter.svg';
import s from './Footer.module.css';

const linksData = [
  { title: 'Фейсбук.', link: fb },
  { title: 'Инстаграм.', link: inst },
  { title: 'Твиттер.', link: twitter },
  { title: 'Линкедин.', link: linkedin },
];

const Footer = () => {
  return (
    <footer className={s.footer}>
      <ul className={s.links}>
        {linksData.map(item => {
          return (
            <li className={cn(s.link, 'fade')} key={item.title}>
              <img src={item.link} alt={item.title} />
            </li>
          );
        })}
      </ul>
      <p className={s.text}>Copyright ©2024 All rights reserved</p>
    </footer>
  );
};

export default Footer;
