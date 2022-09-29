import styles from './index.module.scss';

import Card from './Card';

const list = Array.from(Array(5), (_, i) => 'Modal' + i);

export default function ModalList() {
  return (
    <>
      <div className={styles.modalList}>
        <h6>1</h6>
        <p>Choose your template</p>
      </div>
      <div className={styles.listGrid}>
        {list.map((item, i) => (
          <Card key={i} item={item} />
        ))}
      </div>
    </>
  );
}
