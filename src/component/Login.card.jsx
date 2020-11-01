import React from 'react';
import '../css/login.css';

import {FillButton,FillInput,FillLabel,FillButtonLink} from './Extra';

const LoginCard = (props) => {

    return (
        <>
            <div className="w-100 h-100 p-0 m-0 d-flex align-items-center justify-content-center">

                <div className="card-box">
                    <div>
                        <FillLabel color="#6A097D" name="Email" />
                        <FillInput />
                    </div>
                    <div>
                        <FillLabel color="#6A097D" name="password" />
                        <FillInput />
                    </div>

                    <div>
                        <FillButtonLink color="#6A097D" click={props.register} name="create new account" />
                        <FillButtonLink color="#6A097D" click={props.forget} name="forget password ?" />

                        <FillButton name="login" margin="5px 0" bg="#6A097D" color="#F1D4D4" />


                    </div>
                </div>
            </div>
        </>

    );

}


export default LoginCard;
