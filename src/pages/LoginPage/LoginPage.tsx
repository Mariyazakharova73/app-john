import { FormEvent } from 'react';
import { useNavigate } from 'react-router';
import Form from '../../components/Form/Form';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { selectIsAuth } from '../../services/selectors/authSelectors';
import { loginUser } from '../../services/thunks/loginUser';
import { RoutePath } from '../../utils/config/routeConfig';
import s from './LoginPage.module.css';

const LoginPage = () => {
  const { values, handleChange, errors, isValid, handleBlur } = useFormAndValidation();
  const isAuth = useAppSelector(selectIsAuth);

  console.log(isAuth, 'isAuth')

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log('login');
    dispatch(loginUser(values));
    if (isAuth) {
      navigate(RoutePath.main);
    }
  };
  return (
    <main className={s.page}>
      <Form
        handleSubmit={handleSubmit}
        buttonText={'Войти'}
        title={'Вход'}
        handleChange={handleChange}
        handleBlur={handleBlur}
        values={values}
        isValid={isValid}
        errors={errors}
      />
    </main>
  );
};

export default LoginPage;
