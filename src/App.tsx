import { Suspense, useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import s from './App.module.css';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { selectIsAuth, selectUsers } from './services/selectors/authSelectors';
import { fetchUsers } from './services/thunks/fetchUsers';
import { checkAuth, logout } from './services/thunks/loginUser';
import { RoutePath, routeConfig } from './utils/config/routeConfig';
import Header from './components/Header/Header';

function App() {
  const dispatch = useAppDispatch();
  const isAuth = useAppSelector(selectIsAuth);
  const users = useAppSelector(selectUsers);
  const navigate = useNavigate();

  const getUsers = () => {
    dispatch(fetchUsers());
  };

  const logOut = () => {
    dispatch(logout());
  };

  useEffect(() => {
    if (localStorage.getItem('token')) {
      dispatch(checkAuth());
    }
  }, [dispatch]);

  useEffect(() => {
    if (isAuth) {
      navigate(RoutePath.main);
    }
  }, [isAuth, navigate]);

  return (
    <div className={s.page}>
      <Header />
      {/* <button onClick={logOut}>Выйти</button>
      <button onClick={getUsers}>get Users</button>
      {users && <p>{users[0].email}</p>} */}
      <Suspense fallback={<div>loading...</div>}>
        <Routes>
          {Object.values(routeConfig).map(route => {
            return <Route key={route.path} path={route.path} element={route.element} />;
          })}
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
