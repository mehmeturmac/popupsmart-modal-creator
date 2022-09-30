import styles from './Card.module.scss';
import * as React from 'react';
import { MainContext } from '../../context/mainContext';
import { MainContextInterface } from '../../context/@types.main';

export default function Card({ id }: any) {
  const { setModalID } = React.useContext(MainContext) as MainContextInterface;
  return (
    <div className={styles.card}>
      <img src={`/modals/modal${id}.png`} width="180px" height="180px" />
      <span></span>
      <button onClick={() => setModalID(id)}>Select template</button>
    </div>
  );
}
