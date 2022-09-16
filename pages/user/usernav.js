import Link from "next/link";
import styles from "common/style/Nav.module.css";

export default function UserNav(){
  return (
    
      <ul>
        <li className={styles.li}> <Link href='join'>SignUP</Link> </li>      
        <li className={styles.li}> <Link href='login'>Login</Link> </li>      
        <li className={styles.li}> <Link href='logout'>Logout</Link> </li>      
        <li className={styles.li}> <Link href='userProfile'>프로필</Link> </li>      
        <li className={styles.li}> <Link href='getUsers'>회원 목록</Link> </li>      
        <li className={styles.li}> <Link href='updateUser'>사용자 수정</Link> </li>      
        <li className={styles.li}> <Link href='withdrawUser'>회원 탈퇴</Link> </li>      

    
      </ul>
    
  );
};