import Link from 'next/link';
import styles from '../src/styles/Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <ul>
      <li>
        <Link href="/calendar">Calendar</Link>
      </li>
      <li>
        <Link href="/numpad">NumPad</Link>
      </li>
    </ul>
  </div>
);

export default Home;
