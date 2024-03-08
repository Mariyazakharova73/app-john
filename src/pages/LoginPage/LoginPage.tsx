import Form from '../../components/Form/Form';
import { useFormAndValidation } from '../../hooks/useFormAndValidation';
import s from './LoginPage.module.css';

const LoginPage = () => {
  const { values, handleChange, errors, isValid, handleBlur } = useFormAndValidation();
  const handleSubmit = () => {};
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
