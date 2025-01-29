import React, {useEffect, useState} from 'react';
import styles from "@/styles/card.module.css";
import ButtonCard from "../ui/ButtonCard";
import { RussianRuble } from 'lucide-react';
import Image from "next/image";
import Modal from "../ui/Modal"

const Card = ({ dataCard }) => {
    const [modalActive, setModalActive] = useState(false);
    const renderDescription = (description) => {
        return description.split('\/n').map((line, index) => (
            <span key={index}>
                {line}
                <br/>
            </span>
        ));
    };
    return (
        <div className={styles.mainContainer}>
            <Modal active={modalActive} setActive={setModalActive}>
                <div className={styles.containerModal}>
                    <div className={styles.containerImageModal}>
                        <Image src={`/image/${dataCard.name}.png`}
                               alt={dataCard.name}
                               className={styles.imageModal}
                               fill={true}
                        />
                    </div>
                    <div className={styles.containerModalDetails}>
                        <div>
                            <div className={styles.cost}>
                                <p>{dataCard.name}</p>
                            </div>
                            <div>{renderDescription(dataCard.descriptionFull)}</div>
                        </div>
                        <div className={styles.footerModal}>
                            <div className={styles.cost}>
                                <RussianRuble size={20} strokeWidth={2.5} color="rgb(255, 105, 0)" />
                                <p>{dataCard.price}</p>
                            </div>
                            <ButtonCard dataCard={dataCard}/>
                        </div>
                    </div>
                </div>
            </Modal>
            {/*<Modal*/}
            {/*    centered*/}
            {/*    open={open}*/}
            {/*    onOk={() => setOpen(false)}*/}
            {/*    onCancel={() => setOpen(false)}*/}
            {/*    width={1000}*/}
            {/*    styles={modalStyles}*/}
            {/*    footer={null}*/}
            {/*>*/}
            {/*    <div className={styles.containerModal}>*/}
            {/*        <div className={styles.containerImageModal}>*/}
            {/*            <Image src={`/${dataCard.name}.png`}*/}
            {/*                   alt={dataCard.name}*/}
            {/*                   className={styles.imageModal}*/}
            {/*                   fill={true}*/}
            {/*            />*/}
            {/*        </div>*/}
            {/*        <div className={styles.containerModalDetails}>*/}
            {/*            <div></div>*/}
            {/*            <ButtonCard dataCard={dataCard}/>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</Modal>*/}

            <button onClick={ () => setModalActive(true)} className={styles.containerItem}>
                <div className={styles.containerImage}>
                    <Image src={`/image/${dataCard.name}.png`}
                           alt={dataCard.name}
                           className={styles.image}
                           fill={true}
                    />
                </div>
                <div className={styles.containerText}>
                    <p className={styles.title}>{dataCard.name}</p>
                    <p className={styles.description}>{renderDescription(dataCard.description)}</p>
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