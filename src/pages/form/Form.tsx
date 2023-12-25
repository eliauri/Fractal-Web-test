import { useAppSelector } from '../../hooks/hook';

import StepsIndicator from '../../components/UI/stepsIndicator/StepsIndicator';
import Info from '../../components/steps/Info';
import Advantages from '../../components/steps/Advantages';
import About from '../../components/steps/About';

import styles from './form.module.scss';

const stepsComponetns = [<Info />, <Advantages />, <About />];

const Form = () => {
  const steps = useAppSelector((state) => state.form.steps);
  const activeStep = useAppSelector((state) => state.form.activeStep);
  return (
    <div className={styles.form}>
      <StepsIndicator data={steps} activeStep={activeStep} />
      <div className={styles.step}>{stepsComponetns[activeStep]}</div>
    </div>
  );
};

export default Form;
