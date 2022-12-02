import React, { useState } from 'react';
import { ICard } from 'types/types';
import styles from './Card.module.scss';
import LinkText from './LinkText';

const Card: React.FC<ICard> = (props) => {
  const { hero, title, subtitle, amount, bonus, extra, weight, unit, linkText } = props;

  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => setIsSelected(!isSelected);

  return (
    <div className ={styles.cardContent}>
      <div className={isSelected ? `${styles.cardBorder} ${styles.active}` : styles.cardBorder} onClick={handleClick}>
        <div className={styles.card}>
          <p className={styles.heroText}>{hero}</p>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.description}>
            <p className={styles.amount}>{amount}</p>
            <p className={styles.bonus}>{bonus}</p>
            <p className={styles.extra}>{extra}</p>
          </div>
          <div className={isSelected ? `${styles.oval} ${styles.active}` : styles.oval}>
            <p className={styles.weight}>{weight}</p>
            <p className={styles.unit}>{unit}</p>
          </div>
        </div>
      </div>
      <LinkText linkText={linkText} isSelected={isSelected}  setIsSelected={setIsSelected}/>
    </div>
  );
};

export default Card;