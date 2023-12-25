import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useHookFormMask } from 'use-mask-input';

import Profile from '../../components/profile/Profile';
import Button from '../../components/UI/button/Button';
import { Field } from '../../components/UI/input';

import styles from './main.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { IData } from '../../types/types';
import { addData } from '../../../store/formSlice';

const Main = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const defaultValues = useAppSelector((state) => state.form.data);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    defaultValues: defaultValues,
  });
  const registerWithMask = useHookFormMask(register);

  const handleClickButton = (data: IData) => {
    dispatch(addData(data));
    navigate('/form');
  };

  return (
    <div className={styles.main}>
      <Profile />
      <form className={styles.form}>
        <Field label='Номер телефона' error={errors?.phone?.message}>
          <input
            type='text'
            placeholder='+7 999 999-99-99'
            {...registerWithMask('phone', ['+7 (999) 999 99-99'], {
              required: 'Обязательное поле',
            })}
          />
        </Field>
        <Field label='Email' error={errors?.email?.message}>
          <input
            type='email'
            placeholder='webstudio.fractal@example.com'
            {...register('email', {
              required: 'Обязательное поле',
              validate: {
                matchPattern: (v) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                  'Введите корректный адрес',
              },
            })}
          />
        </Field>
      </form>
      <Button
        className={styles.button}
        onClick={handleSubmit(handleClickButton)}>
        Начать
      </Button>
    </div>
  );
};

export default Main;
