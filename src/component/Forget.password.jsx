import React, { useState, useRef, useEffect } from 'react';
import { TimelineLite, Power4 } from 'gsap';

import { FillButton, FillInput, FillLabel, FillButtonLink, FillAlert, FillSelect, FillOption } from './Extra';
import Loading from './Loading';
import '../css/register.css';
import { api } from '../utils/api';
import Axios from 'axios';
import { useHistory } from 'react-router-dom';



function ForgetPassword(props) {

    const hs = useHistory();
    let tl = new TimelineLite();
    let card = useRef('null');
    let cardName = useRef('null');
    const [cardHeight, setCardHeight] = useState("600px")

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
    const [isLoading, setisLoading] = useState(false);
    const [isDone, setisDone] = useState(false);









    function Cardone() {

        useEffect(() => {
            CC();

        }, []);

        async function CC() {
            await Axios.get("https://countriesnow.space/api/v0.1/countries/codes").then((doc) => {
                let data = doc.data.data;



                setCcoptions(data);
            })
        }

        const [ccOptions, setCcoptions] = useState([]);

        const [Fields, setFields] = useState({

            Email: "",
            Password: "",
            MobileNumber: "",
            confirmPassword: ""


        })
        const [cc, setcc] = useState("");

        function ChangeHandel(event) {
            const name = event.target.name;
            const value = event.target.value;

            setFields((preval) => {

                if (name === 'Mobile') {
                    return {
                        Password: preval.Password,
                        MobileNumber: value,
                        confirmPassword: preval.confirmPassword
                    }

                } else if (name === 'newPassword') {
                    return {
                        Email: preval.Email,
                        Password: value,
                        MobileNumber: preval.MobileNumber,
                        confirmPassword: preval.confirmPassword
                    }

                } else if (name === 'confirmPassword') {
                    return {
                        Email: preval.Email,
                        Password: preval.Password,
                        MobileNumber: preval.MobileNumber,
                        confirmPassword: value
                    }

                }


            })
        }


        async function Submit() {

            setisLoading(true);

            if (cc &&
                Fields.MobileNumber &&
                Fields.confirmPassword &&
                Fields.Password != null || cc &&
                Fields.MobileNumber &&
                Fields.confirmPassword &&
                Fields.Password != "") {

                if (Fields.Password === Fields.confirmPassword) {

                    await api.post('/users/forgetpasswordverify', {
                        CountryCode: cc,
                        number: Fields.MobileNumber,
                       confirmPassword: Fields.confirmPassword,
                        Password: Fields.Password
                    }).then((doc) => {

                        if (doc.data.msg) {
                            setisLoading(false);
                            setCardHeight("350px");
                            setisDone(true);
                        } else if (doc.data.msg === false) {
                            setisLoading(false);
                            setAlertBox(null);
                            setAlertBox(
                                <FillAlert top="10%" right="10%" heading="Account exist" info="please try to login or use differnt account" />
                            )
                        }



                    });
                } else {

                    setisLoading(false);
                    setAlertBox(null);
                    setAlertBox(
                        <FillAlert top="10%" right="10%" heading="Password mismatch" info="Password is not matching" />
                    )

                }



            } else {

                setisLoading(false);
                setAlertBox(null);
                setTimeout(
                    setAlertBox(
                        <FillAlert top="10%" right="10%" heading="Fill input " info="Please Fill all the fields" />
                    ), 3000)
            }

        }

        return (
            <>
                <div>
                    <FillLabel color="#6A097D" name="Country Code" />
                    <FillSelect Name="CountryCode" v="select" options={
                        [

                            ccOptions.map((data, index) =>

                                <FillOption key={index} value={data.dial_code} name={data.name} />


                            )
                        ]

                    } placeholder="Country Code" onChange={e => setcc(e.currentTarget.value)} value={cc} />
                </div>
                <div>
                    <FillLabel color="#6A097D" name="Mobile Number" />
                    <FillInput name="Mobile" change={ChangeHandel} pattern="\d{10}" maxLength="10" value={Fields.MobileNumber} type="text" />
                </div>
                <div>
                    <FillLabel color="#6A097D" name="new password" />
                    <FillInput name="newPassword" change={ChangeHandel} value={Fields.Password} type="password" />
                </div>
                <div>
                    <FillLabel color="#6A097D" name="confirm password" />
                    <FillInput name="confirmPassword" change={ChangeHandel} value={Fields.confirmPassword} type="password" />
                </div>
                <div>


                    {isLoading ? <Loading /> : <FillButton name="Next" margin="20px 0" click={Submit} bg="#6A097D" color="#F1D4D4" />}

                    <FillButtonLink color="#6A097D" click={props.login} name="back to login" />
                </div>
            </>
        );


    }

    function CardTwo(props) {





        const [OTPFill, setOTPFill] = useState("");

        async function sendOtp() {

            setisLoading(true);

            if (!OTPFill == null || !OTPFill == "") {

                await api.post("/users/forgetpasswordotp", { code: OTPFill }).then((doc) => {

                    if (doc.data.msg) {
                        setisLoading(false);
                        setAlertBox(null);

                        setAlertBox(
                            <FillAlert top="10%" right="10%" heading="password reset successful" />
                        );
                        hs.push("/login");


                    }

                }).catch((e) => {
                    setisLoading(false);
                    setAlertBox(null);
                    setAlertBox(
                        <FillAlert top="10%" right="10%" heading="Invalid OTP" info=" your otp is not valid" />
                    );
                });

            } else {
                setisLoading(false);
                setAlertBox(null);
                setAlertBox(
                    <FillAlert top="10%" right="10%" heading="Input Blank" info="please enter otp" />
                );
            }

        }

        return (

            <>

                <div>
                    <FillLabel color="#6A097D" name="Enter OTP" />
                    <FillInput change={(e) => { setOTPFill(e.target.value) }} name="OTP" value={OTPFill} type="text" pattern="\d{6}" maxLength="6" />
                </div>


                <div>
                    {isLoading ? <Loading /> : <FillButton name="reset" margin="20px 0" click={sendOtp} bg="#6A097D" color="#F1D4D4" />}

                    <FillButtonLink color="#6A097D" click={props.login} name="back to login" />
                </div>


            </>
        );







    }





    return (



        <>
            <div className="w-100 h-100 p-0 m-0 d-flex align-items-center justify-content-center">
                {alertBox}
                <div ref={el => card = el} className="card-box1" style={{ height: cardHeight }}>
                    <div ref={el => cardName = el} className="card-Name">
                        <h6>password reset</h6>
                    </div>

                    {isDone ? <CardTwo /> : <Cardone />}
                </div>
            </div>
        </>



    );


}

export default ForgetPassword;