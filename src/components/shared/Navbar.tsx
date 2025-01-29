import React, {useEffect, useRef, useState} from 'react';
import product from "../../../env";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import {Drawer} from "antd";
import ButtonShop from "../ui/ButtonShop";
import CardShop from "./CardShop";
import {useSelector} from "react-redux";
import type { DrawerStyles } from 'antd/es/drawer/DrawerPanel';
import ButtonOrder from "../ui/ButtonOrder";
import {RussianRuble} from "lucide-react";
import IMask from "imask";
import { IMaskInput } from 'react-imask';


const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [phone, setPhone] = useState('');
    const data = useSelector(state => state.reducerProduct)
    let sumProduct = 0
    data?.product.map((product) => (
        sumProduct += product.sumItems
    ))
    let sumOrder = 0
    data?.product.map((product) => (
        sumOrder += product.card.price * product.sumItems
    ))

    function handleInput(e) {
        setPhone(e)
    }

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const drawerStyles = {
        mask: {
            backdropFilter: 'blur(10px)',
        },
        content: {
            // boxShadow: styles.container,
            display: 'flex',
            flexDirection: 'column',
        },
        header: {
            // borderBottom: `1px solid ${token.colorPrimary}`,
        },
        body: {
            // fontSize: token.fontSizeLG,
            padding: 0
        },
        footer: {
            height: '160px'
        },
    };

    return (
        <div className={styles.container}>
            <div className={styles.containerLink}>
                {product.map((cardItems:any) => (
                    <Link key={'link'+ cardItems.id + cardItems.name} className={styles.link} href={'#' + cardItems.name}>{cardItems.name}</Link>
                ))}
            </div>
            <ButtonShop onClick={showDrawer} sumItems={sumProduct}/>
            <Drawer
                title="Корзина"
                placement="right"
                footer=' '
                onClose={onClose}
                open={open}
                styles={drawerStyles}
                width={430} >
                    {data ?
                        <div className={styles.containerDrawer}>
                            {data.product.map((product) => (
                                <CardShop key={product.card.id + product.card.name} data={product}/>
                            ))}
                        </div> :
                        <div>

                        </div>}
                <div className={styles.footer}>
                    <div className={styles.textFooter}>
                        <span>Сумма заказа</span>
                        <div className={styles.cost}>
                            <RussianRuble size={20} strokeWidth={2.5} color="rgb(255, 105, 0)" />
                            <span>{sumOrder}</span>
                        </div>
                    </div>
                    <div className={styles.textFooter}>
                        <span>Номер телефона</span>
                        <IMaskInput
                            className={styles.input}
                            mask={"+7 (000) 000-00-00"}
                            value={phone}
                            onAccept={(value, mask) => {handleInput(value)}}
                            placeholder='+7(012)345-67-89'
                        />
                    </div>
                    <ButtonOrder data={data} phone={phone} sumOrder={sumOrder}/>
                </div>
            </Drawer>
        </div>
    );
};

export default Navbar;