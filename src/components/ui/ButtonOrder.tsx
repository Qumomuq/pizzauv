import React, {useState} from 'react';
import styles from "../../styles/button.module.css";
import {sendOrderDetails} from "../../utils/fetcherMail.ts";
import Modal from "@/components/ui/Modal";

const ButtonCard = ({data, phone, sumOrder, sumProduct, address, time}) => {
    const [modalActive, setModalActive] = useState(false);
    const [loading, setLoading] = useState(true); // Состояние загрузки
    const [responseText, setResponseText] = useState('');
    const placingAnOrder = () => {
        const date = new Date();
        const formattedDate = date.toLocaleString('ru-RU', {
           timeZone: 'Asia/Krasnoyarsk', // часовой пояс для Томска
           day: '2-digit',
           month: '2-digit',
           year: 'numeric',
           hour: '2-digit',
           minute: '2-digit',
           second: '2-digit',
           hour12: false // 24-часовой формат
        });

        const orderDetails = `Детали заказа:
        Номер телефона: ${phone}. 
        Сумма заказа: ${sumOrder}.
        Способ получения: ${address.name}.
        ${address.address ? 'Адрес: ' + address.address : null}
        
        Время получения: ${time.name}.
        ${time.time ? 'Время: ' + time.time : null}
        
        Общее количество позиций: ${sumProduct}.
        Дата заказа: ${formattedDate}.
        ${data.product.map((product) =>`
        Название товара: ${product.card.name}, Цена: ${product.card.price}, Количество:${product.sumItems} `).join('\n')}
        `
        setLoading(true)
        setModalActive(true)
        sendOrderDetails(orderDetails).then(r => {
            if (r === 'success') {
                setResponseText('Заказ отправлен. С вами свяжутся в течение нескольких минут)))')
            } else {
                setResponseText('При отправке заказа произошла ошибка. Попробуйте еще раз или позвоните нам по номеру 8 (995) 699-87-27. Ваша корзина сохранена. Приносим извинения за предоставленные неудобства')
            }
            setLoading(false)
        });

    }
    let textButton = ''
    let disabled = true
    if (address.value === '0') {
        if (phone.length === 18) {
            disabled = false
            textButton = 'Заказать'
        }
        else {
            textButton = 'Введите номер телефона'
            disabled = true
        }
    } else if(address.value === '1') {
        if (phone.length === 18 && address.address.length !== 0) {
            textButton = 'Заказать'
            disabled = false
        } else if(phone.length !== 18) {
            disabled = true
            textButton = 'Введите номер телефона'
        } else if (address.address.length === 0) {
            disabled = true
            textButton = 'Введите адрес доставки'
        }
    }

    return (
        <>
        <Modal active={modalActive} setActive={setModalActive}>
            <div className={styles.containerModal}>
                {loading ? (
                    <span className={styles.loader}></span>
                ) : (
                    <span className={styles.text}>{responseText}</span>
                )}
            </div>
        </Modal>
        <button disabled={disabled} onClick={() => {placingAnOrder()}} className={styles.buttonOrder}>
            {textButton}
        </button>
        </>
    );
};

export default ButtonCard;
