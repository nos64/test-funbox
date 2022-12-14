import React from 'react';
import { ICard } from 'types/types';
import styles from './CardSoldOut.module.scss';

const CardSoldOut: React.FC<ICard> = (props) => {
  const { hero, title, subtitle, amount, bonus, extra, weight, unit, linkText } = props;

  return (
    <li className={styles.cardContent}>
      <div className={styles.cardBorder}>
        <div className={styles.card}>
          <p className={styles.heroText}>{hero}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.description}>
            <p className={styles.amount}>{amount}</p>
            <p className={styles.bonus}>{bonus}</p>
            <p className={styles.extra}>{extra}</p>
          </div>
          <div className={styles.oval}>
            <p className={styles.weight}>{weight}</p>
            <p className={styles.unit}>{unit}</p>
          </div>
        </div>
      </div>
      <p className={styles.tagline}>Печалька, {subtitle} закончился.</p>
    </li>
  );
};

export default CardSoldOut;
