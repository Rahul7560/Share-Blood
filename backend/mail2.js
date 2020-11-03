"use strict";
const nodemailer = require("nodemailer");
const Email = require("email-templates");


module.exports = exports = function mailer2(temp, tos, first, cont1, cont2, cont3, hosp, grp) {

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
            fname: first,
            contact1: cont1,
            contact2: cont2,
            contact3: cont3,
            hospital: hosp,
            blood: grp



        }
    }).then(() => console.log('email has been sent!', first));


}

