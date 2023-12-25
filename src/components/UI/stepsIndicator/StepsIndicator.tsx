import { useEffect, useState } from 'react';

import styles from './stepsIndicator.module.scss';
import check from '../../../assets/svg/check.svg';
import cn from 'classnames';

interface StepsIndicatorProps {
  data: {
    id: number;
    title: string;
    isDone: boolean;
  }[];
  activeStep: number;
}

const StepsIndicator = ({ data, activeStep }: StepsIndicatorProps) => {
  const [tailWidth, setTailWidth] = useState(0);

  useEffect(() => {
    setTailWidth((activeStep / (data.length - 1)) * 100);
  }, [activeStep, data.length]);

  return (
    <div className={styles.indicator}>
      <div className={styles.indicatorList}>
        {data.map((item) => (
          <div
            className={cn(
              styles.bullet,
              item.id === activeStep && styles.active,
              item.isDone && styles.isDone
            )}
            style={item.isDone ? { backgroundImage: `url(${check})` } : {}}
            key={item.id}>
            <span>{item.title}</span>
          </div>
        ))}
      </div>
      <div
        className={styles.progressBar}
        style={{ width: tailWidth + '%' }}></div>
    </div>
  );
};

export default StepsIndicator;
