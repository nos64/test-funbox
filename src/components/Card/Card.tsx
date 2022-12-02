
import React, { useState } from 'react';

import LinkText from './LinkText';

import { selectedHoverMessage } from '../../common/constants';

import { ICard } from 'types/types';

import styles from './Card.module.scss';


const Card: React.FC<ICard> = (props) => {
  const { hero, title, subtitle, amount, bonus, extra, weight, unit, linkText } = props;

  const [isSelected, setIsSelected] = useState(false);
  const [isMouseOnCard, setIsMouseOnCard] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    setIsMouseOnCard(false);
  } 

  const handleMouseEnter = () => {
    if (isSelected) {
      setIsMouseOnCard(true);
    }
  };

  const handleMouseLeave = () => {
    if (isSelected) {
      setIsMouseOnCard(false);
    }
  };

  return (
    <div className ={styles.cardContent}>
      <div className={isSelected ? `${styles.cardBorder} ${styles.active}` : styles.cardBorder}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.card}>
          {!isMouseOnCard ?
            <p className={styles.heroText}>{hero}</p> :
            <p className={styles.heroTextSelectedHover}>{selectedHoverMessage}</p>
          }
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