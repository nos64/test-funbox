import React, { useState } from 'react';

import LinkText from './LinkText';

import { selectedHoverMessage } from '../../common/constants';
import { ICard } from 'types/types';
import styles from './Card.module.scss';

const Card: React.FC<ICard> = (props) => {
  const { hero, title, subtitle, bonus, weight, unit, image, image2x, linkText } = props;

  const [isSelected, setIsSelected] = useState(false);
  const [isMouseOnCard, setIsMouseOnCard] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
    setIsMouseOnCard(false);
  };

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
    <li className={styles.cardContent}>
      <div
        className={
          isSelected ? `${styles.card} ${styles.card_active}` : styles.card
        }
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {!isMouseOnCard ? (
          <p className={styles.card__heroText}>{hero}</p>
        ) : (
          <p className={styles.card__heroTextSelectedHover}>{selectedHoverMessage}</p>
        )}
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__subtitle}>{subtitle}</p>
        <ul className={styles.card__description}>
          {bonus.map((item, index) => (
            <li key={index} className={styles.card__bonus}>
              {item}
            </li>
          ))}
        </ul>
        <img className={styles.card__image} src={image} srcSet={`${image2x} 2x`} alt="Изображение продукта" />
        <div className={isSelected ? `${styles.oval} ${styles.oval_active}` : styles.oval}>
          <p className={styles.oval__weight}>{weight}</p>
          <p className={styles.oval__unit}>{unit}</p>
        </div>
      </div>
      <LinkText linkText={linkText} isSelected={isSelected} setIsSelected={setIsSelected} />
    </li>
  );
};

export default Card;
