import React from 'react';
import styles from './LinkText.module.scss';

interface ILinkText {
  linkText: string;
  isSelected: boolean;
  setIsSelected: React.Dispatch<React.SetStateAction<boolean>>;
}

const LinkText: React.FC<ILinkText> = ({ linkText, isSelected, setIsSelected }) => {
  return (
    <>
      {!isSelected ? (
        <p className={styles.tagline}>
          Чего сидишь? Порадуй котэ,{' '}
          <button
            className={styles.taglineBtn}
            onClick={() => setIsSelected(true)}
            aria-label="Кнопка купить"
          >
            купи
          </button>
          <span className={styles.dot}>.</span>
        </p>
      ) : (
        <p className={styles.tagline}>{linkText}</p>
      )}
    </>
  );
};

export default LinkText;
