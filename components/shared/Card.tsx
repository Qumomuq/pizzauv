import React from 'react';
import styles from "./card.module.css";
import ButtonCard from "../ui/ButtonCard";
import { RussianRuble } from 'lucide-react';

const Card = ({ dataCard }) => {
    return (
        <div className={styles.mainContainer}>
            <div className={styles.image}></div>
            <div className={styles.containerText}>
                <p className={styles.title}>{dataCard.name}</p>
                <p className={styles.description}>{dataCard.description}</p>
            </div>
            <div className={styles.container}>
                <div className={styles.cost}>
                    <RussianRuble size={20} strokeWidth={2.5} color="rgb(255, 105, 0)" />
                    <p>{dataCard.price}</p>
                </div>
                <ButtonCard dataCard={dataCard} >Собрать</ButtonCard>
            </div>
        </div>
    );
};

export default Card;