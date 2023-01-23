import axios from 'axios';

import { BASE_URL, PREFIX_PRODUCT } from '../common/constants';

export const getData = async () => {
  const cardData = await axios.get(`${BASE_URL}${PREFIX_PRODUCT}`);
  return cardData;
};
