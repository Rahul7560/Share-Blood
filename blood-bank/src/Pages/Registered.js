import React from 'react'
import { Button } from '@material-ui/core'
import './css/Registered.css'

function Registered() {
    function componentDidMount() {
        window.scrollTo(0, 0);
    }
    componentDidMount()

    return (

        <div>
            <div className=" container registered_main">
                <div className=" mt-5 reg_sub" align="center">
                    <h3 className=" h33">Successfuly Registered !</h3>
                    <p>Thank you for registering with us </p>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/2210/2210215.svg" alt="reg"
                    />
                    <p className="mt-3"> Please Check <strong>mail inbox</strong> to verfiy you receives our mail</p>
                    <div className="">
                        <h3 className="mt-4"> Share it with your freinds too</h3>
                        <h5>Let them become a Super Hero</h5>
                        <Button href="whatsapp://send?text=   www.shareblood.online Register Here, A precious life is indeed your mercy.A few seconds of pain can heal many.Give your blood and save a life."
                            variant="outlined" className=" mt-3 reg_sub_button" > <strong> Share Now</strong> </Button>


                    </div>







                </div>

            </div>

        </div>
    )
}

export default Registered
