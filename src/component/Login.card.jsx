import React, { useState } from 'react';
import '../css/login.css';
import {useHistory} from 'react-router-dom';
import { api } from '../utils/api';

import { FillButton, FillInput, FillLabel, FillButtonLink } from './Extra';
import Loading from './Loading';

const LoginCard = (props) => {
    const his= useHistory();

    const [Fields, setFields] = useState({

        Email: "",
        Password: ""

    });

    const [isLoading , setisLoading] = useState(false);

    function HandelChange(event) {

        const name = event.target.name;
        const value = event.target.value;

        setFields((preval) => {


            if (name === 'Email') {
                return {
                    Email: value,
                    Password: preval.Password
                }


            } else if (name === 'Password') {
                return {
                    Email: preval.Email,
                    Password: value,

                }

            }
        });


    }


    async function submit() {
        setisLoading(false);
      await  api.post("/loginuser/login", {
            Email: Fields.Email,
            Password: Fields.Password
        }).then((docs) => {

            console.log(docs);
         if(docs.data.msg ){

            api.get('loginuser/isAuth').then((d)=>{

                setisLoading(false);
                if(d.data.isfirsttime){
                    setTimeout(his.push("/welcome"),1000);
                }else{
                 setTimeout(his.push("/user"),1000);
                }
            })

        



         }else{
            setisLoading(false);
            his.push("/login");

         }
        });
    }

    return (
        <>
            <div className="w-100 h-100 p-0 m-0 d-flex align-items-center justify-content-center">

                <div className="card-box">
                    <div>
                        <FillLabel color="#6A097D" name="Email" />
                        <FillInput type="email" change={HandelChange} name="Email" value={Fields.Email} />
                    </div>
                    <div>
                        <FillLabel color="#6A097D" name="password" />
                        <FillInput change={HandelChange} type="password" name="Password" value={Fields.Password} />
                    </div>

                    <div>
                        <FillButtonLink color="#6A097D" click={props.register} name="create new account" />
                        <FillButtonLink color="#6A097D" click={props.forget} name="forget password ?" />

    { isLoading ? <Loading/> : <FillButton name="login" click={submit} margin="5px 0" bg="#6A097D" color="#F1D4D4" /> }


                    </div>
                </div>
            </div>
        </>

    );

}


export default LoginCard;
