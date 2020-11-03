import React, { useState } from 'react'
import './css/working.css'
import { useHistory } from "react-router-dom";



import ReceiptIcon from '@material-ui/icons/Receipt';
import PageviewIcon from '@material-ui/icons/Pageview';
import { TextField, Button } from '@material-ui/core';
import { Select } from '@material-ui/core';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import myObj from '../Component/jsonfiles/state-districts';
import { CircularProgress } from '@material-ui/core';




function Working() {
    function componentDidMount() {
        window.scrollTo(0, 0);
    }

    const [load, setload] = useState(false);

    const History = useHistory();

    const [name, setname] = useState("");
    const [Contact, setContact] = useState("");
    const [Mailid, setMailid] = useState("");
    const [Weight, setWeight] = useState("");
    const [Blood_Group, setBlood_Group] = useState("");
    const [statename, setstatename] = useState("")
    const [selectedstate, setselectedstate] = useState(2);
    const Id = selectedstate - 1;

    const [District, setDistrict] = useState("");
    const [Pincode, setPincode] = useState("");




    const [Reqname, setReqname] = useState("");
    const [Reqnumber1, setReqnumber1] = useState("");
    const [Reqnumber2, setReqnumber2] = useState("");
    const [Reqnumber3, setReqnumber3] = useState("")
    const [Reqmail, setReqmail] = useState("");
    const [Reqhospital, setReqhospital] = useState("");
    const [Reqbloodgrp, setReqbloodgrp] = useState("");
    const [Reqstate, setReqstate] = useState("");
    const [Reqdist, setReqdist] = useState("");
    const [Reqpincode, setReqpincode] = useState("");








    function selectedstates(e) {
        setselectedstate(e.target.value);



    }

    const data = {
        Name: name,
        Contact: Contact,
        Mail: Mailid,
        Weight: Weight,
        Blood_Groop: Blood_Group,
        State: statename,
        District: District,
        Pincode: Pincode

    }
    const data2 = {
        Name: Reqname,
        Contact: Reqnumber1,
        Contact1: Reqnumber2,
        Contact2: Reqnumber3,

        Mail: Reqmail,
        Blood_Groop: Reqbloodgrp,
        Hospital: Reqhospital,
        State: Reqstate,
        District: Reqdist,
        Pincode: Reqpincode

    }





    //  fetch('./state-districts.json')
    // .then((response) =>  response.json())
    // .then((data) => setdistrict(data));












    function search() {
        document.getElementById("secondform").style.display = "grid";
        document.getElementById("secondform").style.animation = "fadeIn 1s";

        document.getElementById("firstform").style.display = "none";

    }
    function register() {
        document.getElementById("firstform").style.display = "grid";
        document.getElementById("firstform").style.animation = "fadeIn 1s";

        document.getElementById("secondform").style.display = "none";


    }


    return (

        <div>
            { load ? <div className="loader">  <CircularProgress color="secondary" /> </div> :
        <div >

{/* button  registration    */}
<div className=" container working_Main">
<div className=" buttonmain">
    <div className=" row m-auto  " >
        <button onClick={register} className=" col py-2 buttonmain1" >
            <ReceiptIcon /> Registration</button>




        <button onClick={search} className="col py-2  buttonmain2" > <PageviewIcon /> Find Donor</button>




    </div>
</div>
<div id="firstform" className="registrationForm ">
    <div className=" container-fluid registerhead " >
        <h3 className="mt-3">
                                    Register Now !
        </h3>
        <h4> Let your 30sec  save's a valuable life .</h4>

        <p>  You'll receive a message and email if someone in your proximity is in need of blood.</p>
    </div>
    <form className="registrationforminput" onSubmit={Submitted}   autoComplete="off">
        <div className="row m-auto ">
            <TextField  required onChange={(e)=> { setname(e.target.value) }} size="small" className="  mt-3  textfeilds col-sm  " id="outlined-basic" color="secondary" label="Name" variant="outlined" />
            <TextField required size="small" onChange={(e)=> { setContact(e.target.value) }}  type="Number" className=" mt-3 textfeilds col-sm" id="outlined-basic" color="secondary" label="Contact Number" variant="outlined" />



        </div>
        <div className="row m-auto ">
            <TextField required size="small" Validate="Email" onChange={(e)=> { setMailid(e.target.value) }} className="  mt-3  textfeilds col-sm  " id="outlined-basic" color="secondary" label="Mail Id" variant="outlined" />
            <TextField required type="number" size="small" onChange={(e)=> { setWeight(e.target.value) }} className=" mt-3 textfeilds col-sm" id="outlined-basic" color="secondary" label="Weight in Kg" variant="outlined" />



        </div>
        <div className="row m-auto ">
            <FormControl variant="outlined" size="small" color="secondary"
                className="  mt-3   textfeilds col-sm  ">
                <InputLabel htmlFor="outlined-age-native-simple">Blood Group</InputLabel>
                <Select
                    onChange={(e)=> { setBlood_Group(e.target.value) }} 
                    native
                    size="small"


                    label="Blood Group"
                    required

                >
                    <option aria-label="None" value="" />
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>

                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>



                    <option value="AB+">AB+</option>

                    <option value="AB-">AB-</option>

                    <option value="A1+">A1+</option>
                    <option value="A1-">A1-</option>
                    <option value="A1B+">A1B+</option>

                    <option value="A1B-">A1B-</option>
                    <option value="A2+">A2+</option>

                    <option value="A2-">A2-</option>

                    <option value="A2B+">A2B+</option>
                    <option value="A2B-">A2B-</option>
                    <option value="BOMBAY BLOOD GROUP">BOMBAY BLOOD GROUP</option>





                </Select>

            </FormControl>
            <FormControl variant="outlined" size="small" color="secondary"
                className="  mt-3   textfeilds col-sm  ">
                <InputLabel htmlFor="outlined-age-native-simple">State</InputLabel>
                <Select onChange={selectedstates}
                    native
                    size="small"


                    label="State"
                    required

                >
                    <option aria-label="None" value="" />
                   { myObj.states.map((states ,key )=>( 
                        <option  value={states.id}> {states.name}</option>

                         

                    ))}
                    
                  
                </Select>

            </FormControl>


        </div>
        <div className="row m-auto ">
            <FormControl variant="outlined" size="small" color="secondary"
                className="  mt-3   textfeilds col-sm  ">
                <InputLabel htmlFor="outlined-age-native-simple">District</InputLabel>
                <Select
                onChange={(e)=> { setDistrict(e.target.value) 
                    setstatename(myObj.states[Id].name)
}} 
                    native
                    size="small"


                    label="District"
                    required

                >  
                <option aria-label="None" value="" />
                
                    { myObj.states[Id].districts.map((states  )=>(
                        
                              <option value={states.name}>{states.name}</option>


                            
                        

                         

                    ))}
                





            
                </Select>

            </FormControl>                        <TextField size="small" required type="number" onChange={(e)=> { setPincode(e.target.value) }}  className=" mt-3 textfeilds col-sm" id="outlined-basic" color="secondary" label=" Pincode" variant="outlined" />



        </div>
        <div className=" mt-5 mb-5  buttonsubmit" align="center">
            <button  type="submit"  className="btn px-5 btn-primary ">
                                    Register
                                     
            </button>
        </div>




    </form>
</div>

<div id="secondform" className="registrationForm">
<div className=" container-fluid registerhead2 " >
        <h3 className="mt-3">
                                Find Donors Now !
        </h3>
        <h4> Once you send request your details will be shared with volunteers from your nearby location.</h4>

        <p> Note : Please select state , district and pincode of your current location / hospital location </p>
    </div>
    <form className="registrationforminput" onSubmit={Submitted2} Validate autoComplete="off">
        <div className="row m-auto ">
            <TextField size="small" onChange={(e)=> { setReqname(e.target.value) }} className="  mt-3  textfeilds col-sm  " id="outlined-basic" color="secondary" required label="Name" variant="outlined" />
            <TextField size="small" onChange={(e)=> { setReqnumber1(e.target.value) }} className=" mt-3 textfeilds col-sm" id="outlined-basic" color="secondary" type="number" required label="Contact Number" variant="outlined" />



        </div>
        <div className="row m-auto ">
            <TextField size="small" onChange={(e)=> { setReqnumber2(e.target.value) }} className="  mt-3  textfeilds col-sm  " id="outlined-basic" type="number"  color="secondary" label="Contact Number 2" variant="outlined" />
            <TextField size="small"onChange={(e)=> { setReqnumber3(e.target.value) }} className=" mt-3 textfeilds col-sm" id="outlined-basic" type="number"  color="secondary" label="Contact Number 3" variant="outlined" />



        </div>
        <div className="row m-auto ">
            <TextField size="small" onChange={(e)=> { setReqmail(e.target.value) }} className="  mt-3  textfeilds col-sm  " id="outlined-basic" color="secondary" required label="Mail Id" variant="outlined" />
            <TextField size="small" onChange={(e)=> { setReqhospital(e.target.value) }} className=" mt-3 textfeilds col-sm" id="outlined-basic" color="secondary"   label="Hospital Name" variant="outlined" />



        </div>
        <div className="row m-auto ">
            <FormControl variant="outlined" size="small" color="secondary"
                className="  mt-3   textfeilds col-sm  ">
                <InputLabel htmlFor="outlined-age-native-simple">Blood Group Wanted</InputLabel>
                <Select
                onChange={(e)=> { setReqbloodgrp(e.target.value) }}
                    native
                    size="small"
                    required


                    label="Blood Group wanted"

                >
                    <option aria-label="None" value="" />
                    <option aria-label="None" value="" />
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>

                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>



                    <option value="AB+">AB+</option>

                    <option value="AB-">AB-</option>

                    <option value="A1+">A1+</option>
                    <option value="A1-">A1-</option>
                    <option value="A1B+">A1B+</option>

                    <option value="A1B-">A1B-</option>
                    <option value="A2+">A2+</option>

                    <option value="A2-">A2-</option>

                    <option value="A2B+">A2B+</option>
                    <option value="A2B-">A2B-</option>
                    <option value="BOMBAY BLOOD GROUP">BOMBAY BLOOD GROUP</option>


                </Select>

            </FormControl>
            <FormControl variant="outlined" size="small" color="secondary"
                className="  mt-3   textfeilds col-sm  ">
                <InputLabel htmlFor="outlined-age-native-simple">State</InputLabel>
                <Select onChange={selectedstates}
                    native
                    size="small"
                    


                    label="State"
                    required

                >
                    <option aria-label="None" value="" />
                   { myObj.states.map((states ,key )=>(
                        <option value={states.id}>{key=states.name.id } {states.name}</option>


                         

                    ))}
                    
                  
                </Select>

            </FormControl>


        </div>
        <div className="row m-auto ">
            <FormControl variant="outlined" size="small" color="secondary"
                className="  mt-3   textfeilds col-sm  ">
                <InputLabel htmlFor="outlined-age-native-simple">District</InputLabel>
                <Select
                    native
                    size="small"
                    onChange={(e)=> { setReqdist(e.target.value) 
                    setReqstate(myObj.states[Id].name)
                    
}} 


                    label="District"
                    required

                >  
                <option aria-label="None" value="" />
                
                    { myObj.states[Id].districts.map((states,key  )=>(
                        
                              <option value=  {states.name}>  {key=states.name.id } {states.name}</option>


                            
                        

                         

                    ))}
                





            
                </Select>

            </FormControl> <TextField size="small" type="number"  onChange={(e)=> { setReqpincode(e.target.value) }} required className=" mt-3 textfeilds col-sm" id="outlined-basic" color="secondary" label=" Pincode" variant="outlined" />



        </div>
        <div className=" mt-5 mb-5  buttonsubmit" align="center">
            <button type="submit" className="btn px-5 btn-primary ">
                                    Request
                                     
            </button>
        </div>




    </form>



</div>

<div className=" mt-3 about_start">
    <div align="center">
        <h3> Share With Freinds</h3>
        <Button  href="whatsapp://send?text=   www.shareblood.online Register Here, A precious life is indeed your mercy.A few seconds of pain can heal many.Give your blood and save a life."
            variant="outlined" className="shareButton" > <strong> Share Now</strong> </Button>
        
    </div>

</div>
<div className=" mt-3 donatestart  ">
    <div align="center">
        <h3> Donate Us</h3>
        <Button  onClick={(e)=>{     componentDidMount()
         History.push('/Donation')}}
            variant="outlined" className="shareButton" > <strong> Donate Now</strong> </Button>
        
    </div>

</div>
 


</div>

<div className="working_explain container mt-5 " align="center">
        <h2>  <strong>Share</strong> <span>Blood</span> </h2>
        <h3 className="mt-3">Find blood donors near your location and make a blood request in less than 5 minutes.</h3>
        <div className="row  mt-5  row-cols-sm-6 " align="center" > 
            <div className="col working_explain_col" align="center">
                    <img alt="w1" src="https://www.flaticon.com/svg/static/icons/svg/883/883986.svg"/> 
                    <h5> Find Blood</h5>
                    <p>Find blood donors near your location and request the needed blood type</p>
            
            
            

            

            </div>

            <div className="col working_explain_col" align="center">
                    <img alt="w2" src="https://www.flaticon.com/svg/static/icons/svg/3094/3094807.svg"/> 
                    <h5> Get Notified</h5>
                    <p>Get notified about requests instantly, either on our app or by sms</p>                        
            
            

            

            </div>

            <div className="col working_explain_col" align="center">
                    <img  alt="wl" src="https://www.flaticon.com/svg/static/icons/svg/1310/1310621.svg" /> 
                    <h5> Forever Free</h5>
                    <p>You don't have to pay anything, Share Blood Connect is forever Free !</p>
            
            
            

            

            </div>
        
        </div>

</div>



</div>




}




</div>

        




    
    )



function Submitted(e) {
    e.preventDefault();
    componentDidMount()

    setload(true);



    // console.log("redirected")



    fetch('update with your back end hosted addres then followed by -> /Registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })

        .then(res => res.json())
        .then(res => {
            if (res === "Received") {
                setload(false)

                History.push('/Registered');



            }
            else {

                History.push('/About');


            }

        })



}
function Submitted2(e) {
    e.preventDefault();
    componentDidMount()

    setload(true);



    // console.log("redirected")



    fetch('update with your back end hosted addres then followed by -> /Request', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data2)
    })

        .then(res => res.json())
        .then(res => {
            if (res === "Received") {
                setload(false);


                History.push('/Requested');



            }
            else {
                History.push('/Registered');


            }

        })



}

    
   

}


export default Working
