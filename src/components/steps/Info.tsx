import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';

import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { addData, stepIncrease } from '../../../store/formSlice';
import { Field } from '../UI/input/Field';
import StepsNav from './StepsNav';
import { IData } from '../../types/types';

import styles from './step.module.scss';

const genderOptions = [
  { value: 'Мужской', label: 'Мужской' },
  { value: 'Женский', label: 'Женский' },
];

const Info = () => {
  const dispatch = useAppDispatch();
  const defaultValues = useAppSelector((state) => state.form.data);

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    defaultValues: defaultValues,
  });

  const onSubmit = (data: IData) => {
    dispatch(addData(data));
    dispatch(stepIncrease());
  };

  return (
    <>
      <form className={styles.inputsWrapper} onSubmit={handleSubmit(onSubmit)}>
        <Field label='Никнейм' error={errors?.nickname?.message}>
          <input
            type='text'
            placeholder='Placeholder'
            {...register('nickname', {
              required: 'Обязательное поле',
              maxLength: {
                value: 30,
                message: 'Максимальное количество символов 30',
              },
              pattern: {
                value: /^[^!@#$%^&*()_]*$/,
                message: 'Специальные символы запрещены',
              },
            })}
          />
        </Field>
        <Field label='Имя' error={errors?.name?.message}>
          <input
            type='text'
            placeholder='Placeholder'
            {...register('name', {
              required: 'Обязательное поле',
              maxLength: {
                value: 50,
                message: 'Максимальное количество символов 30',
              },
              pattern: {
                value: /^[A-Za-zА-Яа-я\s]*$/,
                message: 'Только буквы',
              },
            })}
          />
        </Field>
        <Field label='Фамилия' error={errors?.sername?.message}>
          <input
            type='text'
            placeholder='Placeholder'
            {...register('sername', {
              required: 'Обязательное поле',
              maxLength: {
                value: 50,
                message: 'Максимальное количество символов 30',
              },
              pattern: {
                value: /^[A-Za-zА-Яа-я\s]*$/,
                message: 'Только буквы',
              },
            })}
          />
        </Field>
        <Field label='Пол' error={errors?.gender?.message}>
          <Controller
            name={'gender'}
            control={control}
            rules={{
              required: 'Обязательное поле',
            }}
            render={({ field }) => {
              return (
                <Select
                  styles={{
                    indicatorSeparator: () => ({
                      display: 'none',
                    }),
                  }}
                  {...field}
                  options={genderOptions}
                  placeholder='Не выбрано'
                  isSearchable={false}
                />
              );
            }}
          />
        </Field>
        <StepsNav />
      </form>
    </>
  );
};

export default Info;
