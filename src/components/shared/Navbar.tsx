import React, {useEffect, useState} from 'react';
import product from "../../../env";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import {ConfigProvider, Drawer} from "antd";
import ButtonShop from "../ui/ButtonShop";
import CardShop from "./CardShop";
import {useSelector} from "react-redux";
import ButtonOrder from "../ui/ButtonOrder";
import {RussianRuble} from "lucide-react";
import { IMaskInput } from 'react-imask';
import {Nunito} from "next/font/google";
import DeliveryButton from "@/components/ui/DeliveryButton";

const nunito = Nunito({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
});

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [phone, setPhone] = useState('');
    const [selectedOption, setSelectedOption] = useState('0')
    const [address, setAddress] = useState('')

    const options = [
        {'value': '0', 'label': 'Самовывоз'},
        {'value': '1', 'label': 'Доставка'}
    ]

    const data = useSelector(state => state.reducerProduct)

    let sumOrder = 0
    let sumProduct = 0
    data?.product.map((product) => {
        sumOrder += product.card.price * product.sumItems
        sumProduct += product.sumItems
    })
    let sumOrderSale = sumOrder

    function handleInput(e) {
        setPhone(e)
    }

    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

    const footerHeight = selectedOption === '0' ? '255px' : '340px';
    const footerAnim = selectedOption === '0' ? '0.35s' : '0.2s';
    const drawerStyles = {
        mask: {
            backdropFilter: 'blur(10px)',
        },
        content: {
            display: 'flex',
            flexDirection: 'column',
        },
        body: {
            padding: 0,
        },
        footer: {
            height: footerHeight,
            transition: `height ${footerAnim} ease`, // Плавная анимация изменения высоты
        },
    };

    function minusPercent(n, p) {
        return n - (n * (p/100));
    }
    if(selectedOption === '0') {
        sumOrder = minusPercent(sumOrder, 10)
    } else {
        sumOrder = sumOrderSale
    }
    const addressObj = {'value':selectedOption, 'name': options[selectedOption].label, 'address': address,}

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
                width={430}
                footer={
                    <div>
                        <div className={styles.textFooter}>
                            <span>Сумма заказа</span>
                            <div className={styles.cost}>
                                {selectedOption === '0' && sumOrder !== 0 ? <stricken className={styles.textSale}> {sumOrderSale} </stricken> : null}
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
                                required
                            />
                        </div>
                        <DeliveryButton options={options} selectedOption={selectedOption} setSelectedOption={setSelectedOption} address={address} setAddress={setAddress} />
                        <ButtonOrder data={data} phone={phone} sumOrder={sumOrder} sumProduct={sumProduct} address={addressObj}/>
                    </div>
                }>
                <div className={nunito.className}>
                    {data ?
                        <div className={styles.containerDrawer}>
                            {data.product.map((product) => (
                                <CardShop key={product.card.id + product.card.name} data={product}/>
                            ))}
                        </div> :
                        <div>

                        </div>
                    }
                </div>
            </Drawer>
        </div>
    );
};

export default Navbar;