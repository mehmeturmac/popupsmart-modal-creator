import React from 'react';
import styles from './index.module.scss';
import Card from './Card';

export default function ModalList() {
  const [page, setPage] = React.useState<number>(0);

  return (
    <>
      <div className={styles.modalList}>
        <h6>1</h6>
        <p>Choose your template</p>
      </div>
      <div className={styles.listGrid}>
        {[...Array(12)].map((_, i) => (
          <Card key={12 * page + i} id={12 * page + i} />
        ))}
      </div>
      <div className={styles.pagination}>
        {[...Array(3)].map((_, i) => (
          <div key={i}>
            <input type="radio" id={`page${i}`} checked={i === page ? true : false} onChange={() => setPage(i)} />
            <label htmlFor={`page${i}`}>{i + 1}</label>
          </div>
        ))}
      </div>
    </>
  );
}
