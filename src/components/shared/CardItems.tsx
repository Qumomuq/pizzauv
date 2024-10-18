import React from 'react';
import Card from "./Card";
import styles from "@/styles/cardItems.module.css";


const CardItems = ({card}) => {
    return (
        <div className={styles.container}>
            { card.map((dataCard: any) => (
                <Card key={dataCard.id} dataCard={dataCard}/>
            ))}
        </div>
    );
};

export default CardItems;