import React, {useState} from 'react';
import styles from "@/styles/cardShop.module.css";
import {useDispatch} from "react-redux";
import ButtonCard from "../ui/ButtonCard";
import {RussianRuble, Trash2} from "lucide-react";
import Modal from "@/components/ui/Modal";
import Image from "next/image";

const CardShop = ({data}) => {
    const dispatch = useDispatch()
    const deleteCard = () => {
        dispatch({type: 'DELETE_ALL_PRODUCT', payload: { card: data.card}})
    }
    let sum = data.sumItems * data.card.price || 0
    const [modalActive, setModalActive] = useState(false);

    return (
        <div className={styles.mainContainer}>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className={styles.containerModal}>
                    <div className={styles.containerImageModal}>
                        <Image src={`/${data.card.name}.png`}
                               alt={data.card.name}
                               className={styles.imageModal}
                               fill={true}
                        />
                    </div>
                    <div className={styles.containerModalDetails}>
                        <div className={styles.cost}>
                            <p>{data.card.name}</p>
                        </div>
                        <div>{data.card.description}</div>
                        <div className={styles.cost}>
                            <RussianRuble size={20} strokeWidth={2.5} color="rgb(255, 105, 0)" />
                            <p>{data.card.price}</p>
                        </div>
                        <div className={styles.footerModal}>
                            <ButtonCard dataCard={data.card}/>
                        </div>
                    </div>
                </div>
            </Modal>
            {/*image*/}
            <button onClick={ () => setModalActive(true)} className={styles.image}>
                <Image src={`/${data.card.name}.png`}
                       alt={data.card.name}
                       className={styles.imageModal}
                       fill={true}
                />
            </button>
            <div className={styles.container}>
                <button onClick={ () => setModalActive(true)} className={styles.description}>
                    <div className={styles.nameItem}>
                        {data.card.name}
                    </div>
                    <div>
                        Соус «{data.card.name}»
                    </div>
                </button>

                <div className={styles.order}>
                    <div className={styles.cost}>
                        <RussianRuble size={20} strokeWidth={2.5} color="rgb(255, 105, 0)" />
                        <p>{sum}</p>
                    </div>
                    <ButtonCard dataCard={data.card}/>
                </div>
            </div>
            <button onClick={() => deleteCard()} className={styles.deleteButton}><Trash2 /></button>
        </div>
    );
};

export default CardShop;