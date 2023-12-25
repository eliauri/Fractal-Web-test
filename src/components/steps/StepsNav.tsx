import { useNavigate } from 'react-router-dom';

import { useAppDispatch, useAppSelector } from '../../hooks/hook';
import { stepDecrease } from '../../../store/formSlice';
import Button from '../UI/button/Button';

import styles from './step.module.scss';

const StepsNav = () => {
  const dispatch = useAppDispatch();
  const { activeStep, steps } = useAppSelector((state) => state.form);

  const navigate = useNavigate();

  const handleClickBack = () => {
    if (activeStep === 0) return navigate('/');
    dispatch(stepDecrease());
  };

  return (
    <div className={styles.navigation}>
      <Button style='border' onClick={handleClickBack}>
        Назад
      </Button>
      {activeStep != steps.length - 1 ? (
        <Button type='submit'>Далее</Button>
      ) : (
        <Button type='submit'>Завершить</Button>
      )}
    </div>
  );
};

export default StepsNav;
