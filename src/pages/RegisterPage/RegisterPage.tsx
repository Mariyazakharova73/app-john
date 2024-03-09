import { FormEvent } from 'react';
import { useNavigate } from 'react-router';
import Form from '../../components/Form/Form';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { selectIsAuth } from '../../services/selectors/authSelectors';
import { registerUser } from '../../services/thunks/registerUser';
import { RoutePath } from '../../utils/config/routeConfig';
import s from './RegisterPage.module.css';

const RegisterPage = () => {
  const { values, handleChange, errors, isValid, handleBlur } = useFormAndValidation();

  const isAuth = useAppSelector(selectIsAuth);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('register');
    dispatch(registerUser(values));
    if (isAuth) {
      navigate(RoutePath.main);
    }
  };

  return (
    <main className={s.page}>
      <Form
        handleSubmit={handleSubmit}
        buttonText={'Зарегистрироваться'}
        title={'Регистрация'}
        handleChange={handleChange}
        handleBlur={handleBlur}
        values={values}
        isValid={isValid}
        errors={errors}
      />
    </main>
  );
};

export default RegisterPage;
