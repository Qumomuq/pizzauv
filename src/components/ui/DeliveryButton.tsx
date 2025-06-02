import styles from '@/styles/deliveryButton.module.css'; // Импортируем CSS-модуль

const DeliveryButton = ({options, selectedOption, setSelectedOption, address, setAddress}) => {
    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
    };

    // const handleAddressChange = (event) => {
    //     const value = event.target.value;
    //     setAddress(value);
    // };

    // const [address, setAddress] = useState('');

    // Регулярное выражение для валидации адреса (можно изменить по необходимости)
    const addressRegex = /^[a-zA-Zа-яА-ЯЁё0-9\s,.-]+$/;

    const handleAddressChange = (e) => {
        const value = e.target.value;

        if (addressRegex.test(value) || value === '') {
            setAddress(value); // Только если адрес валиден или пуст
        }
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Выберите способ получения</h2>
            <div className={styles.radioGroup}>

                {options.map((option) => (
                    <label className={styles.radioLabel} key={option.value}>
                        <input
                            className={styles.radioInput}
                            type="radio"
                            id={option.value}
                            name={option.label}
                            value={option.value}
                            checked={selectedOption === option.value}
                            onChange={handleOptionChange}
                        />
                        {option.label}
                    </label>
                ))}
            </div>
            <div className={`${styles.addressInputContainer} ${selectedOption === '1' ? styles.show : styles.hide}`}>
                <label className={styles.addressLabel}>
                    <p>Адрес доставки</p>
                    <input
                        type="text"
                        value={address}
                        onChange={(e) => handleAddressChange(e)}
                        className={styles.input}
                        maxLength={100}
                        placeholder="Введите адрес"
                        required
                    />
                </label>
            </div>
        </div>
    );
};

export default DeliveryButton;
