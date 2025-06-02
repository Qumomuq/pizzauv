import styles from '@/styles/deliveryTimeButton.module.css';
import {useRef, useState} from "react"; // Импортируем CSS-модуль


const DeliveryTimeButton = ({options, selectedOption, setSelectedOption, time, setTime}) => {
    // const refHour = useRef(null);
    // let select = document.getElementById("selectHour");
    // var min = 12,
    //     max = 100,
    //     select = document.querySelector("#selectHour");
    //
    // for (var i = min; i<=max; i++){
    //     var opt = document.createElement('option');
    //     opt.value = i;
    //     opt.innerHTML = i;
    //     select.appendChild(opt);
    // }

    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        setTime('14:00')
    };

    // const [minute, setMinute] = useState(0);
    // const [hour, setHour] = useState(0);

    const handleHoursChange = (e) => {
        console.log(e.target.value)
        let hour = e.target.value;
        // setHour(hour)

        // hour = hour.padStart(2, '0')
        const value = hour + time.slice(2)

        setTime(value); // Только если адрес валиден или пуст
        console.log(time)

    };
    const handleMinuteChange = (e) => {
        let minute = e.target.value
        // setMinute(minute)

        // minute = minute.padStart(2, '0')
        const value = time.slice(0, -2) + minute

        setTime(value); // Только если адрес валиден или пуст\
        console.log(time)
    };

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Выберите время получения</h2>
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
                    <p>Время получения</p>
                    <div className={styles.containerInput}>
                        <select id={'selectHour'} onChange={handleHoursChange} className={styles.input} required>
                            <option>12</option>
                            <option>13</option>
                            <option>14</option>
                        </select>
                        <select onChange={handleMinuteChange} className={styles.input} required>
                            <option>01</option>
                            <option>20</option>
                            <option>40</option>
                        </select>
                        {/*<input*/}
                        {/*    type="number"*/}
                        {/*    value={hour}*/}
                        {/*    onChange={(e) => handleHoursChange(e)}*/}
                        {/*    className={styles.input}*/}
                        {/*    min="12"*/}
                        {/*    max="21"*/}
                        {/*    maxLength={2}*/}
                        {/*    // placeholder="Введите адрес"*/}
                        {/*    required*/}
                        {/*/>*/}
                        {/*<input*/}
                        {/*    type="number"*/}
                        {/*    value={minute}*/}
                        {/*    onChange={(e) => handleMinuteChange(e)}*/}
                        {/*    className={styles.input}*/}
                        {/*    min="0"*/}
                        {/*    max="59"*/}
                        {/*    maxLength={2}*/}
                        {/*    // placeholder="Введите адрес"*/}
                        {/*    required*/}
                        {/*/>*/}
                    </div>
                </label>
            </div>
        </div>
    );
};

export default DeliveryTimeButton;
