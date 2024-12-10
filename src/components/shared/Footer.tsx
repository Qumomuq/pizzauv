import React from 'react';
import styles from "@/styles/footer.module.css";
import Link from "next/link";
import {Camera, Mail} from "lucide-react";

const Footer = () => {
    return (
        <div className={styles.mainContainer}>
            <p className={styles.name}>Южные ворота</p>
            <div className={styles.container}>
                <div className={styles.containerDesc}>
                    <p className={styles.text}>Мы находимся по адресу:</p>
                    <p className={styles.description}>Южное залупино, строение 6 Южное залупино, строение 6</p>
                </div>
                <div className={styles.containerDesc}>
                    <p className={styles.text}>Вы можете найти нас в соцсетях:</p>
                    <ul>
                        <li><Link className={styles.description} target="_blank" href="https://vk.com/id839432387?from=search">VK  <Mail /></Link></li>
                        <li><Link className={styles.description} target="_blank" href="https://vk.com/id839432387?from=search">Instagram  <Camera /></Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;