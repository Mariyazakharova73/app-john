import cn from 'classnames';
import avatar from '../../assets/avatar.png';
import s from './UserInfo.module.css';

const UserInfo = () => {
  return (
    <section className={s.userInfo}>
      <div className={s.infoWrapper}>
        <h1 className={s.title}>Hi, I am John, Creative Technologist</h1>
        <p className={s.text}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
          nostrud amet.
        </p>
        <button className={cn(s.button, 'fade')}>Download Resume</button>
      </div>
      <div className={s.imageWrapper}>
        <img className={s.avatar} src={avatar} />
      </div>
    </section>
  );
};

export default UserInfo;
