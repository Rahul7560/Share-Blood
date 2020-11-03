"use strict";
const nodemailer = require("nodemailer");
const Email = require('email-templates');

module.exports = exports = function mailer(temp, tos, first) {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: `${process.env.EMAILID}`,
            pass: `${process.env.EMAILIDPASSWORD}`
        }
    });

    const email = new Email({
        transport: transporter,
        send: true,
        preview: false,
    });

    email.send({
        template: temp,
        message: {
            from: `${process.env.EMAILID}`,
            to: tos,
        },
        locals: {
            fname: first
        }
    }).then(() => console.log('email has been sent!', first));

}


