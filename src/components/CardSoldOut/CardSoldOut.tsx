import React from 'react';
import { ICard } from 'types/types';
import styles from './CardSoldOut.module.scss';

const CardSoldOut: React.FC<ICard> = (props) => {
  const { hero, title, subtitle, bonus, weight, unit, image } = props;

  return (
    <li className={styles.cardContent}>
      <div className={styles.card}>
        <p className={styles.card__heroText}>{hero}</p>
        <h2 className={styles.card__title}>{title}</h2>
        <p className={styles.card__subtitle}>{subtitle}</p>
        <ul className={styles.card__description}>
          {bonus.map((item, index) => (
            <li key={index} className={styles.card__bonus}>
              {item}
            </li>
          ))}
        </ul>
        <img className={styles.card__image} src={image} alt="Изображение продукта" />
        <div className={styles.oval}>
          <p className={styles.oval__weight}>{weight}</p>
          <p className={styles.oval__unit}>{unit}</p>
        </div>
      </div>
      <p className={styles.tagline}>Печалька, {subtitle} закончился.</p>
    </li>
  );
};

export default CardSoldOut;
