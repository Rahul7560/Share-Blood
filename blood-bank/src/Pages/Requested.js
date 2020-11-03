import React from 'react'
import { Button } from '@material-ui/core'
import './css/Requested.css'



function Registered() {
    function componentDidMount() {
        window.scrollTo(0, 0);
        document.getElementById("Razor").innerHTML = "Rahul";


    }
    componentDidMount()






    return (

        <div>
            <div className=" container registered_main">
                <div className=" mt-5 reg_sub" align="center">
                    <h3 className=" h33"> Request Send Successfuly </h3>
                    <p> You will be contacted from donors in your area </p>

                    <img alt="r1" src="https://www.flaticon.com/svg/static/icons/svg/3437/3437315.svg" />


                    <p className="mt-3" > In case of high emergency  contact us through<strong>shareblood.online@gmail.com</strong>  we will do all possible actions. </p>
                    <div className="">
                        <h3 className="mt-4 " > Share it with your freinds too</h3>

                        <h5>Let them become a Super Hero</h5>
                        <Button href="whatsapp://send?text=   www.shareblood.online Register Here, A precious life is indeed your mercy.A few seconds of pain can heal many.Give your blood and save a life."
                            variant="outlined" className=" mt-3 reg_sub_button" > <strong> Share Now</strong> </Button>


                    </div>







                </div>

            </div>

        </div >
    )
}

export default Registered
