import cn from 'classnames';
import { ChangeEvent, FormEvent } from 'react';
import { UserData } from '../../types/types';
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
      <button className={s.button} disabled={!isValid}>
        {buttonText}
      </button>
    </form>
  );
};

export default Form;
