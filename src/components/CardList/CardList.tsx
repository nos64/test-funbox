import Card from '../Card';
import React, { useEffect, useState } from 'react';
import styles from './CardList.module.scss';
import { getData } from '../../api/axios';
import { ICard } from 'types/types';

const CardList = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getData();
      setCards(data.data);
    })()
    
  }, [])
  return (
    <ul className={styles.contentWrapper}>
      {cards.map((card) => (
        <Card 
        key={card.id}
        {...card}
        />
      ))}
      
    </ul>
  );
};

export default CardList;