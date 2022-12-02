import Card from '../Card';
import React from 'react';
import styles from './CardList.module.scss';

const CardList = () => {
  return (
    <div className={styles.contentWrapper}>
      <Card/>
    </div>
  );
};

export default CardList;