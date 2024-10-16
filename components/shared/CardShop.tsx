import React from 'react';
import styles from "./cardShop.module.css";

const CardShop = ({data}) => {
    return (
        <div className={styles.container}>
            {data.item.name}
        </div>
    );
};

export default CardShop;