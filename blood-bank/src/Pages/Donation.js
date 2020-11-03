import React, { useState } from 'react'
import './css/Donation.css'
import { TextField, Button } from '@material-ui/core';

import { CircularProgress } from '@material-ui/core';






function Donation() {
    const [Amount, setAmount] = useState("");
    const [Name, setName] = useState("");
    const [Email, setEmail] = useState("rahulramesh125@gmail.com");
    const [Contact, setContact] = useState("7560914720")


    // loader
    const [circle, setcircle] = useState(false);

    const data = {
        Amount: Amount
    }
    function sucess() {
        document.getElementById("donationhead").style.display = "none";
        document.getElementById("DonationSuceesFull").style.display = "grid";


    }
    function componentDidMount() {
        window.scrollTo(0, 0);
    }



    function loadrazorpay(order) {
        const options = {
            key: "rzp_test_MfpGhSitsGUrz6", // Enter the Key ID generated from the Dashboard
            amount: "50000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
            currency: "INR",
            name: "Acme Corp",
            description: "Test Transaction",
            image: "https://example.com/your_logo",
            order_id: order, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
            handler: function (response) {
                const datas =
                {
                    payid: response.razorpay_payment_id,
                    orderid: response.razorpay_order_id,
                    signature: response.razorpay_signature


                }


                fetch('update with your back end hosted addres then followed by -> /Verification', {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(datas)

                })
                    .then(res => res.json())
                    .then(res => {
                        console.log(res)
                        componentDidMount();

                        setcircle(false);

                        if (res === "Signature Valid") {
                            sucess();
                        }
                    })


            },
            prefill: {
                name: Name,
                email: Email,
                contact: "91" + Contact
            },
            notes: {
                address: "Razorpay Corporate Office"
            },
            theme: {
                color: "#F37254"
            }
        };
        var paymentobject = new window.Razorpay(options);
        paymentobject.open()



    }
    // 











    return (
        <div>
            {circle ? <div className="loader">  <CircularProgress color="secondary" /> </div> :

                <div id="donationhead" className="container donationhead   ">
                    <div className="row ">
                        <div className="mt-5 donationh3 col " align="center">
                            <h3>Donate Us </h3>
                            <img src="https://www.flaticon.com/svg/static/icons/svg/3047/3047838.svg" alt="donation" />
                            <p> Your donation helps us to keep Share Blood free of charge and free of advertisements. Share Blood is a non-profit project and all donations will be used for development and server expenses. Thank you for your support!  </p>



                        </div>
                        <div className=" col  Donation_main" >

                            <form onSubmit={submitdonation} className="Donationform mb-5" autoComplete="off">

                                <TextField size="small" onChange={(e) => { setAmount(e.target.value) }} className="mt-3" color="secondary" variant="outlined" required label="Amount" type="number" />
                                <TextField onChange={(e) => { setName(e.target.value) }} required size="small" className="mt-3" color="secondary" variant="outlined" label="Name" type="string" />
                                <TextField onChange={(e) => { setEmail(e.target.value) }} required size="small" className="mt-3" color="secondary" label="Email Id" variant="outlined" />

                                <TextField onChange={(e) => { setContact(e.target.value) }} required size="small" className="mt-3" color="secondary" variant="outlined" type="number" label="Mobile Number" />
                                <Button onSu variant="outlined" type="submit" color="secondary" className="mt-3 px-5 mb-5"> Donate Now</Button>


                            </form>


                        </div>

                    </div>



                </div>


            }
            <div id="DonationSuceesFull" className="DonationSuceesFull" align="center">
                <img alt="d2" src="https://www.flaticon.com/svg/static/icons/svg/1145/1145992.svg" />
                <h3> For Your Donation</h3>


            </div>

        </div>
    )

    function submitdonation(e) {
        e.preventDefault();
        componentDidMount();

        setcircle(true);
        fetch("https://shareblood12.herokuapp.com/Donation", {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

            .then((res) => res.json())
            .then(res => {
                console.log(res.id);

                loadrazorpay(res.id)




            }
            )

    }


}

export default Donation
