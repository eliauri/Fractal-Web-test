import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { addData, clearData, stepIncrease } from '../../../store/formSlice';
import { Field } from '../UI/input';
import { IData } from '../../types/types';
import Button from '../UI/button/Button';
import Modal from '../modal/Modal';
import StepsNav from './StepsNav';

import SuccesIcon from '../../assets/svg/succes_icon.svg?react';
import styles from './step.module.scss';

const About = () => {
  const dispatch = useAppDispatch();
  const defaultValues = useAppSelector((state) => state.form.data);
  const [symbolCount, setSymbolCount] = useState<number>(0);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IData>({
    defaultValues: defaultValues,
  });

  const onChangeTextarea = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setSymbolCount(event.target.value.length);
  };

  const sendData = (data: IData) => {
    fetch('', {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then(() => {
        setShowModal(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const onSubmit = (data: IData) => {
    dispatch(addData(data));
    dispatch(stepIncrease());

    setTimeout(sendData, 1500);
  };

  const handleSuccesFormClick = () => {
    dispatch(clearData());
    navigate('/');
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field label='О себе' type='large' error={errors?.about?.message}>
          <textarea
            placeholder='Placeholder'
            rows={4}
            maxLength={200}
            {...register('about', {
              required: 'Обязательное поле',
            })}
            onChange={onChangeTextarea}
          />
          <div className={styles.textareaCounter}>{200 - symbolCount}</div>
        </Field>

        <StepsNav />
      </form>
      <Modal
        style='succes'
        title='Форма успешно отправлена'
        isOpen={showModal}
        closeModal={() => setShowModal(false)}>
        <div className={styles.modalContent}>
          <SuccesIcon />
          <Button onClick={handleSuccesFormClick}>На главную</Button>
        </div>
      </Modal>
    </>
  );
};

export default About;
