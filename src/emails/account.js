// const sgMail = require('@sendgrid/mail')

// sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const sendWelcomeEmail = (email, name) => {
//     sgMail.send({
//         to: email,
//         from: 'andrew@mead.io',
//         subject: 'Thanks for joining in!',
//         text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
//     })
// }

// const sendCancelationEmail = (email, name) => {
//     sgMail.send({
//         to: email,
//         from: 'andrew@mead.io',
//         subject: 'Sorry to see you go!',
//         text: `Goodbye, ${name}. I hope to see you back sometime soon.`
//     })
// }

const nodemailer = require('nodemailer');
  
  
let mailTransporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'raghav6487@gmail.com',
        pass: 'raghav6487'
    }
});
  
// let mailDetails = {
//     from: 'raghav6487@gmail.com',
//     to: email,
//     subject: 'Thanks for joining in!',
//     text: `Welcome to the app. Let me know how you get along with the app.`
// };

const sendWelcomeEmail = (email, name) => {
mailTransporter.sendMail({
             to: email,
             from: 'raghav6487@gmail.com',
             subject: 'Thanks for joining in!',
             text: `Welcome to the app, ${name}. Let me know how you get along with the app.`
         })
}

const sendCancelationEmail = (email, name) => {
    mailTransporter.sendMail({
        to: email,
        from: 'raghav6487@gmail.com',
        subject: 'Sorry to see you go!',
        text: `Goodbye, ${name}. I hope to see you back sometime soon.`
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

// SENDGRID_API_KEY=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