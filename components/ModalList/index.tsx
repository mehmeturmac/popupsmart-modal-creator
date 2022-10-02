import styles from './index.module.scss';
import Card from './Card';

export default function ModalList() {
  return (
    <>
      <div className={styles.modalList}>
        <h6>1</h6>
        <p>Choose your template</p>
      </div>
      <div className={styles.listGrid}>
        {[...Array(2)].map((_, i) => (
          <Card key={i} id={i} />
        ))}
      </div>
    </>
  );
}
