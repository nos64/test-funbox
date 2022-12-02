import React from 'react';
import styles from './Card.module.scss';

const Card = () => {
  return (
    <div className ={styles.cardContent}>
      <div className={styles.cardBorder}>
        <div className={styles.card}>
          <p className={styles.heroText}>Сказочное заморское яство</p>
          <h2 className={styles.title}>Нямушка</h2>
          <p className={styles.subtitle}>с фуа-гра</p>
          <div className={styles.description}>
            <p>10 порций</p>
            <p>мышь в подарок</p>
            <p>заказчик доволен</p>
          </div>
          <div className={styles.oval}>
            <p className={styles.ovalCntentNum}>5</p>
            <p className={styles.ovalCntentText}>кг</p>
          </div>
        </div>
      </div>
      <p className={styles.tagline}>Чего сидишь? Порадуй котэ,
          <span className={styles.taglineBtn}>купи.</span>
        </p>
    </div>
  );
};

export default Card;