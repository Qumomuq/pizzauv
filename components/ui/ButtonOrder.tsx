// 'use client'
import React, {useEffect, useState} from 'react';
import styles from "./button.module.css";
import {useDispatch, useSelector} from "react-redux";

const ButtonCard = ({children}) => {
    // const dispatch = useDispatch()
    // const data = useSelector(state => state.product)
   const placingAnOrder = () => {
    }

    return (
        <button onClick={() => placingAnOrder()} className={styles.buttonOrder}>
            Оформить заказ
        </button>
    );
};

export default ButtonCard;