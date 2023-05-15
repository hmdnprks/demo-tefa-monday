import { useState } from 'react';
import styles from './style.module.css';
import { randomColor } from '../../utils/randomColor';

export default function NewButton() {

  const [color, setColor] = useState('blue');

  const setRandomColor = () => {
    const modColor = randomColor();
    setColor(modColor);
  }

  return (
    <div>
      <button className={styles.pink} style={{
        color: color
      }} onClick={setRandomColor}>
        Hai, klik aku untuk mengganti warna
      </button>
    </div>
  )
}