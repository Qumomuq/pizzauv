import React from 'react';
import styles from "./button.module.css";

const Button = ({children, onClick}) => {
    return (
        <button onClick={onClick} className={styles.buttonAuth}>
            {children}
        </button>
    );
};

export default Button;