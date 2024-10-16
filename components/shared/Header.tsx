import React from 'react';
import styles from "./header.module.css";
import ButtonCard from "../ui/ButtonCard";
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