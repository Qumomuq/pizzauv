import React from 'react';
import styles from "@/styles/footer.module.css";
import Link from "next/link";
import {Camera, Mail, Send} from "lucide-react";

const Footer = () => {
    return (
        <div className={styles.mainContainer}>
            <p className={styles.name}>Южные ворота</p>
            <div className={styles.container}>
                <div className={styles.containerDesc}>
                    <p className={styles.text}>Мы находимся по адресу:</p>
                    <p className={styles.description}>Ул.Тихая 111, м-н Южные Ворота.</p>
                    <br/>
                    <p className={styles.text}>Номер телефона:</p>
                    <Link className={styles.description} href="tel:8 (995) 699-87-27">8 (995) 699-87-27</Link>

                </div>
                <div className={styles.containerDesc}>
                    <p className={styles.text}>Вы можете найти нас в соцсетях:</p>
                    <ul>
                        <li><Link className={styles.description} target="_blank" href="https://vk.com/id839432387?from=search">VK  <Mail /></Link></li>
                        <li><Link className={styles.description} target="_blank" href="https://t.me/PiccaYuzhnyeVorota">Telegram  <Send /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;