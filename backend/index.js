const express = require("express");
var env = require('dotenv')

var bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose');
const mailer = require('./mail');
const mailer2 = require('./mail2');
const crypto = require("crypto");

const Razorpay = require('razorpay');

env.config()



// Razorpay details
var instance = new Razorpay({
    key_id: `${process.env.RAZORPAYKEYID}`,
    key_secret: `${process.env.RAZORPAYKEYSECERT}`,
});





// app defining

const app = express();
mongoose.connect(`mongodb+srv://${process.env.DATABSEUSERNAME}:${process.env.DATABASEPASSWORD}@cluster0.vugqz.gcp.mongodb.net/shareblood?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

// parse application/x-www-form-urlencoded
app.use(express.json())

// parse application/json
app.use(bodyParser.json())

app.use(cors())
// Mb databse

const regSchema = mongoose.Schema({
    Name: String,
    Contact: Number,
    Mail: String,
    Weight: Number,
    Blood_Groop: String,
    State: String,
    District: String,
    Pincode: Number

})
const requestSchema = mongoose.Schema({
    Name: String,
    Contact: Number,
    Contact1: Number,
    Contact2: Number,
    Mail: String,
    Blood_Groop: String,
    Hospital: String,
    State: String,
    District: String,
    Pincode: Number

})

const Registration = mongoose.model("Registration", regSchema);
const Request = mongoose.model("Request", requestSchema);




//  url binding



app.get('/', (req, res) => {
    res.send(" Its working");

})

app.post('/Donation', (req, res) => {
    var options = {
        amount: req.body.Amount * 100,  // amount in the smallest currency unit
        currency: "INR",
        receipt: Math.random()
    };
    instance.orders.create(options, function (err, order) {
        console.log(order);
        res.json(order)
    });
})
app.post('/Verification', (req, res) => {



    const hmac = crypto.createHmac('SHA256', `${process.env.RAZORPAYKEYSECERT}`);

    hmac.update(req.body.orderid + "|" + req.body.payid);
    let generatedSignature = hmac.digest('hex');
    console.log(req.body.payid, req.body.orderid, req.body.signature)

    if (generatedSignature == req.body.signature) {
        res.json("Signature Valid")

    }
    else {
        res.json("Signature is Not valid")

    }

})


app.post('/Registration', (req, res) => {
    const Newuser = new Registration(req.body);
    Newuser.save(function (err) {
        if (err) return (err);
        // saved!
        else {
            mailer('hello', req.body.Mail, req.body.Name);

            res.json("Received");

        }
    });






})

app.get('/pre', (req, res) => {
    res.render('.')
})

app.post('/Request', (req, res) => {
    const blood_group = req.body.Blood_Groop;

    console.log(req.body)
    const requ = new Request(req.body)
    requ.save((err) => {
        if (err) console.log(err);
        else {
            Registration.find({
                Blood_Groop: blood_group,
                State: req.body.State,
                District: req.body.District
            }, function (err, docs) {
                if (err) console.log(err);
                else {
                    res.json("Received")
                    docs.map((states, key) => {

                        mailer2('request', states.Mail, req.body.Name, req.body.Contact, req.body.Contact1, req.body.Contact2, req.body.Hospital, blood_group);



                    })
                }
            }
            )
        }

    }
    )





})


// port listeing

app.listen(process.env.PORT, function () {
    console.log(`port running at ${process.env.PORT} `)
})
