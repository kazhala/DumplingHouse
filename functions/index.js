const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const htmlToText = require('nodemailer-html-to-text').htmlToText;
const { email, password } = require('./config');

const mailTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password
    }
});

mailTransport.use('compile', htmlToText());

const APP_NAME = 'TurramurraDumplingHouse';

function sendOrderEmail(order) {
    const mailOptions = {
        from: `${APP_NAME} <noreply@TurramurraDumplingHouse.com`,
        to: order.email,
        subject: `Your order from ${APP_NAME}.`,
        html: `
            <table style="width:500px; margin: auto">
                <tr>
                    <th>${order.displayName}</th>
                    <th>Your ordered some food, here's confirmation of that order. </th>
                    <th>${order.displayName}</th>
                </tr>
                ${order.order
                    .map(
                        ({ name, quantity, price }) => `
                    <tr>
                        <td>
                            ${quantity} 
                        </td>
                        <td>
                            ${name} 
                        </td>
                        <td>
                            ${price} 
                        </td>
                    </tr>
                `
                    )
                    .join('')}
            </table>
        `
    };
    mailTransport.sendMail(mailOptions);
}

exports.sendUserEmail = functions.database
    .ref('/orders/{uid}/{pushId}')
    .onCreate(order => {
        sendOrderEmail(order.val());
    });
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
