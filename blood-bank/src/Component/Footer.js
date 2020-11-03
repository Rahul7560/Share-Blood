import React from 'react'
import './css/Footer.css'

function Footer() {
    return (
        <div>
            <div>
                <div className="navbarFooter mt-5 "  >
                    {/* Heading And ICon */}
                    <div className=" HeadiconFooter  w-100" align="center" >
                        <div className="  Headicon2Footer py-4" align="center">
                            <div className="row  imgFooter">
                                <img alt=" bloodbank" src={process.env.PUBLIC_URL + '/Image/logo.png'}></img>
                                <h3 className="mt-3"> Share <span > Blood </span>  </h3>
                            </div>
                            <h5> Copyright @ 2020</h5>
                            <h4>  Designed And Developed with Rahul  </h4>
                            {/* <a href="http://rahulr.cf"> Rahul R</a> */}
                            {/* if you this code please follow me on github or on facebook -- https://www.facebook.com/rahulramesh7560  */}





                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Footer
