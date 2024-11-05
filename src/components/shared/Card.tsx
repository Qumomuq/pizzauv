import React, {useState} from 'react';
import styles from "@/styles/card.module.css";
import ButtonCard from "../ui/ButtonCard";
import { RussianRuble } from 'lucide-react';
import Image from "next/image";
import {Modal} from "antd";

const Card = ({ dataCard }) => {
    const [open, setOpen] = useState(false);

    return (
        <div className={styles.mainContainer}>
            <Modal
                title="Modal 1000px width"
                centered
                open={open}
                // onOk={() => setOpen(false)}
                // onCancel={() => setOpen(false)}
                width={1000}
            >

            </Modal>




            <button onClick={ () => setOpen(true)}>
                <div className={styles.containerImage}>
                    <Image src={`/${dataCard.name}.png`}
                           alt={dataCard.name}
                           className={styles.image}
                           fill={true}
                    />
                </div>
                <div className={styles.containerText}>
                    <p className={styles.title}>{dataCard.name}</p>
                    <p className={styles.description}>{dataCard.description}</p>
                </div>
            </button>
            <div className={styles.container}>
                <div className={styles.cost}>
                    <RussianRuble size={20} strokeWidth={2.5} color="rgb(255, 105, 0)" />
                    <p>{dataCard.price}</p>
                </div>
                <ButtonCard dataCard={dataCard}/>
            </div>
        </div>
    );
};

export default Card;