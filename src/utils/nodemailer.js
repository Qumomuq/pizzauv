import nodemailer from "nodemailer";

// const email = 'illusory.racer.01@mail.ru';
const email = 'illusory.racer01@gmail.com';
const pass = 'mvlp dyyh oiur hudj';
// const pass = 'wZ1q2KC7H5Um4jsTu8Gf';
// const pass = '29asd08z2001';

export const transporter = nodemailer.createTransport({
    service: "gmail",
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // use SSL
    auth: {
        user: email,
        pass: pass,
    },
    // tls: {rejectUnauthorized: false,}
});
export const mailOptions ={
    from: email,
    to: email,
    // subject: 'Заявка на сайте',
    // text: 'text'
}
// export const mailOptions = {
//   from:'"illusory.racer.01" <mail.mailru>' ,
//   to: '"illusory.racer.01"  <mail.mailru>',
// };