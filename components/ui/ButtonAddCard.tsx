'use client'
import React, {useEffect, useState} from 'react';
import styles from "./button.module.css";

const ButtonAddCard = ({children, dataGroup, dataCard}) => {

    const addCard = () => {
        let dataJSON = localStorage?.getItem('shoppingCart')

        if (dataJSON) {
            let data = JSON.parse(dataJSON)
            let checkCard = false
            for( let i = 0; i < data.product.length; i++) {
                if( data.product[i].group === dataGroup && data.product[i].item.id === dataCard.id) {
                    data.product[i].sumItems++
                    localStorage.setItem('shoppingCart', JSON.stringify(data))
                    checkCard = true
                    break
                }
            }
            if (!checkCard) {
                let newItem = {
                    group: dataGroup,
                    sumItems: 1,
                    item: dataCard
                }
                data.product.push(newItem)
                localStorage.setItem('shoppingCart', JSON.stringify(data))
            }
        } else {
            let product =  {
                product: [{
                    group: dataGroup,
                    sumItems: 1,
                    item: dataCard
                }]
            }
            localStorage.setItem('shoppingCart', JSON.stringify(product))
        }
    }

    return (
        <button onClick={() => addCard()} className={styles.button}>
            {children}
        </button>
    );
};

export default ButtonAddCard;