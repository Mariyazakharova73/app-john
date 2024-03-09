import { PropsWithChildren, ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { useAppSelector } from '../hooks/hooks';
import { selectIsAuth } from '../services/selectors/authSelectors';
import { RoutePath } from '../utils/config/routeConfig';

export const ProtectedRoute = ({ children }: PropsWithChildren): ReactElement => {
  const isAuth = useAppSelector(selectIsAuth);

  if (!isAuth) {
    return <Navigate to={RoutePath.login} />;
  }

  return <>{children}</>;
};
