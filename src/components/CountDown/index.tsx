import React, { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import dayjs from 'dayjs';

export const Countdown = ({
  countDownTime,
  isDark,
  callBack,
}: {
  countDownTime: number;
  isDark?: boolean;
  callBack?: () => void;
}) => {
  // useState Hooks
  const [state, setState] = useState({
    seconds: 0,
    hours: 0,
    minutes: 0,
    days: 0,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      countDown();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [countDownTime]);

  const countDown = () => {
    if (countDownTime === 0) return;
    const utcTime = dayjs.utc(countDownTime * 1000);
    const currentTime = dayjs.utc();
    const diffDay = utcTime.diff(currentTime);
    if (diffDay < 1) {
      callBack && callBack();
      return;
    }
    const duration = dayjs.duration(diffDay);
    const days = duration.days();
    const hours = duration.hours();
    const minutes = duration.minutes();
    const seconds = duration.seconds();
    setState({
      days,
      hours,
      minutes,
      seconds,
    });
  };

  return (
    <div className="flex">
      <div className="grid grid-cols-4 gap-3 text-white">
        <div className={`${styles.countdownBox} `}>
          {state.days}
          <span className={`${styles.legend} `}>Days</span>
        </div>
        <div className={`${styles.countdownBox} `}>
          {state.hours}
          <span className={`${styles.legend} `}>Hours</span>
        </div>
        <div className={`${styles.countdownBox} `}>
          {state.minutes}
          <span className={`${styles.legend} `}>Minutes</span>
        </div>
        <div className={`${styles.countdownBox} `}>
          {state.seconds}
          <span className={`${styles.legend} `}>Seconds</span>
        </div>
      </div>
    </div>
  );
};
