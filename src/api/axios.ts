import axios from 'axios';

import { BASE_URL } from '../common/constants';

export const getData = async () => {
  const cardData = await axios.get(BASE_URL);
  return cardData;
};
