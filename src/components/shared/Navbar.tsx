import React, {useState} from 'react';
import product from "../../../env";
import Link from "next/link";
import styles from "@/styles/navbar.module.css";
import {Drawer} from "antd";
import ButtonShop from "../ui/ButtonShop";
import CardShop from "./CardShop";
import {useSelector} from "react-redux";
import ButtonOrder from "../ui/ButtonOrder";
import {RussianRuble} from "lucide-react";
import { IMaskInput } from 'react-imask';
import {Nunito} from "next/font/google";
import DeliveryButton from "@/components/ui/DeliveryButton";
import DeliveryTimeButton from "@/components/ui/DeliveryTimeButton";

const nunito = Nunito({
    subsets: ['cyrillic'],
    variable: '--font-nunito',
    weight: ['400', '500', '600', '700', '800', '900'],
});

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [phone, setPhone] = useState('');
    const [selectedOptionDelivery, setSelectedOptionDelivery] = useState('0')
    const [selectedOptionTime, setSelectedOptionTime] = useState('0')
    const [address, setAddress] = useState('')
    const [time, setTime] = useState<string|null>()

    const optionsDelivery = [
        {'value': '0', 'label': 'Самовывоз'},
        {'value': '1', 'label': 'Доставка'}
    ]
    const optionsTime = [
        {'value': '0', 'label': 'Ближайшее'},
        {'value': '1', 'label': 'Ко времени'}
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


    const resultFooterHeight = () => {
        if (selectedOptionDelivery === '0' && selectedOptionTime === '0') {
            return '330px'
        } else if (selectedOptionDelivery === '1' && selectedOptionTime === '1') {
            return '452px'
        } else if (selectedOptionDelivery === '0' || selectedOptionTime === '1') {
            return '370px'
        } else if (selectedOptionDelivery === '1' || selectedOptionTime === '0') {
            return '412px'
        }
    }

    const footerHeight = resultFooterHeight()
    const footerAnim = '0.3s'
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

    if(selectedOptionDelivery === '0' && sumOrder !== 0 ) {
        sumOrder = 0
        data?.product.map((product) => {
            if (product.card.properties.pickupDiscount === true) {
                sumOrder += minusPercent(product.card.price * product.sumItems, 10)
            } else {
                sumOrder += product.card.price * product.sumItems
            }
        })
    } else {
        sumOrder = sumOrderSale
    }

    const addressObj = {'value':selectedOptionDelivery, 'name': optionsDelivery[selectedOptionDelivery].label, 'address': address,}
    const timeObj = {'value':selectedOptionTime, 'name': optionsTime[selectedOptionTime].label, 'time': selectedOptionTime === '1' ? time : null,}

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
                                {sumOrder !== sumOrderSale ? <stricken className={styles.textSale}> {sumOrderSale} </stricken> : null}
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
                        <DeliveryButton options={optionsDelivery} selectedOption={selectedOptionDelivery} setSelectedOption={setSelectedOptionDelivery} address={address} setAddress={setAddress} />
                        <DeliveryTimeButton options={optionsTime} selectedOption={selectedOptionTime} setSelectedOption={setSelectedOptionTime} time={time} setTime={setTime} />
                        <ButtonOrder data={data} phone={phone} sumOrder={sumOrder} sumProduct={sumProduct} address={addressObj} time={timeObj}/>
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
