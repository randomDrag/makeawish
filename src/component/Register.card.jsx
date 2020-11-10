import React, { useState, useRef, useEffect } from 'react';
import { TimelineLite, Power4 } from 'gsap';

import { FillButton, FillInput, FillLabel, FillButtonLink, FillAlert, FillSelect, FillOption } from './Extra';
import Loading from './Loading';
import '../css/register.css';
import { api } from '../utils/api';
import Axios from 'axios';



function RegisterCard(props) {

    let tl = new TimelineLite();
    let card = useRef('null');
    let cardName = useRef('null');


    useEffect(() => {

        tl.from(card, {
            duration: 1,
            height: "370px",
            ease: Power4.easeInOut
        }).from(cardName, {
            duration: 1,
            opacity: 0,
            ease: Power4.easeInOut
        })


    }, []);

    const [alertBox, setAlertBox] = useState(null);
    const [Loader, setLoader] = useState(false);
    const [isDone, setisDone] = useState(false);
    const [cardHeight, setCardHeight] = useState("600px")








    function Cardone() {

        useEffect(() => {
            CC();

        },[]);

        async function CC() {
            await Axios.get("https://countriesnow.space/api/v0.1/countries/codes").then((doc) => {
                let data = doc.data.data;



                setCcoptions(data)





            })
        }

        const [ccOptions, setCcoptions] = useState([]);

        const [Fields, setFields] = useState({

            Email: "",
            Password: "",
            MobileNumber: "",
            OTP: ""


        })
        const [cc , setcc] = useState("");

        function ChangeHandel(event) {
            const name = event.target.name;
            const value = event.target.value;

            setFields((preval) => {

                if (name === 'Email') {
                    return {
                        Email: value,
                        Password: preval.Password,
                        MobileNumber: preval.MobileNumber,
                        OTP: preval.OTP
                    }


                } else if (name === 'Password') {
                    return {
                        Email: preval.Email,
                        Password: value,
                        MobileNumber: preval.MobileNumber,
                        OTP: preval.OTP
                    }

                } else if (name === 'Mobile') {
                    return {
                        Email: preval.Email,
                        Password: preval.Password,
                        MobileNumber: value,
                        OTP: preval.OTP
                    }

                } else if (name === 'OTP') {
                    return {
                        Email: preval.Email,
                        Password: preval.Password,
                        MobileNumber: preval.MobileNumber,
                        OTP: value
                    }

                }


            })
        }


        async function Submit() {

            setLoader(true);

            await api.post('/users/verify', {
                CountryCode : cc,
                number: Fields.MobileNumber,
                Email: Fields.Email,
                Password: Fields.Password
            }).then((doc) => {

                if (doc.data.msg) {
                    setLoader(false);
                    setCardHeight("350px");
                    setisDone(true);
                } else if (doc.data.msg === false) {
                    setLoader(false);
                    setAlertBox(null);
                    setAlertBox(
                        <FillAlert top="10%" right="10%" heading="Account exist" info="please try to login or use differnt account" />
                    )
                }



            });

        }

        return (
            <>
                <div>
                    <FillLabel color="#6A097D" name="Email" />
                    <FillInput change={ChangeHandel} name="Email" value={Fields.Email} type="email" />
                </div>
                <div>
                    <FillLabel color="#6A097D" name="Password" />
                    <FillInput name="Password" change={ChangeHandel} value={Fields.Password} type="password" />
                </div>
                <div>
                    <FillLabel color="#6A097D" name="Country Code" />
                    <FillSelect Name="CountryCode" v="select" options={
                        [
                          
                        ccOptions.map((data , index) => 
                                       
                                       <FillOption key={index} value={data.dial_code} name={data.name} />
                                
                            
                        )
                    ]

                    } placeholder="Country Code" onChange={e => setcc(e.currentTarget.value)} value={cc}/>
                </div>
                <div>
                    <FillLabel color="#6A097D" name="Mobile Number" />
                    <FillInput name="Mobile" change={ChangeHandel} pattern="\d{10}" maxLength="10" value={Fields.MobileNumber} type="text" />
                </div>
                <div>


                    {Loader ? <Loading /> : <FillButton name="Next" margin="20px 0" click={Submit} bg="#6A097D" color="#F1D4D4" />}

                    <FillButtonLink color="#6A097D" click={props.login} name="back to login" />
                </div>
            </>
        );


    }

    function CardTwo(props) {

        const [work, setWork] = useState(true);

        function Notdone() {

            const [OTPFill, setOTPFill] = useState("");

            async function sendOtp() {

                setLoader(true);
                await api.post("/users/register", { code: OTPFill }).then((doc) => {

                    if (doc.data.msg === "OK") {
                        setLoader(false);
                        setAlertBox(null);

                        setAlertBox(
                            <FillAlert top="10%" right="10%" heading="Register" info="login again" />
                        );


                        setWork(false);

                    }

                }).catch((e) => {

                })

            }

            return (
                <>
                    <div>
                        <FillLabel color="#6A097D" name="Enter OTP" />
                        <FillInput change={(e) => { setOTPFill(e.target.value) }} name="OTP" value={OTPFill} type="text" pattern="\d{6}" maxLength="6" />
                    </div>


                    <div>
                        {Loader ? <Loading /> : <FillButton name="submit" margin="20px 0" click={sendOtp} bg="#6A097D" color="#F1D4D4" />}

                        <FillButtonLink color="#6A097D" click={props.login} name="back to login" />
                    </div>
                </>
            );

        }


        function Done(props) {

            return (
                <>
                    <div>
                        <h1>done</h1>
                    </div>

                    <div>

                        <FillButtonLink color="#6A097D" click={props.login} name="back to login" />

                    </div>

                </>
            )

        }


        return (

            <>
                {work ? <Notdone /> : <Done />}
            </>
        );

    }





    return (



        <>
            <div className="w-100 h-100 p-0 m-0 d-flex align-items-center justify-content-center">
                {alertBox}
                <div ref={el => card = el} className="card-box1" style={{ height: cardHeight }}>
                    <div ref={el => cardName = el} className="card-Name">
                        <h6>register</h6>
                    </div>

                    {isDone ? <CardTwo /> : <Cardone />}
                </div>
            </div>
        </>



    );


}

export default RegisterCard;