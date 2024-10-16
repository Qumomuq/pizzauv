'use client'
import React, {useEffect, useState} from 'react';
import styles from "./button.module.css";
import {useDispatch, useSelector} from "react-redux";

const ButtonCard = ({children, dataCard}) => {
    const dispatch = useDispatch()
    const data = useSelector(state => state.product)
    let sum = data.filter(card => (card.card.id === dataCard.id))[0]?.sumItems || 0
    const addCard = () => {
        dispatch({type: 'ADD_PRODUCT', payload: {card:dataCard} })
    }

    const deleteCard = () => {
        dispatch({type: 'DELETE_PRODUCT', payload: {card:dataCard} })
    }

    return (
        <>
             { sum === 0 ?
                <button onClick={() => addCard()} className={styles.button}>
                    {children}
                </button>
                 :
                <div className={styles.combineButton}>
                    <button onClick={() => deleteCard()}>-</button>
                     <span>{sum}</span>
                    <button onClick={() => addCard()}>+</button>
                </div>
             }
        </>
    );
};

export default ButtonCard;