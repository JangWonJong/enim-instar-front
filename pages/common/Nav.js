import Link from "next/link";
import styles from "./style/Nav.module.css";

export default function Nav(){
  return (
    <nav className={styles.nav}>
      <ul>
        <li className={styles.li}> <Link href='/'>Home</Link> </li>
        <li className={styles.li}> <Link href='/user/usernav'>사용자 관리</Link> </li>
        <li className={styles.li}> <Link href='/post/postnav'>게시판</Link> </li>


      </ul>
    </nav>
  );
};