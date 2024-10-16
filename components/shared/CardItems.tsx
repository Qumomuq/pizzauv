import React from 'react';
import Card from "./Card";
import styles from "./cardItems.module.css";


const CardItems = ({card, groupId}) => {
    return (
        <div className={styles.container}>
            { card.map((dataCard: any) => (
                <Card key={dataCard.id} dataGroup={groupId} dataCard={dataCard}/>
            ))}
        </div>
    );
};

export default CardItems;