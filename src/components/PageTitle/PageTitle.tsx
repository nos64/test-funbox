import { titleText } from '../../common/constants';
import React from 'react';
import styles from './PageTitle.module.scss';

const PageTitle = () => <h1 className={styles.title}>{titleText}</h1>

export default PageTitle;