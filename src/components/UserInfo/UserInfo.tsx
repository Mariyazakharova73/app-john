import avatar from '../../assets/avatar.png';
import s from './UserInfo.module.css';
import cn from 'classnames'

const UserInfo = () => {
  return (
    <div className={s.userInfo}>
      <div>
        <h1 className={s.title}>Hi, I am John, Creative Technologist</h1>
        <p className={s.text}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit
          officia consequat duis enim velit mollit. Exercitation veniam consequat sunt
          nostrud amet.
        </p>
        <button className={cn(s.button, 'fade')}>Download Resume</button>
      </div>
      <img className={s.avatar} src={avatar} />
    </div>
  );
};

export default UserInfo;
