import React from 'react';
import styles from "./cardShop.module.css";
import {useDispatch} from "react-redux";

const CardShop = ({data}) => {
    const dispatch = useDispatch()
    // console.log(data)

    const deleteCard = () => {
        // console.log({groupId: data.groupId, cardId: data.card.id})
        dispatch({type:'DELETE_ALL_PRODUCT', payload: data.card.id})
    }
    return (
        <div className={styles.container}>
            {data.card.name}
            {/*{data.card.id}*/}
            <button onClick={() => deleteCard()}>fffff</button>
        </div>
    );
};

export default CardShop;