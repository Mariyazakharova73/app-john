import cn from 'classnames';
import { Suspense, useEffect } from 'react';
import { ReactNotifications } from 'react-notifications-component';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import s from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { selectIsAuth } from './services/selectors/authSelectors';
import { checkAuth } from './services/thunks/loginUser';
import { RoutePath, routeConfig } from './utils/config/routeConfig';
import { TOKEN_KEY } from './utils/const';

function App() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const isVisible = pathname !== RoutePath.login && pathname !== RoutePath.register;

  useEffect(() => {
    if (localStorage.getItem(TOKEN_KEY)) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAuth) {
      navigate(RoutePath.main);
    }
  }, [isAuth, navigate]);

  return (
    <div className={cn(s.page, { [s.pageWidth]: isVisible })}>
      <ReactNotifications />
      {isVisible && <Header />}
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          {Object.values(routeConfig).map(route => {
            return <Route key={route.path} path={route.path} element={route.element} />;
          })}
        </Routes>
      </Suspense>
      {isVisible && <Footer />}
    </div>
  );
}

export default App;
