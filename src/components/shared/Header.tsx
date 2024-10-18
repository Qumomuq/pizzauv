import React from 'react';
import styles from "@/styles/header.module.css";
import ButtonAuth from "../ui/ButtonAuth";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <p>Южные ворота</p>
            </div>
            <div className={styles.right}>
                <ButtonAuth>Войти</ButtonAuth>
            </div>
        </div>
    );
};

export default Header;