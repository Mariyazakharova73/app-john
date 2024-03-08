import { FormEvent } from 'react';
import Form from '../../components/Form/Form';
import { useAppDispatch } from '../../hooks/hooks';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import { registerUser } from '../../services/thunks/registerUser';
import s from './RegisterPage.module.css';

const RegisterPage = () => {
  const { values, handleChange, errors, isValid, handleBlur } = useFormAndValidation();

  const dispatch = useAppDispatch();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    dispatch(registerUser(values));
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
