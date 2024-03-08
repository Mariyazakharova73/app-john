import { Link } from 'react-router-dom';
import { RoutePath } from '../../utils/config/routeConfig';
import s from './NotFoundPage.module.css';

const NotFoundPage = () => {
  return (
    <main className={s.main}>
      <h1>Страница не найдена</h1>
      <Link  to={RoutePath.main}>
        На главную
      </Link>
    </main>
  );
};

export default NotFoundPage;
