import React from 'react';
import styles from "../../styles/modal.module.css";
import {X} from "lucide-react";

const Modal = ({active, setActive, children}) => {
    return (
        <div className={ active ? styles.modal + ' ' + styles.active : styles.modal } onClick={() => setActive(false)}>
            <div className={ active ? styles.modalContent + ' ' + styles.active : styles.modalContent } onClick={e => e.stopPropagation()}>
                <button onClick={() => setActive(false)} className={styles.close} ><X size={50} strokeWidth={2.5}/></button>
                {children}
            </div>
        </div>
    );
};

export default Modal;