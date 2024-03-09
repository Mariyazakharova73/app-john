import UserInfo from '../../components/UserInfo/UserInfo';
import s from './MainPage.module.css';

const MainPage = () => {
  return (
    <main className={s.main}>
      <UserInfo />
    </main>
  );
};

export default MainPage;
