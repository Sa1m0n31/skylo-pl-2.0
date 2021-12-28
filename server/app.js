const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
require('dotenv').config()
const nodemailer = require("nodemailer");
const smtpTransport = require('nodemailer-smtp-transport');

app.enable('trust proxy');

app.use (function (req, res, next) {
    if (req.secure) {
        next();
    } else {
        res.redirect('https://' + req.headers.host + req.url);
    }
});

/* Middleware */
app.use(cors());
app.use(bodyParser({
    limit: "50mb"
}));
app.use(bodyParser.json({
    limit: "50mb"
}));
app.use(bodyParser.raw({
    limit: "50mb"
}));
app.use(bodyParser.text({
    limit: "50mb"
}));
app.use(bodyParser.urlencoded({extended: true}));

/* Serve static frontend */
app.use(express.static(path.join(__dirname, '../client/build')));
app.get("/oferta", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get("/strony-internetowe", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get("/sklepy-internetowe", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get("/projekty-ux-i-ui", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get("/projektowanie-graficzne", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get("/aplikacje-webowe", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get("/obsluga-it", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get("/o-nas", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get("/kontakt", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get("/portfolio", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get("/blog", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get("/blog/*", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get("/portfolio/*", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get("/polityka-prywatnosci", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get("/strony-internetowe-golub-dobrzyn", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get("/strony-internetowe-brodnica", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get("/sklepy-internetowe-rypin", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});
app.get("/sklepy-internetowe-lipno", (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

/* Nodemailer */
let transporter = nodemailer.createTransport(smtpTransport ({
    auth: {
        user: process.env.MAIL,
        pass: process.env.PASSWORD
    },
    host: process.env.HOST,
    secureConnection: true,
    port: 465,
    tls: {
        rejectUnauthorized: false
    },
}));

/* Send form endpoints */
app.post("/send-form", (request, response) => {
    const { name, email, phoneNumber, msg, category } = request.body;

    let mailOptions = {
        from: process.env.MAIL,
        to: 'kontakt@skylo.pl',
        subject: 'Nowe zgłoszenie w formularzu kontaktowym',
        html: `<h1>Nowe zgłoszenie w formularzu kontaktowym</h1>
               <p><b>Kategoria:</b> ${category ? category : "Brak"}</p> 
               <p><b>Nazwa:</b> ${name}</p> 
               <p><b>Numer telefonu:</b> ${phoneNumber ? phoneNumber : "Brak"}</p> 
               <p><b>Adres email:</b> ${email ? email : "Brak"}</p> 
               <p><b>Wiadomość:</b> ${msg ? msg : "Brak"}</p>`
    }

    transporter.sendMail(mailOptions, function(error, info) {
        response.send({
            result: 1
        });
    });
});

app.post("/send-email", (request, response) => {
    const { email } = request.body;

    let mailOptions = {
        from: process.env.MAIL,
        to: 'kontakt@skylo.pl',
        subject: 'Ktoś prosi o kontakt',
        html: `<h1>Nowe zgłoszenie w formularzu kontaktowym</h1>
               <p><b>Email:</b> ${email}`
    }

    transporter.sendMail(mailOptions, function(error, info){
        response.send({
            result: 1
        });
    });
});

app.listen(5000, () => {
    console.log("Listening on port 5000");
});
