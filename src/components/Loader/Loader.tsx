import React from 'react';

import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.loaderContainer}>
    <div className={styles.loader}>
        <span></span>
    </div>
</div>
  );
};

export default Loader;