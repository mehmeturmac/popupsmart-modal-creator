import styles from './Card.module.scss';
import * as React from 'react';
import { MainContext } from '../../context/mainContext';
import { MainContextInterface } from '../../context/@types.main';

export default function Card({ id }: any) {
  const { modalID, setModalID } = React.useContext(MainContext) as MainContextInterface;
  return (
    <div className={styles.card}>
      <img src={`/modals/modal${id}.png`} />
      {id < 8 && (
        <>
          <span className={id === modalID ? 'opacity-100' : 'opacity-0'}></span>
          <button className={id === modalID ? 'opacity-100' : 'opacity-0'} onClick={() => setModalID(id)}>
            {id === modalID ? 'Selected template' : 'Select template'}
          </button>
        </>
      )}
      {id > 7 && (
        <>
          <span className={'opacity-100'}></span>
          <button className={'opacity-100'}>{'Maintenance'}</button>
        </>
      )}
    </div>
  );
}
