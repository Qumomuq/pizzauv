import nodemailer from "nodemailer";
import { email, pass } from '/env'

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
