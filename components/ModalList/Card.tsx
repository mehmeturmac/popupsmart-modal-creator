import styles from './Card.module.scss';
import * as React from 'react';
import { MainContext } from '../../context/mainContext';
import { MainContextInterface } from '../../context/@types.main';

export default function Card({ id }: any) {
  const { modalID, setModalID } = React.useContext(MainContext) as MainContextInterface;
  return (
    <div className={styles.card}>
      <img src={`/modals/modal${id}.png`} />
      <span className={id === modalID ? 'opacity-100' : 'opacity-0'}></span>
      <button className={id === modalID ? 'opacity-100' : 'opacity-0'} onClick={() => setModalID(id)}>
        {id === modalID ? 'Selected template' : 'Select template'}
      </button>
    </div>
  );
}
