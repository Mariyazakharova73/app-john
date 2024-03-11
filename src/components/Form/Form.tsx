import cn from 'classnames';
import { ChangeEvent, FormEvent } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserData } from '../../types/types';
import { RoutePath } from '../../utils/config/routeConfig';
import s from './Form.module.css';

export interface FormProps {
  title: string;
  buttonText: string;
  handleSubmit: (evt: FormEvent) => void;
  isValid: boolean;
  errors: { [key: string]: string };
  values: UserData;
  handleChange: (evt: ChangeEvent<HTMLInputElement>) => void;
  handleBlur: (evt: ChangeEvent<HTMLInputElement>) => void;
}

const Form = ({
  title,
  buttonText,
  handleSubmit,
  handleChange,
  handleBlur,
  values,
  errors,
  isValid,
}: FormProps) => {
  const { pathname } = useLocation();
  const isLoginRath = pathname === RoutePath.login;

  return (
    <form className={cn(s.form, 'form')} onSubmit={handleSubmit}>
      <h2 className={s.title}>{title}</h2>
      <div className={s.inputsWrapper}>
        <div className={s.inputWrapper}>
          <input
            className={s.input}
            name="email"
            type="email"
            value={values.email || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            minLength={3}
            placeholder="Введите email"
          />
          {errors.email && <span className={s.error}>{errors.email}</span>}
        </div>
        <div className={s.inputWrapper}>
          <input
            className={s.input}
            name="password"
            type="password"
            value={values.password || ''}
            onChange={handleChange}
            onBlur={handleBlur}
            required
            minLength={3}
            maxLength={30}
            placeholder="Введите пароль"
          />
          {errors.password && <span className={s.error}>{errors.password}</span>}
        </div>
      </div>
      <button className={cn(s.button, 'fade')} disabled={!isValid}>
        {buttonText}
      </button>
      <div className={s.wrapper}>
        {isLoginRath ? (
          <Link className={cn(s.link, 'fade')} to={RoutePath.register}>
            Регистрация
          </Link>
        ) : (
          <div className={s.container}>
            <p>Вы уже зарегистрированы?</p>&ensp;
            <Link className={cn(s.link, 'fade')} to={RoutePath.login}>
              Войти
            </Link>
          </div>
        )}
      </div>
    </form>
  );
};

export default Form;
