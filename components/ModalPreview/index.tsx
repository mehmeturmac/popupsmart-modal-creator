import styles from './index.module.scss';
import React, { Suspense } from 'react';
import { MainContext } from '../../context/mainContext';
import { MainContextInterface } from '../../context/@types.main';

// Modals
function loadModals(name: any) {
  return React.lazy(() => import(`../Modals/Modal${name}.tsx`));
}

export default function ModalPreview() {
  const { modalID } = React.useContext(MainContext) as MainContextInterface;

  const Modal = loadModals(modalID);

  return (
    <div className={styles.modalPreview}>
      <Suspense fallback={<div>Loading...</div>}>
        <Modal />
      </Suspense>
    </div>
  );
}
