import styles from './index.module.scss';

import Card from './Card';

const list = Array.from(Array(1), (_, i) => i);

export default function ModalList() {
  return (
    <>
      <div className={styles.modalList}>
        <h6>1</h6>
        <p>Choose your template</p>
      </div>
      <div className={styles.listGrid}>
        {list.map((id, i) => (
          <Card key={i} id={id} />
        ))}
      </div>
    </>
  );
}
