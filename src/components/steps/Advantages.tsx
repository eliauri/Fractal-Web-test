import { useFieldArray, useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { addData, stepIncrease } from '../../../store/formSlice';
import { IData } from '../../types/types';
import { Field } from '../UI/input';
import StepsNav from './StepsNav';

import TrashIcon from '../../assets/svg/trash.svg?react';
import PlusIcon from '../../assets/svg/plus.svg?react';
import styles from './step.module.scss';

const Advantages = () => {
  const dispatch = useAppDispatch();
  const defaultValues = useAppSelector((state) => state.form.data);
  const { control, register, handleSubmit } = useForm<IData>({
    defaultValues: defaultValues,
  });

  const { fields, append, remove } = useFieldArray({
    name: 'advantages',
    control,
  });

  const onSubmit = (data: IData) => {
    dispatch(addData(data));
    dispatch(stepIncrease());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.inputsWrapper}>
      <Field label='Преимущества'>
        <div className={styles.advantages}>
          {fields.map((item, index) => (
            <div key={item.id} className={styles.inputFlex}>
              <input
                type='text'
                placeholder='placeholder'
                {...register(`advantages.${index}.advantage`, {
                  required: true,
                })}
              />
              {fields.length != 1 && (
                <button
                  onClick={() => remove(index)}
                  className={styles.trash}
                  type='button'>
                  <TrashIcon />
                </button>
              )}
            </div>
          ))}
          <button
            type='button'
            onClick={() => append({ advantage: '' })}
            className={styles.addButton}>
            <PlusIcon />
          </button>
        </div>
      </Field>
      <Field label='Checkbox группа'>
        <div className={styles.checkboxFlex}>
          <input {...register('checkbox')} type='checkbox' value='1' />
          <span>1</span>
        </div>
        <div className={styles.checkboxFlex}>
          <input {...register('checkbox')} type='checkbox' value='2' />
          <span>2</span>
        </div>
        <div className={styles.checkboxFlex}>
          <input {...register('checkbox')} type='checkbox' value='3' />
          <span>3</span>
        </div>
      </Field>
      <Field label='Radio группа'>
        <div className={styles.checkboxFlex}>
          <input {...register('radio')} type='radio' value='1' />
          <span>1</span>
        </div>
        <div className={styles.checkboxFlex}>
          <input {...register('radio')} type='radio' value='2' />
          <span>2</span>
        </div>
        <div className={styles.checkboxFlex}>
          <input {...register('radio')} type='radio' value='3' />
          <span>3</span>
        </div>
      </Field>
      <StepsNav />
    </form>
  );
};

export default Advantages;
