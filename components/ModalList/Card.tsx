import styles from './Card.module.scss';

export default function Card({ item }: any) {
  return (
    <div className={styles.card}>
      <img src={`/modals/${item}.png`} width="180px" height="180px" />
      <span></span>
      <button>Select template</button>
    </div>
  );
}
