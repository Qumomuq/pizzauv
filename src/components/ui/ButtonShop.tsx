import React from 'react';
import styles from "../../styles/button.module.css";
import { MoveRight } from 'lucide-react';

const ButtonShop = ({ onClick, sumItems }) => {
    return (
        <button onClick={onClick} className={styles.buttonShop}>
            <span>Корзина</span>
            {sumItems !== 0 ?
                <>
                <div className={styles.separator}>|</div>
                <div className={styles.buttonContainer}>
                    <span className={styles.shopItem}>{sumItems}</span>
                    <span className={styles.shopIcon}><MoveRight/></span>
                </div>
                </>
                : null
            }

        </button>
    );
};

export default ButtonShop;