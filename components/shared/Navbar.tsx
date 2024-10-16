'use client'
import React, { useState } from 'react';
import product from "../../env";
import Link from "next/link";
import styles from "./navbar.module.css";
import {Drawer} from "antd";
import ButtonShop from "../ui/ButtonShop";
import CardShop from "./CardShop";
import {useSelector} from "react-redux";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const data = useSelector(state => state)

    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };

    return (
        <div className={styles.container}>
            <div className={styles.containerLink}>
                {product.map((cardItems:any) => (
                    <Link key={'link'+ cardItems.id + cardItems.name} className={styles.link} href={'#' + cardItems.name}>{cardItems.name}</Link>
                ))}
            </div>
            <ButtonShop onClick={showDrawer} sumItems={3}/>
            <Drawer width={430} title="Корзина" onClose={onClose} open={open}>
                <div className={styles.container}>
                    {data ?
                        <div>
                            {data.product.map((product) => (
                                <CardShop classNames={styles.containerLink}  key={product.card.id + product.card.name} data={product}/>
                            ))}
                        </div> :
                        <div>

                        </div>}
                </div>
            </Drawer>
        </div>
    );
};

export default Navbar;