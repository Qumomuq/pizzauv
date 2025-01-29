import React, {useState} from 'react';
import styles from "../../styles/button.module.css";
import {sendOrderDetails} from "../../utils/fetcherMail.ts";
import Modal from "@/components/ui/Modal";

const ButtonCard = ({data, phone, sumOrder}) => {
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
        Дата заказа: ${formattedDate}.
        ${data.product.map((product) =>`
        Название товара: ${product.card.name}, Цена: ${product.card.price}, Всего товаров:${product.sumItems} `).join('\n')}
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
        <button disabled={phone.length !== 18} onClick={() => {placingAnOrder()}} className={styles.buttonOrder}>
            {phone.length!==18 ? 'Введите номер телефона' : 'Заказать'}
        </button>
        </>
    );
};

export default ButtonCard;