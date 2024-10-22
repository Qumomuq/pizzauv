import React from 'react';
import product from "../../../env";
import styles from "@/styles/cardContainer.module.css";
import CardItems from "./CardItems";

const CardContainer = () => {
    return (
        <div className={styles.mainContainer}>
            {product.map((cardItems: any) => (
                <div key={cardItems.id + cardItems.name} id={cardItems.name} className={styles.container}>
                    <p  className={styles.title}>{cardItems.name}</p>
                    <CardItems card={cardItems.items}/>
                </div>
            ))}
        </div>
    );
};

export default CardContainer;