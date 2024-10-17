'use client'
import React, {useEffect, useState} from 'react';
import product from "../../env";
import Link from "next/link";
import styles from "./navbar.module.css";
import {Drawer} from "antd";
import ButtonShop from "../ui/ButtonShop";
import CardShop from "./CardShop";
import {useSelector} from "react-redux";
import type { DrawerStyles } from 'antd/es/drawer/DrawerPanel';
import ButtonOrder from "../ui/ButtonOrder";
import {RussianRuble} from "lucide-react";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const data = useSelector(state => state)
    let sumProduct = 0
    data?.product.map((product) => (
        sumProduct += product.sumItems
    ))
    let sumOrder = 0
    data?.product.map((product) => (
        sumOrder += product.card.price * product.sumItems
    ))

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    const drawerStyles: DrawerStyles = {
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
            height: '120px'
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
                    <ButtonOrder/>
                </div>
            </Drawer>
        </div>
    );
};

export default Navbar;