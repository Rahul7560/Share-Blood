import React from 'react'
import OpacityIcon from '@material-ui/icons/Opacity';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import NotificationsActiveIcon from '@material-ui/icons/NotificationsActive';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import AccessibilityNewIcon from '@material-ui/icons/AccessibilityNew';
import './css/About.css'

function About() {
    return (
        <div>
            <div className="  about_start">
                <div align="center">
                    <h3> About</h3>
                    <p>What we do at <strong>Share</strong>  Blood</p>
                </div>

            </div>

            <div className="  mt-5 abouthead container">
                <h3>What is this all about </h3>
                <p>We are trying to solve the problem of blood emergencies by connecting the donors directly </p>

                <div className=" rowabout row  m-auto row-cols-sm-4">
                    <div className="col">
                        <div align="center">
                            <OpacityIcon className="abouticon" />
                        </div>
                        <h3>What we do ?</h3>
                        <p>We are connecting blood donors with recipients, spontaneously for an efficient and seamless process.</p>

                    </div>
                    <div className="col">
                        <div align="center">
                            <FavoriteIcon className="abouticon" />
                        </div>
                        <h3>Innovative</h3>
                        <p><strong>Share</strong> Blood   is an innovative approach to address global health. We provide immediate access to blood donors</p>

                    </div>
                    <div className="col">
                        <div align="center">
                            <LocalHospitalIcon className="abouticon" />
                        </div>
                        <h3>
                            Network
                        </h3>
                        <p> <strong> Share</strong> Blood is one of several community organizations working together as a network that responds to emergencies in an efficient manner</p>

                    </div>
                    <div className="col">
                        <div align="center">
                            <NotificationsActiveIcon className="abouticon" />
                        </div>
                        <h3>Get notified</h3>
                        <p><strong>Share</strong> Blood  works with network partners to connect blood donors and recipients through an automated SMS and Email</p>

                    </div>
                    <div className="col">
                        <div align="center">
                            <EmojiEmotionsIcon className="abouticon" />
                        </div>
                        <h3>Totally Free</h3>
                        <p> <strong> Share</strong>  Blood  ultimate goal is to provide an easy-to-use, easy-to-access, fast, efficient, and reliable way to get life-saving blood, totally Free of cost</p>

                    </div>
                    <div className="col">
                        <div align="center">
                            <AccessibilityNewIcon className="abouticon" />
                        </div>
                        <h3>Save Life</h3>
                        <p>We are a non profit foundation and our main objective is to make sure that everything is done to protect vulnerable persons. Help us by making a gift !</p>

                    </div>



                </div>
            </div>

        </div>
    )
}

export default About
