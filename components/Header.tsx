import Link from 'next/link';
import styles from '../styles/Header.module.css';

const Header = () => (
  <header className={styles.header}>
    <nav>
      <ul>
        <li ><Link href="/" style={{color:'black', lineHeight:'1rem'}}>SPARKBIT</Link></li>
        <li><Link href="/caseStudies">CASE STUDIES</Link></li>
        <li><Link href="/services">SERVICES</Link></li>
        <li><Link href="/contact">MEET US</Link></li>
      </ul>
    </nav>
  </header>
);

export default Header;
