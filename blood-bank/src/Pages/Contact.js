import React from 'react'
import { withRouter } from "react-router-dom";

import './css/Contact.css'

function Contact() {
    return (
        <div className="contactMain">
            <div className="bg">
                <div className="main" align="center">
                    <div className="head">
                        <h2 className="mt-4">Contact us</h2>
                    </div>
                    <div className="mt-4 form-group form">
                        <input type="text" className="mt-3 form-control b1" name="" aria-describedby="helpId" placeholder="Name" />
                        <input type="Text" className="mt-3 form-control b1" name="" placeholder="Email" />
                        <textarea row="2" type="text" className="mt-3 form-control b1" name="" id="" placeholder="Message"></textarea>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default withRouter(Contact);
