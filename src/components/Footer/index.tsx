import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import styles from './styles.module.css';

export default function Footer () {
  return <footer className={styles.footer}>
    <div className={styles.container__sections}>
      <div>
        <h3 className={styles.section__title}>Información de contacto</h3>
        <p>Dirección: 123 Calle Principal, Ciudad</p>
        <p>Teléfono: (123) 456-7890</p>
        <p>Email: ejemplo@example.com</p>
      </div>
      <div className={styles.section__menu}>
        <h3 className={styles.section__title}>Enlaces</h3>
        <ul>
          <li><Link href="/">Inicio</Link></li>
          <li><Link href="/acerca">Acerca</Link></li>
          <li><Link href="/proyectos">Proyectos</Link></li>
          <li><Link href="/contacto">Contacto</Link></li>
        </ul>
      </div>
    </div>
    <div className={`${styles.section__menu} ${styles.section__social} ${styles.section__social__menu}`}>
      <h3 className={styles.section__title}>Enlaces</h3>
      <ul>
        <li className={styles.url__social}><a href="/servicios">@facebook</a><FaFacebookF /></li>
        <li className={styles.url__social}><a href="/acerca-de">@instagram</a><FaInstagram /></li>
        <li className={styles.url__social}><a href="/contacto">@Linkedin</a><FaLinkedinIn /></li>
      </ul>
    </div>
</footer>
}