import React from 'react';
import styles from "@/styles/header.module.css";
import ButtonAuth from "../ui/ButtonAuth";

const Header = () => {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <p className={styles.name}>Южные ворота</p>
            </div>
            <div className={styles.right}>
                «Тот, кто говорит, что счастье не в деньгах, явно никогда не тратил деньги на пиццу».
                {/*<ButtonAuth>Войти</ButtonAuth>*/}
            </div>
        </div>
    );
};

export default Header;