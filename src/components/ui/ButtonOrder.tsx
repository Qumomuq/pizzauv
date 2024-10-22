import React, {useEffect, useState} from 'react';
import styles from "../../styles/button.module.css";
import {useDispatch, useSelector} from "react-redux";
import {sendMail} from "../../utils/fetcherMail.ts";

const ButtonCard = ({children}) => {
    // const dispatch = useDispatch()
    // const data = useSelector(state => state.product)
   const placingAnOrder = () => {
       sendMail('ff').then(r => r);
    }

    return (
        <button onClick={() => {placingAnOrder()}} className={styles.buttonOrder}>
            Оформить заказ
        </button>
    );
};

export default ButtonCard;