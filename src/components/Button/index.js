import { useState } from 'react';
import styles from './style.module.css';

export default function Button() {
  const [counter, setCounter] = useState(1);

  return (
    <button className={styles.blue} onClick={() => setCounter(counter + 1)}>
      Hai, klik aku. {counter}
    </button>
  )
}