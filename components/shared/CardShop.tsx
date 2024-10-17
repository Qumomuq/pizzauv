import React from 'react';
import styles from "./cardShop.module.css";
import {useDispatch} from "react-redux";
import ButtonCard from "../ui/ButtonCard";

const CardShop = ({data}) => {
    const dispatch = useDispatch()

    let sum = data.sumItems * data.card.price || 0
    return (
        <div className={styles.container}>
            <div className={styles.description}>
                {data.card.name}
            </div>
            <div className={styles.order}>
                {sum}
                <ButtonCard dataCard={data.card}/>
            </div>

            {/*{data.card.id}*/}
            {/*<button onClick={() => deleteCard()}>fffff</button>*/}
            {/*{data.sumItems}*/}
        </div>
    );
};

export default CardShop;