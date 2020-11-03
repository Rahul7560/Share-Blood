import React from 'react'
import './css/Nav.css'


function Nav() {
    return (
        <div className="navbar"  >
            {/* Heading And ICon */}
            <div className=" Headicon w-100" align="center" >
                <div className="  Headicon2">

                    <img alt=" bloodbank" src={process.env.PUBLIC_URL + '/Image/logo.png'}></img>
                    <h3 className="mt-1"> Share <span > Blood </span>  </h3>
                </div>

            </div>





        </div>
    )
}

export default Nav
