import styles from './index.module.scss';

import ModalList from '../ModalList';
import ModalDetails from '../ModalDetails';
import ModalPreview from '../ModalPreview';

export default function Container() {
  return (
    <div className={styles.container}>
      <main>
        <h3>Modal Card Generator</h3>
        <p>Measure your return on email marketing efforts easier and faster by using thebest online tools. Popupsmart is ready to help you build an efficient email list!</p>
      </main>
      <ModalList />
      <div className={styles.containerGrid}>
        <ModalDetails />
        <ModalPreview />
      </div>
    </div>
  );
}
