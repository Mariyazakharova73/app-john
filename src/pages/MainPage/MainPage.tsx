import Posts from '../../components/Posts/Posts';
import UserInfo from '../../components/UserInfo/UserInfo';
import Works from '../../components/Works/Works';

const MainPage = () => {
  return (
    <main>
      <UserInfo />
      <Posts />
      <Works />
    </main>
  );
};

export default MainPage;
