import styles from '@/styles/deliveryTimeButton.module.css';
import { TimePicker } from 'antd';
import dayjs, {Dayjs} from 'dayjs';


const DeliveryTimeButton = ({options, selectedOption, setSelectedOption, time, setTime}) => {
    const handleOptionChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
    };

    const format = 'HH:mm';

    const handleTimeChange = (eventTime:Dayjs) => {
        let hour = eventTime.hour()
        let minute = eventTime.minute()
        let timeStr = hour.toString().padStart(2, '0') + ':' + minute.toString().padStart(2, '0');
        setTime(timeStr)
    };

    let now = new Date();
    let hourNow = now.getHours();
    let hourMinute = now.getMinutes();
    const disabledTime = () => ({
        disabledHours: () => {
            return Array.from({ length: 24 }, (_, i) => i).filter((hour) => hour < 9 || hour < hourNow + 1 || hour > 20);
        },
        disabledMinutes: (selectedHour: number) => {
            let now = new Date();
            let hourNow = now.getHours();
            if (hourNow + 1 === selectedHour) {
                return Array.from({ length: 59 }, (_, i) => i).filter((hour) => hour < hourMinute + 1);
            }
            return Array.from({ length: 59 }, (i) => i)
        },
    });

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Выберите время получения</h2>
            <div className={styles.radioGroup}>

                {options.map((option) => (
                    <label className={styles.radioLabel} key={option.value}>
                        <input
                            className={styles.radioInput}
                            type="radio"
                            disabled={hourNow === 20 && option.value === '1'}
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
                    <TimePicker
                        disabledTime={disabledTime}
                        needConfirm={false}
                        hideDisabledOptions
                        showNow={false}
                        defaultValue={dayjs('12:00', format)}
                        format={format}
                        value={dayjs(time, format)}
                        onChange={(e) => handleTimeChange(e)}
                    />
                </label>
            </div>
        </div>
    );
};

export default DeliveryTimeButton;
