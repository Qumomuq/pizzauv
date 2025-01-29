// export const sendMail = async (data) => {
//     console.log('sendMail')
//     fetch("./backend", {
//         method: "POST",
//         body: JSON.stringify(data),
//         headers: { "Content-Type": "application/json", Accept: "application/json" },
//     }).then((res) => {
//         // if (!res.ok) throw new Error("Failed to send message");
//         return res.json();
//     });
// }
export const sendOrderDetails = async (orderDetails) => {
    let message = orderDetails
    try {
        const response = await fetch('https://script.google.com/macros/s/AKfycby41gUHBnThpEIKWmdLlLheaYeyruAdqahGtPLdVYCyaf_zI4vBOtfF73laxmokBMKgmg/exec', {
            method: 'POST',
            headers: {
                "Content-Type": "text/plain;charset=utf-8",
            },
            body: JSON.stringify({
                to_email: 'pizzauznyevorota@gmail.com', // Email владельца сайта
                subject: 'Новый заказ на сайте', // Тема письма
                message: `${message}`, // Тело письма
            }),
        });
        const result = await response.text();
        console.log(result); // Ответ от Google Apps Script
        return result
    } catch (error) {
        console.error('Ошибка при отправке данных:', error);
        return error
    }
};
