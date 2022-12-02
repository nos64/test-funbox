import React, { useEffect, useState } from 'react';

import Card from '../Card';
import CardSoldOut from '../CardSoldOut';

import { getData } from '../../api/axios';
import { ICard } from 'types/types';
import styles from './CardList.module.scss';

const CardList = () => {
  const [cards, setCards] = useState<ICard[]>([]);
  useEffect(() => {
    (async () => {
      const data = await getData();
      setCards(data.data);
    })();
  }, []);
  return (
    <ul className={styles.contentWrapper}>
      {cards.map((card) =>
        !card.isSoldOut ? <Card key={card.id} {...card} /> : <CardSoldOut key={card.id} {...card} />
      )}
    </ul>
  );
};

export default CardList;
