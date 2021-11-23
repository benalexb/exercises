import Link from 'next/link';
import styles from '../styles/Home.module.css';

const Home = () => (
  <div className={styles.container}>
    <ul>
      <li>
        <Link href="/calendar">Calendar</Link>
      </li>
    </ul>
  </div>
);

export default Home;
